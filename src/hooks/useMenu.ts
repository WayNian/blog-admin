import { Ref } from "vue";

interface IMenuItem {
  label: string;
  key: string;
  children: Array<IMenuItem>;
}
const menuOptions = [
  {
    label: "Dashboard",
    key: "dashboard",
  },
  {
    label: "创作空间",
    key: "workspace",
    children: [
      {
        label: "列表",
        key: "aritle-list",
      },
      {
        label: "写作",
        key: "aritle-write",
      },
    ],
  },
  {
    label: "音乐空间",
    key: "musicspace",
  },
  {
    label: "分类",
    key: "classification",
    children: [
      {
        label: "Tag",
        key: "tag",
      },
      {
        label: "Category",
        key: "category",
      },
    ],
  },
  {
    label: "关于",
    key: "about",
  },
];

export function useMenu(name: string) {
  const expanKeys: Array<string> = [];

  console.log(name.split("/"));

  //   const getKeys = (list: Array<IMenuItem>) => {
  //     list.map((ele) => {
  //       if (ele.children.length) {
  //       } else {
  //         if (ele.key === name.value) {
  //           expanKeys = [ele.key];
  //         }
  //       }
  //     });
  //   };

  return {
    menuOptions,
    expanKeys,
  };
}
