"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const helperPlugin = require("@strapi/helper-plugin");
const index = require("./index-XLp9u_5A.js");
const AuthenticatedApp = require("./AuthenticatedApp-jZpU4Cuu.js");
const EditPage = require("./EditPage-Ya1LueW9.js");
require("react-dom/client");
require("@strapi/design-system");
require("invariant");
require("lodash/isFunction");
require("lodash/merge");
require("lodash/pick");
require("react-helmet");
require("react-router-dom");
require("react");
require("react-intl");
require("react-redux");
require("@reduxjs/toolkit");
require("@reduxjs/toolkit/query/react");
require("axios");
require("@radix-ui/react-context");
require("@strapi/design-system/v2");
require("@strapi/icons");
require("formik");
require("lodash/camelCase");
require("styled-components");
require("yup");
require("lodash/omit");
require("qs");
require("react-query");
require("immer");
require("lodash/get");
require("lodash/set");
require("lodash/defaultsDeep");
require("lodash/isEqual");
require("lodash/throttle");
require("lodash/isBoolean");
require("lodash/isEmpty");
require("lodash/isNaN");
require("lodash/toNumber");
require("react-dnd");
require("react-dnd-html5-backend");
require("react-window");
require("lodash/cloneDeep");
require("lodash/upperFirst");
require("prop-types");
require("lodash/fp");
require("lodash/take");
require("slate");
require("slate-history");
require("slate-react");
require("@radix-ui/react-toolbar");
require("codemirror5");
require("sanitize-html");
require("highlight.js");
require("markdown-it");
require("markdown-it-abbr");
require("markdown-it-container");
require("markdown-it-deflist");
require("markdown-it-emoji");
require("markdown-it-footnote");
require("markdown-it-ins");
require("markdown-it-mark");
require("markdown-it-sub");
require("markdown-it-sup");
require("highlight.js/styles/solarized-dark.css");
require("codemirror5/addon/display/placeholder");
require("lodash/toString");
require("react-dom");
require("fractional-indexing");
require("lodash/uniqBy");
require("lodash/unset");
require("lodash/isArray");
require("date-fns/parseISO");
require("semver/functions/lt");
require("semver/functions/valid");
require("./useContentTypes-uGb8dsVa.js");
require("./useWebhooks-HHH0cKE7.js");
const ProtectedCreatePage = () => {
  const permissions = index.useTypedSelector(AuthenticatedApp.selectAdminPermissions);
  return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.CheckPagePermissions, { permissions: permissions.settings?.webhooks.create, children: /* @__PURE__ */ jsxRuntime.jsx(EditPage.EditPage, {}) });
};
exports.CreatePage = EditPage.EditPage;
exports.ProtectedCreatePage = ProtectedCreatePage;
//# sourceMappingURL=CreatePage-1PDqB5_q.js.map
