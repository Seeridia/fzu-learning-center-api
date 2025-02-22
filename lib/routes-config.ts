// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "API",
    href: "/api",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "addSpaceAppoint", href: "/addSpaceAppoint" },
      { title: "revocationAppointApp", href: "/revocationAppointApp" },
      { title: "queryMyAppoint", href: "/queryMyAppoint" },
      { title: "queryStationStatusByTime", href: "/queryStationStatusByTime" },
    ],
  },
  {
    title: "Appendix",
    href: "/appendix",
    noLink: true,
    items: [
      { title: "Seat ID Reference Table", href: "/seatIdReferenceTable" },
      { title: "Seat ID Conversion Tool", href: "/seatIdConversionTool" },
      { title: "Seat Sign In Code", href: "/seatSignInCode" },
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
