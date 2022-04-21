import { ClipboardIcon, ProductIcon, TagIcon } from "designs/icons/Drawer";

export const PATH_ADMIN = [
  {
    icon: <ClipboardIcon />,
    title: "Tổng quan",
    path: "/admin",
  },
  {
    icon: <ProductIcon />,
    title: "Sản phẩm",
    path: "/admin/product",
    self: [
      {
        title: "Nhãn sản phẩm",
        path: "/admin/product/tags",
      },
    ]
  },
 
];
