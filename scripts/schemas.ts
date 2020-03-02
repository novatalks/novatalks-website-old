import {
  type,
  undefined,
  string,
  array,
  union,
  intersection,
  brand,
  Branded,
  TypeOf,
  Type,
} from "io-ts";
import { isLeft } from "fp-ts/lib/Either";
import { PathReporter } from "io-ts/lib/PathReporter";

const optional = <A, B>(type: Type<A, B>) => union([type, undefined]);
const format = (regexp: RegExp) =>
  brand(
    string,
    (str): str is Branded<string, { readonly sym: unique symbol }> =>
      regexp.test(str),
    "sym"
  );

const date = format(/^\d\d\d\d-[0-1]\d-[0-3]\d$/);
const time = format(/^[0-2]\d:[0-5]\d$/);

const notEmptyString = format(/.+/);

export const Speaker = type({
  name: notEmptyString,
  company: notEmptyString,
  url: optional(notEmptyString),
});

export type Speaker = TypeOf<typeof Speaker>;

export const AbstractTalk = type({
  title: notEmptyString,
  date: date,
  startTime: time,
  endTime: time,
  location: notEmptyString,
  image: notEmptyString,
  requisites: optional(
    array(
      type({
        title: notEmptyString,
        url: optional(notEmptyString),
      })
    )
  ),
  more: optional(
    array(
      type({
        title: notEmptyString,
        url: notEmptyString,
      })
    )
  ),
});

export type AbstractTalk = TypeOf<typeof AbstractTalk>;

export const TalkWithoutSpeakers = intersection([
  AbstractTalk,
  type({
    speakers: array(union([notEmptyString, Speaker])), // TODO @minItems 1
  }),
]);

export type TalkWithoutSpeakers = TypeOf<typeof TalkWithoutSpeakers>;

export const Talk = intersection([
  AbstractTalk,
  type({
    speakers: array(Speaker), // TODO @minItems 1
  }),
]);

export type Talk = TypeOf<typeof Talk>;

export function validateSpeaker(data: unknown, suffix?: string) {
  const maybe = Speaker.decode(data);
  if (isLeft(maybe)) {
    const message = PathReporter.report(maybe).join("; ");
    throw new Error("Speaker: " + message + (suffix || ""));
  }
  return maybe.right;
}

export function validateTalkWithoutSpeaker(data: unknown, suffix?: string) {
  const maybe = TalkWithoutSpeakers.decode(data);
  if (isLeft(maybe)) {
    const message = PathReporter.report(maybe).join("; ");
    throw new Error("Talk: " + message + (suffix || ""));
  }
  return maybe.right;
}
