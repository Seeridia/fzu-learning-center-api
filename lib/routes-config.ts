// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "介绍",
    href: "/introduction",
  },
  {
    title: "鉴权",
    href: "/token",
  },
  {
    title: "API",
    href: "/api",
    noLink: true,
    items: [
      { title: "签到", href: "/signIn" },
      { title: "退出登录", href: "/signOut" },
      { title: "添加预约", href: "/addSpaceAppoint" },
      { title: "取消预约", href: "/revocationAppointApp" },
      { title: "预约历史", href: "/queryMyAppoint" },
      { title: "查询全场预约情况", href: "/queryStationStatusByTime" },
      { title: "查询特定座位情况", href: "/querySpaceAppointTime" },
    ],
  },
  {
    title: "Appendix",
    href: "/appendix",
    noLink: true,
    items: [
      { title: "Seat ID Reference Table", href: "/seatIdReferenceTable" },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
