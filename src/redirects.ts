const redirects: Readonly<{
  [key: string]: { href: string; as: string } | undefined;
}> = {
  "/#gitModal130416": {
    href: "/talk?year=2016&talk=git",
    as: "/talk/2016/git",
  },
  "/#latexModal040516": {
    href: "/talk?year=2016&talk=latex",
    as: "/talk/2016/latex",
  },
  "/#pythonModal180516": {
    href: "/talk?year=2016&talk=python",
    as: "/talk/2016/python",
  },
  "/#rustModal191016": {
    href: "/talk?year=2016&talk=rust",
    as: "/talk/2016/rust",
  },
  "/#cModal301116": {
    href: "/talk?year=2016&talk=c",
    as: "/talk/2016/c",
  },
  "/#scalaModal150317": {
    href: "/talk?year=2017&talk=scala",
    as: "/talk/2017/scala",
  },
  "/#gamificationModal050417": {
    href: "/talk?year=2017&talk=gamification",
    as: "/talk/2017/gamification",
  },
  "/#dataScienceModal100517": {
    href: "/talk?year=2017&talk=data-science",
    as: "/talk/2017/data-science",
  },
  "/#outSysModal240517": {
    href: "/talk?year=2017&talk=domain-specific-languages",
    as: "/talk/2017/domain-specific-languages",
  },
  "/#cModal200917": {
    href: "/talk?year=2017&talk=c",
    as: "/talk/2017/c",
  },
  "/#gitModal081117": {
    href: "/talk?year=2017&talk=git",
    as: "/talk/2017/git",
  },
  "/#latexModal221117": {
    href: "/talk?year=2017&talk=latex",
    as: "/talk/2017/latex",
  },
  "/#cModal201119": {
    href: "/talk?year=2019&talk=c",
    as: "/talk/2019/c",
  },
  // ups, the #modal was wrong. oh well
  "/#cModal201127": {
    href: "/talk?year=2019&talk=why3",
    as: "/talk/2019/why3",
  },
  "/#why3Modal271119": {
    href: "/talk?year=2019&talk=why3",
    as: "/talk/2019/why3",
  },
};

export default redirects;
