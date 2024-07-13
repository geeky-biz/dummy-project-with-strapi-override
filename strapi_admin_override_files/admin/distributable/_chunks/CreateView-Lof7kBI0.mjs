import { jsx } from "react/jsx-runtime";
import { CheckPagePermissions } from "@strapi/helper-plugin";
import { useSelector } from "react-redux";
import { s as selectAdminPermissions } from "./AuthenticatedApp-MNkN9XTo.mjs";
import { EditView } from "./EditViewPage-UMP3LxC5.mjs";
import "react";
import "semver/functions/lt";
import "semver/functions/valid";
import "./index-9D8SuHYl.mjs";
import "react-dom/client";
import "@strapi/design-system";
import "invariant";
import "lodash/isFunction";
import "lodash/merge";
import "lodash/pick";
import "react-helmet";
import "react-router-dom";
import "react-intl";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query/react";
import "axios";
import "@radix-ui/react-context";
import "@strapi/design-system/v2";
import "@strapi/icons";
import "formik";
import "lodash/camelCase";
import "styled-components";
import "yup";
import "lodash/omit";
import "qs";
import "react-query";
import "immer";
import "lodash/get";
import "lodash/set";
import "lodash/defaultsDeep";
import "lodash/isEqual";
import "lodash/throttle";
import "lodash/isBoolean";
import "lodash/isEmpty";
import "lodash/isNaN";
import "lodash/toNumber";
import "react-dnd";
import "react-dnd-html5-backend";
import "react-window";
import "lodash/cloneDeep";
import "lodash/upperFirst";
import "prop-types";
import "lodash/fp";
import "lodash/take";
import "slate";
import "slate-history";
import "slate-react";
import "@radix-ui/react-toolbar";
import "codemirror5";
import "sanitize-html";
import "highlight.js";
import "markdown-it";
import "markdown-it-abbr";
import "markdown-it-container";
import "markdown-it-deflist";
import "markdown-it-emoji";
import "markdown-it-footnote";
import "markdown-it-ins";
import "markdown-it-mark";
import "markdown-it-sub";
import "markdown-it-sup";
import "highlight.js/styles/solarized-dark.css";
import "codemirror5/addon/display/placeholder";
import "lodash/toString";
import "react-dom";
import "fractional-indexing";
import "lodash/uniqBy";
import "lodash/unset";
import "lodash/isArray";
import "date-fns/parseISO";
import "./apiTokens-Ppzn76x0.mjs";
import "./constants-fJt30IoY.mjs";
import "./TokenTypeSelect-g9aX5hlC.mjs";
import "date-fns";
import "date-fns/locale";
import "lodash/map";
import "lodash/tail";
import "lodash/capitalize";
import "lodash/pull";
const ProtectedCreateView = () => {
  const permissions = useSelector(selectAdminPermissions);
  return /* @__PURE__ */ jsx(CheckPagePermissions, { permissions: permissions.settings?.["api-tokens"].create, children: /* @__PURE__ */ jsx(EditView, {}) });
};
export {
  ProtectedCreateView
};
//# sourceMappingURL=CreateView-Lof7kBI0.mjs.map
