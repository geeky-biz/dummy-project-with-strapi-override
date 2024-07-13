"use strict";
const jsxRuntime = require("react/jsx-runtime");
const helperPlugin = require("@strapi/helper-plugin");
const client = require("react-dom/client");
const designSystem = require("@strapi/design-system");
const invariant = require("invariant");
const isFunction = require("lodash/isFunction");
const merge = require("lodash/merge");
const pick$1 = require("lodash/pick");
const reactHelmet = require("react-helmet");
const reactRouterDom = require("react-router-dom");
const React = require("react");
const reactIntl = require("react-intl");
const reactRedux = require("react-redux");
const toolkit = require("@reduxjs/toolkit");
const react = require("@reduxjs/toolkit/query/react");
const axios = require("axios");
const reactContext = require("@radix-ui/react-context");
const v2 = require("@strapi/design-system/v2");
const Icons = require("@strapi/icons");
const formik = require("formik");
const camelCase = require("lodash/camelCase");
const styled = require("styled-components");
const yup = require("yup");
const omit = require("lodash/omit");
const qs = require("qs");
const reactQuery = require("react-query");
const produce = require("immer");
const get = require("lodash/get");
const set = require("lodash/set");
const defaultsDeep = require("lodash/defaultsDeep");
const isEqual = require("lodash/isEqual");
const throttle = require("lodash/throttle");
const isBoolean = require("lodash/isBoolean");
const isEmpty = require("lodash/isEmpty");
const isNaN$1 = require("lodash/isNaN");
const toNumber = require("lodash/toNumber");
const reactDnd = require("react-dnd");
const reactDndHtml5Backend = require("react-dnd-html5-backend");
const reactWindow = require("react-window");
const cloneDeep = require("lodash/cloneDeep");
const upperFirst = require("lodash/upperFirst");
const PropTypes = require("prop-types");
const fp = require("lodash/fp");
const take = require("lodash/take");
const slate = require("slate");
const slateHistory = require("slate-history");
const slateReact = require("slate-react");
const Toolbar = require("@radix-ui/react-toolbar");
const CodeMirror = require("codemirror5");
const sanitizeHtml = require("sanitize-html");
const highlight_js = require("highlight.js");
const Markdown = require("markdown-it");
const abbr = require("markdown-it-abbr");
const container = require("markdown-it-container");
const deflist = require("markdown-it-deflist");
const emoji = require("markdown-it-emoji");
const footnote = require("markdown-it-footnote");
const ins = require("markdown-it-ins");
const mark = require("markdown-it-mark");
const sub = require("markdown-it-sub");
const sup = require("markdown-it-sup");
require("highlight.js/styles/solarized-dark.css");
require("codemirror5/addon/display/placeholder");
const toString = require("lodash/toString");
const reactDom = require("react-dom");
const fractionalIndexing = require("fractional-indexing");
const uniqBy = require("lodash/uniqBy");
const unset = require("lodash/unset");
const isArray = require("lodash/isArray");
const parseISO = require("date-fns/parseISO");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const invariant__default = /* @__PURE__ */ _interopDefault(invariant);
const isFunction__default = /* @__PURE__ */ _interopDefault(isFunction);
const merge__default = /* @__PURE__ */ _interopDefault(merge);
const pick__default = /* @__PURE__ */ _interopDefault(pick$1);
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
const axios__default = /* @__PURE__ */ _interopDefault(axios);
const Icons__namespace = /* @__PURE__ */ _interopNamespace(Icons);
const camelCase__default = /* @__PURE__ */ _interopDefault(camelCase);
const styled__default = /* @__PURE__ */ _interopDefault(styled);
const yup__namespace = /* @__PURE__ */ _interopNamespace(yup);
const omit__default = /* @__PURE__ */ _interopDefault(omit);
const produce__default = /* @__PURE__ */ _interopDefault(produce);
const get__default = /* @__PURE__ */ _interopDefault(get);
const set__default = /* @__PURE__ */ _interopDefault(set);
const defaultsDeep__default = /* @__PURE__ */ _interopDefault(defaultsDeep);
const isEqual__default = /* @__PURE__ */ _interopDefault(isEqual);
const throttle__default = /* @__PURE__ */ _interopDefault(throttle);
const isBoolean__default = /* @__PURE__ */ _interopDefault(isBoolean);
const isEmpty__default = /* @__PURE__ */ _interopDefault(isEmpty);
const isNaN__default = /* @__PURE__ */ _interopDefault(isNaN$1);
const toNumber__default = /* @__PURE__ */ _interopDefault(toNumber);
const cloneDeep__default = /* @__PURE__ */ _interopDefault(cloneDeep);
const upperFirst__default = /* @__PURE__ */ _interopDefault(upperFirst);
const PropTypes__default = /* @__PURE__ */ _interopDefault(PropTypes);
const take__default = /* @__PURE__ */ _interopDefault(take);
const Toolbar__namespace = /* @__PURE__ */ _interopNamespace(Toolbar);
const CodeMirror__default = /* @__PURE__ */ _interopDefault(CodeMirror);
const sanitizeHtml__default = /* @__PURE__ */ _interopDefault(sanitizeHtml);
const Markdown__default = /* @__PURE__ */ _interopDefault(Markdown);
const abbr__default = /* @__PURE__ */ _interopDefault(abbr);
const container__default = /* @__PURE__ */ _interopDefault(container);
const deflist__default = /* @__PURE__ */ _interopDefault(deflist);
const emoji__default = /* @__PURE__ */ _interopDefault(emoji);
const footnote__default = /* @__PURE__ */ _interopDefault(footnote);
const ins__default = /* @__PURE__ */ _interopDefault(ins);
const mark__default = /* @__PURE__ */ _interopDefault(mark);
const sub__default = /* @__PURE__ */ _interopDefault(sub);
const sup__default = /* @__PURE__ */ _interopDefault(sup);
const toString__default = /* @__PURE__ */ _interopDefault(toString);
const uniqBy__default = /* @__PURE__ */ _interopDefault(uniqBy);
const unset__default = /* @__PURE__ */ _interopDefault(unset);
const isArray__default = /* @__PURE__ */ _interopDefault(isArray);
const parseISO__default = /* @__PURE__ */ _interopDefault(parseISO);
const styles = `
.strapi--root {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #fff;
}

.strapi--no-js {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: helvetica, arial, sans-serif;
}
`;
const NoJavascript = () => {
  return /* @__PURE__ */ jsxRuntime.jsx("noscript", { children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "strapi--root", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "strapi--no-js", children: [
    /* @__PURE__ */ jsxRuntime.jsx("style", { type: "text/css", children: styles }),
    /* @__PURE__ */ jsxRuntime.jsx("h1", { children: "JavaScript disabled" }),
    /* @__PURE__ */ jsxRuntime.jsxs("p", { children: [
      "Please ",
      /* @__PURE__ */ jsxRuntime.jsx("a", { href: "https://www.enable-javascript.com/", children: "enable JavaScript" }),
      " in your browser and reload the page to proceed."
    ] })
  ] }) }) });
};
const globalStyles = `
  html,
  body,
  #strapi {
    height: 100%;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
`;
const DefaultDocument = ({ entryPath }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntime.jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsxRuntime.jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" }),
      /* @__PURE__ */ jsxRuntime.jsx("meta", { name: "robots", content: "noindex" }),
      /* @__PURE__ */ jsxRuntime.jsx("meta", { name: "referrer", content: "same-origin" }),
      /* @__PURE__ */ jsxRuntime.jsx("title", { children: "Strapi Admin" }),
      /* @__PURE__ */ jsxRuntime.jsx("style", { children: globalStyles })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("body", { children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { id: "strapi" }),
      /* @__PURE__ */ jsxRuntime.jsx(NoJavascript, {}),
      entryPath ? /* @__PURE__ */ jsxRuntime.jsx("script", { type: "module", src: entryPath }) : null
    ] })
  ] });
};
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
function createContext(rootComponentName, defaultContext) {
  const Context = React__namespace.createContext(defaultContext);
  const Provider2 = (props) => {
    const { children, ...context } = props;
    const value = React__namespace.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ jsxRuntime.jsx(Context.Provider, { value, children });
  };
  const useContext = (consumerName) => {
    const ctx = React__namespace.useContext(Context);
    if (!ctx) {
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return ctx;
  };
  Provider2.displayName = rootComponentName + "Provider";
  return [Provider2, useContext];
}
const useTypedDispatch = reactRedux.useDispatch;
const useTypedStore = reactRedux.useStore;
const useTypedSelector = reactRedux.useSelector;
const createTypedSelector = (selector) => toolkit.createSelector((state) => state, selector);
const THEME_LOCAL_STORAGE_KEY = "STRAPI_THEME";
const LANGUAGE_LOCAL_STORAGE_KEY = "strapi-admin-language";
const adminSlice = toolkit.createSlice({
  name: "admin",
  initialState: () => {
    return {
      language: {
        locale: "en",
        localeNames: { en: "English" }
      },
      permissions: {},
      theme: {
        availableThemes: [],
        currentTheme: localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || "system"
      }
    };
  },
  reducers: {
    setAdminPermissions(state, action) {
      state.permissions = action.payload;
    },
    setAppTheme(state, action) {
      state.theme.currentTheme = action.payload;
      window.localStorage.setItem(THEME_LOCAL_STORAGE_KEY, action.payload);
    },
    setAvailableThemes(state, action) {
      state.theme.availableThemes = action.payload;
    },
    setLocale(state, action) {
      state.language.locale = action.payload;
      window.localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, action.payload);
      document.documentElement.setAttribute("lang", action.payload);
    }
  }
});
const reducer$9 = adminSlice.reducer;
const { setAdminPermissions, setAppTheme, setAvailableThemes, setLocale } = adminSlice.actions;
const axiosBaseQuery = () => async (query, { signal }) => {
  try {
    const { get: get2, post, del, put } = helperPlugin.getFetchClient();
    if (typeof query === "string") {
      const result = await get2(query, { signal });
      return { data: result.data };
    } else {
      const { url, method = "GET", data, config } = query;
      if (method === "POST") {
        const result2 = await post(url, data, { ...config, signal });
        return { data: result2.data };
      }
      if (method === "DELETE") {
        const result2 = await del(url, { ...config, signal });
        return { data: result2.data };
      }
      if (method === "PUT") {
        const result2 = await put(url, data, { ...config, signal });
        return { data: result2.data };
      }
      const result = await get2(url, { ...config, signal });
      return { data: result.data };
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (typeof err.response?.data === "object" && err.response?.data !== null && "error" in err.response?.data) {
        return { data: void 0, error: err.response?.data.error };
      } else {
        return {
          data: void 0,
          error: {
            name: "UnknownError",
            message: "There was an unknown error response from the API",
            details: err.response?.data,
            status: err.response?.status
          }
        };
      }
    }
    const error = err;
    return {
      data: void 0,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack
      }
    };
  }
};
const isBaseQueryError = (error) => {
  return error.name !== void 0;
};
const adminApi = react.createApi({
  reducerPath: "adminApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: [
    "ApiToken",
    "LicenseLimits",
    "Me",
    "ProjectSettings",
    "ProvidersOptions",
    "ReviewWorkflow",
    "ReviewWorkflowStage",
    "Role",
    "RolePermissions",
    "TransferToken",
    "User",
    "Webhook"
  ],
  endpoints: (builder) => ({
    /**
     * This is here because it's shared between the transfer-token routes & the api-tokens.
     */
    regenerateToken: builder.mutation({
      query: (url) => ({
        method: "POST",
        url: `${url}/regenerate`
      }),
      transformResponse: (response) => response.data
    })
  })
});
const { useRegenerateTokenMutation } = adminApi;
const authService = adminApi.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * ME
     */
    getMe: builder.query({
      query: () => ({
        method: "GET",
        url: "/admin/users/me"
      }),
      transformResponse(res) {
        return res.data;
      },
      providesTags: (res) => res ? ["Me", { type: "User", id: res.id }] : ["Me"]
    }),
    getMyPermissions: builder.query({
      query: () => ({
        method: "GET",
        url: "/admin/users/me/permissions"
      }),
      transformResponse(res) {
        return res.data;
      }
    }),
    updateMe: builder.mutation({
      query: (body) => ({
        method: "PUT",
        url: "/admin/users/me",
        data: body
      }),
      transformResponse(res) {
        return res.data;
      },
      invalidatesTags: ["Me"]
    }),
    /**
     * Auth methods
     */
    login: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "/admin/login",
        data: body
      }),
      transformResponse(res) {
        return res.data;
      },
      invalidatesTags: ["Me"]
    }),
    logout: builder.mutation({
      query: () => ({
        method: "POST",
        url: "/admin/logout"
      })
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "/admin/reset-password",
        data: body
      }),
      transformResponse(res) {
        return res.data;
      }
    }),
    renewToken: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "/admin/renew-token",
        data: body
      }),
      transformResponse(res) {
        return res.data;
      }
    }),
    getRegistrationInfo: builder.query({
      query: (registrationToken) => ({
        url: "/admin/registration-info",
        method: "GET",
        config: {
          params: {
            registrationToken
          }
        }
      }),
      transformResponse(res) {
        return res.data;
      }
    }),
    registerAdmin: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "/admin/register-admin",
        data: body
      }),
      transformResponse(res) {
        return res.data;
      }
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "/admin/register",
        data: body
      }),
      transformResponse(res) {
        return res.data;
      }
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: "/admin/forgot-password",
        method: "POST",
        data: body
      })
    }),
    isSSOLocked: builder.query({
      query: () => ({
        url: "/admin/providers/isSSOLocked",
        method: "GET"
      }),
      transformResponse(res) {
        return res.data;
      }
    }),
    getProviders: builder.query({
      query: () => ({
        url: "/admin/providers",
        method: "GET"
      })
    }),
    getProviderOptions: builder.query({
      query: () => ({
        url: "/admin/providers/options",
        method: "GET"
      }),
      transformResponse(res) {
        return res.data;
      },
      providesTags: ["ProvidersOptions"]
    }),
    updateProviderOptions: builder.mutation({
      query: (body) => ({
        url: "/admin/providers/options",
        method: "PUT",
        data: body
      }),
      transformResponse(res) {
        return res.data;
      },
      invalidatesTags: ["ProvidersOptions"]
    })
  }),
  overrideExisting: false
});
const {
  useGetMeQuery,
  useLoginMutation,
  useRenewTokenMutation,
  useLogoutMutation,
  useUpdateMeMutation,
  useResetPasswordMutation,
  useRegisterAdminMutation,
  useRegisterUserMutation,
  useGetRegistrationInfoQuery,
  useForgotPasswordMutation,
  useGetMyPermissionsQuery,
  useIsSSOLockedQuery,
  useGetProvidersQuery,
  useGetProviderOptionsQuery,
  useUpdateProviderOptionsMutation
} = authService;
const [Provider, useAuth] = createContext("Auth");
const STORAGE_KEYS = {
  TOKEN: "jwtToken",
  USER: "userInfo"
};
const AuthProvider = ({ children }) => {
  const dispatch = useTypedDispatch();
  const [token, setToken] = React__namespace.useState(() => {
    const token2 = localStorage.getItem(STORAGE_KEYS.TOKEN) ?? sessionStorage.getItem(STORAGE_KEYS.TOKEN);
    if (typeof token2 === "string") {
      return JSON.parse(token2);
    }
    return null;
  });
  const { data: user } = useGetMeQuery(void 0, {
    /**
     * If there's no token, we don't try to fetch
     * the user data because it will fail.
     */
    skip: !token
  });
  const { push } = reactRouterDom.useHistory();
  const [loginMutation] = useLoginMutation();
  const [renewTokenMutation] = useRenewTokenMutation();
  const [logoutMutation] = useLogoutMutation();
  const clearStorage = React__namespace.useCallback(() => {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
    sessionStorage.removeItem(STORAGE_KEYS.TOKEN);
    sessionStorage.removeItem(STORAGE_KEYS.USER);
    setToken(null);
  }, []);
  React__namespace.useEffect(() => {
    const token2 = localStorage.getItem(STORAGE_KEYS.TOKEN) ?? sessionStorage.getItem(STORAGE_KEYS.TOKEN);
    if (token2) {
      renewTokenMutation({ token: JSON.parse(token2) }).then((res) => {
        if ("data" in res) {
          setToken(res.data.token);
        } else {
          clearStorage();
          push("/auth/login");
        }
      });
    }
  }, [renewTokenMutation, clearStorage, push]);
  React__namespace.useEffect(() => {
    helperPlugin.auth.setUserInfo(user, true);
    if (user) {
      if (user.preferedLanguage) {
        dispatch(setLocale(user.preferedLanguage));
      }
    }
  }, [dispatch, user]);
  React__namespace.useEffect(() => {
    helperPlugin.auth.setToken(token, false);
  }, [token]);
  React__namespace.useEffect(() => {
    const handleUserStorageChange = (event) => {
      if (event.key === STORAGE_KEYS.USER && event.newValue === null) {
        clearStorage();
        push("/auth/login");
      }
    };
    window.addEventListener("storage", handleUserStorageChange);
    return () => {
      window.removeEventListener("storage", handleUserStorageChange);
    };
  });
  const login = React__namespace.useCallback(
    async ({ rememberMe, ...body }) => {
      const res = await loginMutation(body);
      if ("data" in res) {
        const { token: token2 } = res.data;
        helperPlugin.auth.setToken(token2, rememberMe);
        setToken(token2);
      }
      return res;
    },
    [loginMutation]
  );
  const logout = React__namespace.useCallback(async () => {
    await logoutMutation();
    clearStorage();
    push("/auth/login");
  }, [clearStorage, logoutMutation, push]);
  return /* @__PURE__ */ jsxRuntime.jsx(Provider, { token, user, login, logout, setToken, children });
};
const PrivateRoute = ({ children, ...rest }) => {
  const { token } = useAuth("PrivateRoute");
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactRouterDom.Route,
    {
      ...rest,
      render: ({ location: { pathname, search } }) => token !== null ? children : /* @__PURE__ */ jsxRuntime.jsx(
        reactRouterDom.Redirect,
        {
          to: {
            pathname: "/auth/login",
            search: pathname !== "/" ? `?redirectTo=${encodeURIComponent(`${pathname}${search}`)}` : void 0
          }
        }
      )
    }
  );
};
const ADMIN_PERMISSIONS_CE = {
  contentManager: {
    main: [],
    collectionTypesConfigurations: [
      {
        action: "plugin::content-manager.collection-types.configure-view",
        subject: null
      }
    ],
    componentsConfigurations: [
      {
        action: "plugin::content-manager.components.configure-layout",
        subject: null
      }
    ],
    singleTypesConfigurations: [
      {
        action: "plugin::content-manager.single-types.configure-view",
        subject: null
      }
    ]
  },
  marketplace: {
    main: [{ action: "admin::marketplace.read", subject: null }],
    read: [{ action: "admin::marketplace.read", subject: null }]
  },
  settings: {
    roles: {
      main: [
        { action: "admin::roles.create", subject: null },
        { action: "admin::roles.update", subject: null },
        { action: "admin::roles.read", subject: null },
        { action: "admin::roles.delete", subject: null }
      ],
      create: [{ action: "admin::roles.create", subject: null }],
      delete: [{ action: "admin::roles.delete", subject: null }],
      read: [{ action: "admin::roles.read", subject: null }],
      update: [{ action: "admin::roles.update", subject: null }]
    },
    users: {
      main: [
        { action: "admin::users.create", subject: null },
        { action: "admin::users.read", subject: null },
        { action: "admin::users.update", subject: null },
        { action: "admin::users.delete", subject: null }
      ],
      create: [{ action: "admin::users.create", subject: null }],
      delete: [{ action: "admin::users.delete", subject: null }],
      read: [{ action: "admin::users.read", subject: null }],
      update: [{ action: "admin::users.update", subject: null }]
    },
    webhooks: {
      main: [
        { action: "admin::webhooks.create", subject: null },
        { action: "admin::webhooks.read", subject: null },
        { action: "admin::webhooks.update", subject: null },
        { action: "admin::webhooks.delete", subject: null }
      ],
      create: [{ action: "admin::webhooks.create", subject: null }],
      delete: [{ action: "admin::webhooks.delete", subject: null }],
      read: [
        { action: "admin::webhooks.read", subject: null },
        // NOTE: We need to check with the API
        { action: "admin::webhooks.update", subject: null },
        { action: "admin::webhooks.delete", subject: null }
      ],
      update: [{ action: "admin::webhooks.update", subject: null }]
    },
    "api-tokens": {
      main: [{ action: "admin::api-tokens.access", subject: null }],
      create: [{ action: "admin::api-tokens.create", subject: null }],
      delete: [{ action: "admin::api-tokens.delete", subject: null }],
      read: [{ action: "admin::api-tokens.read", subject: null }],
      update: [{ action: "admin::api-tokens.update", subject: null }],
      regenerate: [{ action: "admin::api-tokens.regenerate", subject: null }]
    },
    "transfer-tokens": {
      main: [{ action: "admin::transfer.tokens.access", subject: null }],
      create: [{ action: "admin::transfer.tokens.create", subject: null }],
      delete: [{ action: "admin::transfer.tokens.delete", subject: null }],
      read: [{ action: "admin::transfer.tokens.read", subject: null }],
      update: [{ action: "admin::transfer.tokens.update", subject: null }],
      regenerate: [{ action: "admin::transfer.tokens.regenerate", subject: null }]
    },
    "project-settings": {
      read: [{ action: "admin::project-settings.read", subject: null }],
      update: [{ action: "admin::project-settings.update", subject: null }]
    }
  }
};
const HOOKS = {
  /**
   * Hook that allows to mutate the displayed headers of the list view table
   * @constant
   * @type {string}
   */
  INJECT_COLUMN_IN_TABLE: "Admin/CM/pages/ListView/inject-column-in-table",
  /**
   * Hook that allows to mutate the CM's collection types links pre-set filters
   * @constant
   * @type {string}
   */
  MUTATE_COLLECTION_TYPES_LINKS: "Admin/CM/pages/App/mutate-collection-types-links",
  /**
   * Hook that allows to mutate the CM's edit view layout
   * @constant
   * @type {string}
   */
  MUTATE_EDIT_VIEW_LAYOUT: "Admin/CM/pages/EditView/mutate-edit-view-layout",
  /**
   * Hook that allows to mutate the CM's single types links pre-set filters
   * @constant
   * @type {string}
   */
  MUTATE_SINGLE_TYPES_LINKS: "Admin/CM/pages/App/mutate-single-types-links"
};
const SETTINGS_LINKS_CE = () => ({
  global: [
    {
      intlLabel: { id: "Settings.application.title", defaultMessage: "Overview" },
      to: "/settings/application-infos",
      id: "000-application-infos"
    },
    {
      intlLabel: { id: "Settings.webhooks.title", defaultMessage: "Webhooks" },
      to: "/settings/webhooks",
      id: "webhooks"
    },
    {
      intlLabel: { id: "Settings.apiTokens.title", defaultMessage: "API Tokens" },
      to: "/settings/api-tokens?sort=name:ASC",
      id: "api-tokens"
    },
    {
      intlLabel: { id: "Settings.transferTokens.title", defaultMessage: "Transfer Tokens" },
      to: "/settings/transfer-tokens?sort=name:ASC",
      id: "transfer-tokens"
    },
    // If the Enterprise/Cloud feature is not enabled and if the config doesn't disable it, we promote the Enterprise/Cloud feature by displaying them in the settings menu.
    // Disable this by adding "promoteEE: false" to your `./config/admin.js` file
    ...!window.strapi.features.isEnabled(window.strapi.features.SSO) && window.strapi?.flags?.promoteEE ? [
      {
        intlLabel: { id: "Settings.sso.title", defaultMessage: "Single Sign-On" },
        to: "/settings/purchase-single-sign-on",
        id: "sso-purchase-page",
        lockIcon: true
        // TODO: to replace with another name in v5
      }
    ] : [],
    ...!window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS) && window.strapi?.flags?.promoteEE ? [
      {
        intlLabel: {
          id: "Settings.review-workflows.page.title",
          defaultMessage: "Review Workflows"
        },
        to: "/settings/purchase-review-workflows",
        id: "review-workflows-purchase-page",
        lockIcon: true
        // TODO: to replace with another name in v5
      }
    ] : []
  ],
  admin: [
    {
      intlLabel: { id: "global.roles", defaultMessage: "Roles" },
      to: "/settings/roles",
      id: "roles"
    },
    {
      intlLabel: { id: "global.users", defaultMessage: "Users" },
      // Init the search params directly
      to: "/settings/users?pageSize=10&page=1&sort=firstname",
      id: "users"
    },
    ...!window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS) && window.strapi?.flags?.promoteEE ? [
      {
        intlLabel: { id: "global.auditLogs", defaultMessage: "Audit Logs" },
        to: "/settings/purchase-audit-logs",
        id: "auditLogs-purchase-page",
        lockIcon: true
        // TODO: to replace with another name in v5
      }
    ] : []
  ]
});
const admin = adminApi.injectEndpoints({
  endpoints: (builder) => ({
    init: builder.query({
      query: () => ({
        url: "/admin/init",
        method: "GET"
      }),
      transformResponse(res) {
        return res.data;
      }
    }),
    information: builder.query({
      query: () => ({
        url: "/admin/information",
        method: "GET"
      }),
      transformResponse(res) {
        return res.data;
      }
    }),
    telemetryProperties: builder.query({
      query: () => ({
        url: "/admin/telemetry-properties",
        method: "GET",
        config: {
          validateStatus: (status) => status < 500
        }
      }),
      transformResponse(res) {
        return res.data;
      }
    }),
    projectSettings: builder.query({
      query: () => ({
        url: "/admin/project-settings",
        method: "GET"
      }),
      providesTags: ["ProjectSettings"],
      transformResponse(data) {
        return {
          authLogo: data.authLogo ? {
            name: data.authLogo.name,
            url: helperPlugin.prefixFileUrlWithBackendUrl(data.authLogo.url)
          } : void 0,
          menuLogo: data.menuLogo ? {
            name: data.menuLogo.name,
            url: helperPlugin.prefixFileUrlWithBackendUrl(data.menuLogo.url)
          } : void 0
        };
      }
    }),
    updateProjectSettings: builder.mutation({
      query: (data) => ({
        url: "/admin/project-settings",
        method: "POST",
        data,
        config: {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      }),
      invalidatesTags: ["ProjectSettings"]
    }),
    getPlugins: builder.query({
      query: () => ({
        url: "/admin/plugins",
        method: "GET"
      })
    }),
    getLicenseLimits: builder.query({
      query: () => ({
        url: "/admin/license-limit-information",
        method: "GET"
      }),
      providesTags: ["LicenseLimits"]
    })
  }),
  overrideExisting: false
});
const {
  useInitQuery,
  useTelemetryPropertiesQuery,
  useInformationQuery,
  useProjectSettingsQuery,
  useUpdateProjectSettingsMutation,
  useGetPluginsQuery,
  useGetLicenseLimitsQuery
} = admin;
const [ConfigurationContextProvider, useConfiguration] = reactContext.createContext("ConfigurationContext");
const ConfigurationProvider = ({
  children,
  authLogo: defaultAuthLogo,
  menuLogo: defaultMenuLogo,
  showReleaseNotification = false,
  showTutorials = false
}) => {
  const { trackUsage } = helperPlugin.useTracking();
  const { formatMessage } = reactIntl.useIntl();
  const toggleNotification = helperPlugin.useNotification();
  const { _unstableFormatAPIError: formatAPIError } = helperPlugin.useAPIErrorHandler();
  const { token } = useAuth("ConfigurationProvider");
  const { data, isSuccess } = useProjectSettingsQuery(void 0, {
    skip: !token
  });
  const [updateProjectSettingsMutation] = useUpdateProjectSettingsMutation();
  const updateProjectSettings = React__namespace.useCallback(
    async (body) => {
      const formData = new FormData();
      Object.entries(body).forEach(([key, value]) => {
        if (value?.rawFile) {
          formData.append(key, value.rawFile);
        } else if (value === null) {
          formData.append(key, JSON.stringify(value));
        }
      });
      const res = await updateProjectSettingsMutation(formData);
      if ("data" in res) {
        const updatedMenuLogo = !!res.data.menuLogo && !!body.menuLogo?.rawFile;
        const updatedAuthLogo = !!res.data.authLogo && !!body.authLogo?.rawFile;
        if (updatedMenuLogo) {
          trackUsage("didChangeLogo", {
            logo: "menu"
          });
        }
        if (updatedAuthLogo) {
          trackUsage("didChangeLogo", {
            logo: "auth"
          });
        }
        toggleNotification({
          type: "success",
          message: formatMessage({ id: "app", defaultMessage: "Saved" })
        });
      } else {
        toggleNotification({
          type: "warning",
          message: formatAPIError(res.error)
        });
      }
    },
    [formatAPIError, formatMessage, toggleNotification, trackUsage, updateProjectSettingsMutation]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    ConfigurationContextProvider,
    {
      showReleaseNotification,
      showTutorials,
      logos: {
        menu: {
          custom: isSuccess ? data?.menuLogo : defaultMenuLogo.custom,
          default: defaultMenuLogo.default
        },
        auth: {
          custom: isSuccess ? data?.authLogo : defaultAuthLogo.custom,
          default: defaultAuthLogo.default
        }
      },
      updateProjectSettings,
      children
    }
  );
};
function isEnterprise() {
  return window.strapi.isEE;
}
const useEnterprise = (ceData, eeCallback, opts = {}) => {
  const { defaultValue = null, combine = (_ceData, eeData) => eeData, enabled = true } = opts;
  const eeCallbackRef = helperPlugin.useCallbackRef(eeCallback);
  const combineCallbackRef = helperPlugin.useCallbackRef(combine);
  const [{ data }, setData] = React__namespace.useState({
    data: isEnterprise() && enabled ? defaultValue : ceData
  });
  React__namespace.useEffect(() => {
    async function importEE() {
      const eeData = await eeCallbackRef();
      const combinedValue = combineCallbackRef(ceData, eeData);
      setData({ data: combinedValue ? combinedValue : eeData });
    }
    if (isEnterprise() && enabled) {
      importEE();
    }
  }, [ceData, eeCallbackRef, combineCallbackRef, enabled]);
  return data;
};
const Img = styled__default.default.img`
  height: ${72 / 16}rem;
`;
const Logo = () => {
  const {
    logos: { auth }
  } = useConfiguration("UnauthenticatedLogo");
  return /* @__PURE__ */ jsxRuntime.jsx(Img, { src: auth?.custom?.url || auth.default, "aria-hidden": true, alt: "" });
};
const Wrapper$3 = styled__default.default(designSystem.Box)`
  margin: 0 auto;
  width: 552px;
`;
const Column = styled__default.default(designSystem.Flex)`
  flex-direction: column;
`;
const LocaleToggle = () => {
  const localeNames = useTypedSelector((state) => state.admin_app.language.localeNames);
  const dispatch = useTypedDispatch();
  const { formatMessage, locale } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.SingleSelect,
    {
      "aria-label": formatMessage({
        id: "global.localeToggle.label",
        defaultMessage: "Select interface language"
      }),
      value: locale,
      onChange: (language) => {
        dispatch(setLocale(language));
      },
      children: Object.entries(localeNames).map(([language, name2]) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: language, children: name2 }, language))
    }
  );
};
const LayoutContent = ({ children }) => /* @__PURE__ */ jsxRuntime.jsx(
  Wrapper$3,
  {
    shadow: "tableShadow",
    hasRadius: true,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 10,
    paddingRight: 10,
    background: "neutral0",
    children
  }
);
const UnauthenticatedLayout = ({ children }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { as: "header", justifyContent: "flex-end", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 6, paddingRight: 8, children: /* @__PURE__ */ jsxRuntime.jsx(LocaleToggle, {}) }) }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 2, paddingBottom: 11, children })
  ] });
};
const FieldActionWrapper$1 = styled__default.default(designSystem.FieldAction)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }
`;
const LOGIN_SCHEMA = yup__namespace.object().shape({
  email: yup__namespace.string().email(helperPlugin.translatedErrors.email).required(helperPlugin.translatedErrors.required),
  password: yup__namespace.string().required(helperPlugin.translatedErrors.required),
  rememberMe: yup__namespace.bool().nullable()
});
const Login = ({ children }) => {
  const [apiError, setApiError] = React__namespace.useState();
  const [passwordShown, setPasswordShown] = React__namespace.useState(false);
  const { formatMessage } = reactIntl.useIntl();
  const query = helperPlugin.useQuery();
  const { push } = reactRouterDom.useHistory();
  const { login } = useAuth("Login");
  const handleLogin = async (body) => {
    setApiError(void 0);
    const res = await login(body);
    if ("error" in res) {
      const message = res.error.message ?? "Something went wrong";
      if (camelCase__default.default(message).toLowerCase() === "usernotactive") {
        push("/auth/oops");
        return;
      }
      setApiError(message);
    } else {
      const redirectTo = query.get("redirectTo");
      const redirectUrl = redirectTo ? decodeURIComponent(redirectTo) : "/";
      push(redirectUrl);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(UnauthenticatedLayout, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(LayoutContent, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Column, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(Logo, {}),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 6, paddingBottom: 1, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "alpha", as: "h1", children: formatMessage({
          id: "Auth.form.welcome.title",
          defaultMessage: "Welcome!"
        }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingBottom: 7, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "epsilon", textColor: "neutral600", children: formatMessage({
          id: "Auth.form.welcome.subtitle",
          defaultMessage: "Log in to your Strapi account"
        }) }) }),
        apiError ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { id: "global-form-error", role: "alert", tabIndex: -1, textColor: "danger600", children: apiError }) : null
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        formik.Formik,
        {
          enableReinitialize: true,
          initialValues: {
            email: "",
            password: "",
            rememberMe: false
          },
          onSubmit: (values) => {
            handleLogin(values);
          },
          validationSchema: LOGIN_SCHEMA,
          validateOnChange: false,
          children: ({ values, errors, handleChange }) => /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.Form, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 6, children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.TextInput,
              {
                error: errors.email ? formatMessage({
                  id: errors.email,
                  defaultMessage: "This value is required."
                }) : "",
                value: values.email,
                onChange: handleChange,
                label: formatMessage({ id: "Auth.form.email.label", defaultMessage: "Email" }),
                placeholder: formatMessage({
                  id: "Auth.form.email.placeholder",
                  defaultMessage: "kai@doe.com"
                }),
                name: "email",
                required: true
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              PasswordInput$2,
              {
                error: errors.password ? formatMessage({
                  id: errors.password,
                  defaultMessage: "This value is required."
                }) : "",
                onChange: handleChange,
                value: values.password,
                label: formatMessage({
                  id: "global.password",
                  defaultMessage: "Password"
                }),
                name: "password",
                type: passwordShown ? "text" : "password",
                endAction: /* @__PURE__ */ jsxRuntime.jsx(
                  FieldActionWrapper$1,
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      setPasswordShown((prev) => !prev);
                    },
                    label: formatMessage(
                      passwordShown ? {
                        id: "Auth.form.password.show-password",
                        defaultMessage: "Show password"
                      } : {
                        id: "Auth.form.password.hide-password",
                        defaultMessage: "Hide password"
                      }
                    ),
                    children: passwordShown ? /* @__PURE__ */ jsxRuntime.jsx(Icons.Eye, {}) : /* @__PURE__ */ jsxRuntime.jsx(Icons.EyeStriked, {})
                  }
                ),
                required: true
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.Checkbox,
              {
                onValueChange: (checked) => {
                  handleChange({ target: { value: checked, name: "rememberMe" } });
                },
                value: values.rememberMe,
                "aria-label": "rememberMe",
                name: "rememberMe",
                children: formatMessage({
                  id: "Auth.form.rememberMe.label",
                  defaultMessage: "Remember me"
                })
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { fullWidth: true, type: "submit", children: formatMessage({ id: "Auth.form.button.login", defaultMessage: "Login" }) })
          ] }) })
        }
      ),
      children
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: /* @__PURE__ */ jsxRuntime.jsx(v2.Link, { as: reactRouterDom.NavLink, to: "/auth/forgot-password", children: formatMessage({
      id: "Auth.link.forgot-password",
      defaultMessage: "Forgot your password?"
    }) }) }) })
  ] }) });
};
const PasswordInput$2 = styled__default.default(designSystem.TextInput)`
  ::-ms-reveal {
    display: none;
  }
`;
const ForgotPassword = () => {
  const { push } = reactRouterDom.useHistory();
  const { formatMessage } = reactIntl.useIntl();
  const { _unstableFormatAPIError: formatAPIError } = helperPlugin.useAPIErrorHandler();
  const [forgotPassword, { error }] = useForgotPasswordMutation();
  return /* @__PURE__ */ jsxRuntime.jsx(UnauthenticatedLayout, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(LayoutContent, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Column, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(Logo, {}),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 6, paddingBottom: 7, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "h1", variant: "alpha", children: formatMessage({
          id: "Auth.form.button.password-recovery",
          defaultMessage: "Password Recovery"
        }) }) }),
        error ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { id: "global-form-error", role: "alert", tabIndex: -1, textColor: "danger600", children: isBaseQueryError(error) ? formatAPIError(error) : formatMessage({
          id: "notification.error",
          defaultMessage: "An error occurred"
        }) }) : null
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        formik.Formik,
        {
          enableReinitialize: true,
          initialValues: {
            email: ""
          },
          onSubmit: async (body) => {
            const res = await forgotPassword(body);
            if (!("error" in res)) {
              push("/auth/forgot-password-success");
            }
          },
          validationSchema: yup__namespace.object().shape({
            email: yup__namespace.string().email(helperPlugin.translatedErrors.email).required(helperPlugin.translatedErrors.required)
          }),
          validateOnChange: false,
          children: ({ values, errors, handleChange }) => /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.Form, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 6, children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.TextInput,
              {
                error: errors.email ? formatMessage({
                  id: errors.email,
                  defaultMessage: "This email is invalid."
                }) : "",
                value: values.email,
                onChange: handleChange,
                label: formatMessage({ id: "Auth.form.email.label", defaultMessage: "Email" }),
                placeholder: formatMessage({
                  id: "Auth.form.email.placeholder",
                  defaultMessage: "kai@doe.com"
                }),
                name: "email",
                required: true
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { type: "submit", fullWidth: true, children: formatMessage({
              id: "Auth.form.button.forgot-password",
              defaultMessage: "Send Email"
            }) })
          ] }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: /* @__PURE__ */ jsxRuntime.jsx(v2.Link, { as: reactRouterDom.NavLink, to: "/auth/login", children: formatMessage({ id: "Auth.link.ready", defaultMessage: "Ready to sign in?" }) }) }) })
  ] }) });
};
const ForgotPasswordSuccess = () => {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsx(UnauthenticatedLayout, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(LayoutContent, { children: /* @__PURE__ */ jsxRuntime.jsxs(Column, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(Logo, {}),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 6, paddingBottom: 7, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "h1", variant: "alpha", children: formatMessage({
        id: "app.containers.AuthPage.ForgotPasswordSuccess.title",
        defaultMessage: "Email sent"
      }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: formatMessage({
        id: "app.containers.AuthPage.ForgotPasswordSuccess.text.email",
        defaultMessage: "It can take a few minutes to receive your password recovery link."
      }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: formatMessage({
        id: "app.containers.AuthPage.ForgotPasswordSuccess.text.contact-admin",
        defaultMessage: "If you do not receive this link, please contact your administrator."
      }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: /* @__PURE__ */ jsxRuntime.jsx(v2.Link, { as: reactRouterDom.NavLink, to: "/auth/login", children: formatMessage({ id: "Auth.link.signin", defaultMessage: "Sign in" }) }) }) })
  ] }) });
};
const Oops = () => {
  const { formatMessage } = reactIntl.useIntl();
  const query = helperPlugin.useQuery();
  const message = query.get("info") || formatMessage({
    id: "Auth.components.Oops.text",
    defaultMessage: "Your account has been suspended."
  });
  return /* @__PURE__ */ jsxRuntime.jsx(UnauthenticatedLayout, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(LayoutContent, { children: /* @__PURE__ */ jsxRuntime.jsxs(Column, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(Logo, {}),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 6, paddingBottom: 7, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "h1", variant: "alpha", children: formatMessage({ id: "Auth.components.Oops.title", defaultMessage: "Oops..." }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: message }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: formatMessage({
        id: "Auth.components.Oops.text.admin",
        defaultMessage: "If this is a mistake, please contact your administrator."
      }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: /* @__PURE__ */ jsxRuntime.jsx(v2.Link, { as: reactRouterDom.NavLink, to: "/auth/login", children: formatMessage({ id: "Auth.link.signin", defaultMessage: "Sign in" }) }) }) })
  ] }) });
};
const FieldWrapper$1 = styled__default.default(designSystem.Field)`
  height: ${32 / 16}rem;
  width: ${32 / 16}rem;

  > label,
  ~ input {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  > label {
    color: inherit;
    cursor: pointer;
    padding: ${({ theme }) => theme.spaces[2]};
    text-align: center;
    vertical-align: middle;
  }

  &:hover,
  &:focus-within {
    background-color: ${({ theme }) => theme.colors.neutral0};
  }

  &:active,
  &.selected {
    color: ${({ theme }) => theme.colors.primary700};
    background-color: ${({ theme }) => theme.colors.neutral0};
    border-color: ${({ theme }) => theme.colors.primary700};
  }
`;
const delays = {
  postResponse: 90 * 24 * 60 * 60 * 1e3,
  // 90 days in ms
  postFirstDismissal: 14 * 24 * 60 * 60 * 1e3,
  // 14 days in ms
  postSubsequentDismissal: 90 * 24 * 60 * 60 * 1e3,
  // 90 days in ms
  display: 30 * 60 * 1e3
  // 30 minutes in ms
};
const ratingArray = [...Array(11).keys()];
const checkIfShouldShowSurvey = (settings) => {
  const { enabled, lastResponseDate, firstDismissalDate, lastDismissalDate } = settings;
  if (window.strapi.flags.nps === false) {
    return false;
  }
  if (enabled === false) {
    return false;
  }
  if (lastResponseDate) {
    const timeSinceLastResponse = Date.now() - new Date(lastResponseDate).getTime();
    if (timeSinceLastResponse >= delays.postResponse) {
      return true;
    }
    return false;
  }
  if (lastDismissalDate) {
    const timeSinceLastDismissal = Date.now() - new Date(lastDismissalDate).getTime();
    if (timeSinceLastDismissal >= delays.postSubsequentDismissal) {
      return true;
    }
    return false;
  }
  if (firstDismissalDate) {
    const timeSinceFirstDismissal = Date.now() - new Date(firstDismissalDate).getTime();
    if (timeSinceFirstDismissal >= delays.postFirstDismissal) {
      return true;
    }
    return false;
  }
  return true;
};
const NpsSurvey = () => {
  const theme = styled.useTheme();
  const { formatMessage } = reactIntl.useIntl();
  const { npsSurveySettings, setNpsSurveySettings } = useNpsSurveySettings();
  const [isFeedbackResponse, setIsFeedbackResponse] = React__namespace.useState(false);
  const toggleNotification = helperPlugin.useNotification();
  const { currentEnvironment, strapiVersion } = helperPlugin.useAppInfo();
  const [surveyIsShown, setSurveyIsShown] = React__namespace.useState(
    checkIfShouldShowSurvey(npsSurveySettings)
  );
  const [displaySurvey, setDisplaySurvey] = React__namespace.useState(false);
  React__namespace.useEffect(() => {
    const displayTime = setTimeout(() => {
      setDisplaySurvey(true);
    }, delays.display);
    return () => {
      clearTimeout(displayTime);
    };
  }, []);
  const { user } = useAuth("NpsSurvey");
  if (!displaySurvey) {
    return null;
  }
  if (!surveyIsShown) {
    return null;
  }
  const handleSubmitResponse = async ({
    npsSurveyRating,
    npsSurveyFeedback
  }) => {
    try {
      const body = {
        email: typeof user === "object" && user.email ? user.email : "",
        rating: npsSurveyRating,
        comment: npsSurveyFeedback,
        environment: currentEnvironment,
        version: strapiVersion ?? void 0,
        license: window.strapi.projectType
      };
      const res = await fetch("https://analytics.strapi.io/submit-nps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      if (!res.ok) {
        throw new Error("Failed to submit NPS survey");
      }
      setNpsSurveySettings((settings) => ({
        ...settings,
        lastResponseDate: (/* @__PURE__ */ new Date()).toString(),
        firstDismissalDate: null,
        lastDismissalDate: null
      }));
      setIsFeedbackResponse(true);
      setTimeout(() => {
        setSurveyIsShown(false);
      }, 3e3);
    } catch (err) {
      toggleNotification({
        type: "warning",
        message: formatMessage({ id: "notification.error", defaultMessage: "An error occurred" })
      });
    }
  };
  const handleDismiss = () => {
    setNpsSurveySettings((settings) => {
      const nextSettings = {
        ...settings,
        lastResponseDate: null
      };
      if (settings.firstDismissalDate) {
        nextSettings.lastDismissalDate = (/* @__PURE__ */ new Date()).toString();
      } else {
        nextSettings.firstDismissalDate = (/* @__PURE__ */ new Date()).toString();
      }
      return nextSettings;
    });
    setSurveyIsShown(false);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    formik.Formik,
    {
      initialValues: { npsSurveyFeedback: "", npsSurveyRating: null },
      onSubmit: handleSubmitResponse,
      validationSchema: yup__namespace.object({
        npsSurveyFeedback: yup__namespace.string(),
        npsSurveyRating: yup__namespace.number().required()
      }),
      children: ({ values, handleChange, setFieldValue, isSubmitting }) => /* @__PURE__ */ jsxRuntime.jsx(formik.Form, { name: "npsSurveyForm", children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.Flex,
        {
          hasRadius: true,
          direction: "column",
          padding: 4,
          borderColor: "primary200",
          background: "neutral0",
          shadow: "popupShadow",
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: theme.zIndices[2],
          width: "50%",
          children: isFeedbackResponse ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "semiBold", children: formatMessage({
            id: "app.components.NpsSurvey.feedback-response",
            defaultMessage: "Thank you very much for your feedback!"
          }) }) : /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { as: "fieldset", width: "100%", children: [
            /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { justifyContent: "space-between", width: "100%", children: [
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { marginLeft: "auto", marginRight: "auto", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "semiBold", as: "legend", children: formatMessage({
                id: "app.components.NpsSurvey.banner-title",
                defaultMessage: "How likely are you to recommend Strapi to a friend or colleague?"
              }) }) }),
              /* @__PURE__ */ jsxRuntime.jsx(
                designSystem.IconButton,
                {
                  onClick: handleDismiss,
                  "aria-label": formatMessage({
                    id: "app.components.NpsSurvey.dismiss-survey-label",
                    defaultMessage: "Dismiss survey"
                  }),
                  icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Cross, {})
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, marginTop: 2, marginBottom: 2, justifyContent: "center", children: [
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", textColor: "neutral600", children: formatMessage({
                id: "app.components.NpsSurvey.no-recommendation",
                defaultMessage: "Not at all likely"
              }) }),
              ratingArray.map((number) => {
                return /* @__PURE__ */ jsxRuntime.jsx(
                  FieldWrapper$1,
                  {
                    className: values.npsSurveyRating === number ? "selected" : void 0,
                    hasRadius: true,
                    background: "primary100",
                    borderColor: "primary200",
                    color: "primary600",
                    position: "relative",
                    cursor: "pointer",
                    children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.FieldLabel, { htmlFor: `nps-survey-rating-${number}-input`, children: [
                      /* @__PURE__ */ jsxRuntime.jsx(designSystem.VisuallyHidden, { children: /* @__PURE__ */ jsxRuntime.jsx(
                        designSystem.FieldInput,
                        {
                          type: "radio",
                          id: `nps-survey-rating-${number}-input`,
                          name: "npsSurveyRating",
                          checked: values.npsSurveyRating === number,
                          onChange: (e) => setFieldValue("npsSurveyRating", parseInt(e.target.value, 10)),
                          value: number
                        }
                      ) }),
                      number
                    ] })
                  },
                  number
                );
              }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", textColor: "neutral600", children: formatMessage({
                id: "app.components.NpsSurvey.happy-to-recommend",
                defaultMessage: "Extremely likely"
              }) })
            ] }),
            values.npsSurveyRating !== null && /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", children: [
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { marginTop: 2, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.FieldLabel, { htmlFor: "npsSurveyFeedback", fontWeight: "semiBold", fontSize: 2, children: formatMessage({
                id: "app.components.NpsSurvey.feedback-question",
                defaultMessage: "Do you have any suggestion for improvements?"
              }) }) }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { width: "62%", marginTop: 3, marginBottom: 4, children: /* @__PURE__ */ jsxRuntime.jsx(
                designSystem.Textarea,
                {
                  id: "npsSurveyFeedback",
                  width: "100%",
                  onChange: handleChange,
                  children: values.npsSurveyFeedback
                }
              ) }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { marginBottom: 2, type: "submit", loading: isSubmitting, children: formatMessage({
                id: "app.components.NpsSurvey.submit-feedback",
                defaultMessage: "Submit Feedback"
              }) })
            ] })
          ] })
        }
      ) })
    }
  ) });
};
function useNpsSurveySettings() {
  const [npsSurveySettings, setNpsSurveySettings] = helperPlugin.usePersistentState(
    "STRAPI_NPS_SURVEY_SETTINGS",
    {
      enabled: true,
      lastResponseDate: null,
      firstDismissalDate: null,
      lastDismissalDate: null
    }
  );
  return { npsSurveySettings, setNpsSurveySettings };
}
const REGISTER_USER_SCHEMA = yup__namespace.object().shape({
  firstname: yup__namespace.string().trim().required(helperPlugin.translatedErrors.required),
  lastname: yup__namespace.string().nullable(),
  password: yup__namespace.string().min(8, helperPlugin.translatedErrors.minLength).matches(/[a-z]/, "components.Input.error.contain.lowercase").matches(/[A-Z]/, "components.Input.error.contain.uppercase").matches(/\d/, "components.Input.error.contain.number").required(helperPlugin.translatedErrors.required),
  confirmPassword: yup__namespace.string().oneOf([yup__namespace.ref("password"), null], "components.Input.error.password.noMatch").required(helperPlugin.translatedErrors.required),
  registrationToken: yup__namespace.string().required(helperPlugin.translatedErrors.required)
});
const REGISTER_ADMIN_SCHEMA = yup__namespace.object().shape({
  firstname: yup__namespace.string().trim().required(helperPlugin.translatedErrors.required),
  lastname: yup__namespace.string().nullable(),
  password: yup__namespace.string().min(8, helperPlugin.translatedErrors.minLength).matches(/[a-z]/, "components.Input.error.contain.lowercase").matches(/[A-Z]/, "components.Input.error.contain.uppercase").matches(/\d/, "components.Input.error.contain.number").required(helperPlugin.translatedErrors.required),
  email: yup__namespace.string().email(helperPlugin.translatedErrors.email).strict().lowercase(helperPlugin.translatedErrors.lowercase).required(helperPlugin.translatedErrors.required),
  confirmPassword: yup__namespace.string().oneOf([yup__namespace.ref("password"), null], "components.Input.error.password.noMatch").required(helperPlugin.translatedErrors.required)
});
const Register = ({ hasAdmin }) => {
  const toggleNotification = helperPlugin.useNotification();
  const { push } = reactRouterDom.useHistory();
  const [passwordShown, setPasswordShown] = React__namespace.useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = React__namespace.useState(false);
  const [submitCount, setSubmitCount] = React__namespace.useState(0);
  const [apiError, setApiError] = React__namespace.useState();
  const { trackUsage } = helperPlugin.useTracking();
  const { formatMessage } = reactIntl.useIntl();
  const { setSkipped } = helperPlugin.useGuidedTour();
  const query = helperPlugin.useQuery();
  const match = reactRouterDom.useRouteMatch(
    "/auth/:authType"
  );
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = helperPlugin.useAPIErrorHandler();
  const { setNpsSurveySettings } = useNpsSurveySettings();
  const registrationToken = query.get("registrationToken");
  const { data: userInfo, error } = useGetRegistrationInfoQuery(registrationToken, {
    skip: !registrationToken
  });
  React__namespace.useEffect(() => {
    if (error) {
      const message = isBaseQueryError(error) ? formatAPIError(error) : error.message ?? "";
      toggleNotification({
        type: "warning",
        message
      });
      push(`/auth/oops?info=${encodeURIComponent(message)}`);
    }
  }, [error, formatAPIError, push, toggleNotification]);
  const [registerAdmin] = useRegisterAdminMutation();
  const [registerUser] = useRegisterUserMutation();
  const { setToken } = useAuth("Register");
  const handleRegisterAdmin = async ({ news, ...body }, setFormErrors) => {
    const res = await registerAdmin(body);
    if ("data" in res) {
      setToken(res.data.token);
      const { roles } = res.data.user;
      if (roles) {
        const isUserSuperAdmin = roles.find(({ code }) => code === "strapi-super-admin");
        if (isUserSuperAdmin) {
          helperPlugin.auth.set(false, "GUIDED_TOUR_SKIPPED", true);
          setSkipped(false);
          trackUsage("didLaunchGuidedtour");
        }
      }
      if (news) {
        setNpsSurveySettings((s) => ({ ...s, enabled: true }));
        push({
          pathname: "/usecase",
          search: `?hasAdmin=${true}`
        });
      } else {
        push("/");
      }
    } else {
      if (isBaseQueryError(res.error)) {
        trackUsage("didNotCreateFirstAdmin");
        if (res.error.name === "ValidationError") {
          setFormErrors(formatValidationErrors(res.error));
          return;
        }
        setApiError(formatAPIError(res.error));
      }
    }
  };
  const handleRegisterUser = async ({ news, ...body }, setFormErrors) => {
    const res = await registerUser(body);
    if ("data" in res) {
      setToken(res.data.token);
      if (news) {
        setNpsSurveySettings((s) => ({ ...s, enabled: true }));
        push({
          pathname: "/usecase",
          search: `?hasAdmin=${hasAdmin}`
        });
      } else {
        push("/");
      }
    } else {
      if (isBaseQueryError(res.error)) {
        trackUsage("didNotCreateFirstAdmin");
        if (res.error.name === "ValidationError") {
          setFormErrors(formatValidationErrors(res.error));
          return;
        }
        setApiError(formatAPIError(res.error));
      }
    }
  };
  if (!match || match.params.authType !== "register" && match.params.authType !== "register-admin") {
    return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to: "/" });
  }
  const isAdminRegistration = match.params.authType === "register-admin";
  const schema = isAdminRegistration ? REGISTER_ADMIN_SCHEMA : REGISTER_USER_SCHEMA;
  return /* @__PURE__ */ jsxRuntime.jsx(UnauthenticatedLayout, { children: /* @__PURE__ */ jsxRuntime.jsxs(LayoutContent, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "center", gap: 3, children: [
      /* @__PURE__ */ jsxRuntime.jsx(Logo, {}),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "h1", variant: "alpha", textAlign: "center", children: formatMessage({
        id: "Auth.form.welcome.title",
        defaultMessage: "Welcome to Strapi!"
      }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "epsilon", textColor: "neutral600", textAlign: "center", children: formatMessage({
        id: "Auth.form.register.subtitle",
        defaultMessage: "Credentials are only used to authenticate in Strapi. All saved data will be stored in your database."
      }) }),
      apiError ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { id: "global-form-error", role: "alert", tabIndex: -1, textColor: "danger600", children: apiError }) : null
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      formik.Formik,
      {
        enableReinitialize: true,
        initialValues: {
          firstname: userInfo?.firstname || "",
          lastname: userInfo?.lastname || "",
          email: userInfo?.email || "",
          password: "",
          confirmPassword: "",
          registrationToken: registrationToken || void 0,
          news: false
        },
        onSubmit: async (data, formik2) => {
          const normalizedData = normalizeData(data);
          try {
            await schema.validate(normalizedData, { abortEarly: false });
            if (submitCount > 0 && isAdminRegistration) {
              trackUsage("didSubmitWithErrorsFirstAdmin", { count: submitCount.toString() });
            }
            if (normalizedData.registrationToken) {
              handleRegisterUser(
                {
                  userInfo: omit__default.default(normalizedData, [
                    "registrationToken",
                    "confirmPassword",
                    "email",
                    "news"
                  ]),
                  registrationToken: normalizedData.registrationToken,
                  news: normalizedData.news
                },
                formik2.setErrors
              );
            } else {
              await handleRegisterAdmin(
                omit__default.default(normalizedData, ["registrationToken", "confirmPassword"]),
                formik2.setErrors
              );
            }
          } catch (err) {
            if (err instanceof yup.ValidationError) {
              const errors = helperPlugin.getYupInnerErrors(err);
              formik2.setErrors(errors);
            }
            setSubmitCount(submitCount + 1);
          }
        },
        validateOnChange: false,
        children: ({ values, errors, handleChange }) => {
          return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.Form, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Main, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 6, marginTop: 7, children: [
            /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Grid, { gap: 4, children: [
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, children: /* @__PURE__ */ jsxRuntime.jsx(
                designSystem.TextInput,
                {
                  name: "firstname",
                  required: true,
                  value: values.firstname,
                  error: errors.firstname ? formatMessage(errors.firstname) : void 0,
                  onChange: handleChange,
                  label: formatMessage({
                    id: "Auth.form.firstname.label",
                    defaultMessage: "Firstname"
                  })
                }
              ) }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, children: /* @__PURE__ */ jsxRuntime.jsx(
                designSystem.TextInput,
                {
                  name: "lastname",
                  value: values.lastname,
                  onChange: handleChange,
                  label: formatMessage({
                    id: "Auth.form.lastname.label",
                    defaultMessage: "Lastname"
                  })
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.TextInput,
              {
                name: "email",
                disabled: !isAdminRegistration,
                value: values.email,
                onChange: handleChange,
                error: errors.email ? formatMessage(errors.email) : void 0,
                required: true,
                label: formatMessage({
                  id: "Auth.form.email.label",
                  defaultMessage: "Email"
                }),
                type: "email"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              PasswordInput$1,
              {
                name: "password",
                onChange: handleChange,
                value: values.password,
                error: errors.password ? formatMessage(errors.password) : void 0,
                endAction: /* @__PURE__ */ jsxRuntime.jsx(
                  FieldActionWrapper$1,
                  {
                    onClick: (e) => {
                      e.preventDefault();
                      setPasswordShown((prev) => !prev);
                    },
                    label: formatMessage(
                      passwordShown ? {
                        id: "Auth.form.password.show-password",
                        defaultMessage: "Show password"
                      } : {
                        id: "Auth.form.password.hide-password",
                        defaultMessage: "Hide password"
                      }
                    ),
                    children: passwordShown ? /* @__PURE__ */ jsxRuntime.jsx(Icons.Eye, {}) : /* @__PURE__ */ jsxRuntime.jsx(Icons.EyeStriked, {})
                  }
                ),
                hint: formatMessage({
                  id: "Auth.form.password.hint",
                  defaultMessage: "Must be at least 8 characters, 1 uppercase, 1 lowercase & 1 number"
                }),
                required: true,
                label: formatMessage({
                  id: "global.password",
                  defaultMessage: "Password"
                }),
                type: passwordShown ? "text" : "password"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              PasswordInput$1,
              {
                name: "confirmPassword",
                onChange: handleChange,
                value: values.confirmPassword,
                error: errors.confirmPassword ? formatMessage(errors.confirmPassword) : void 0,
                endAction: /* @__PURE__ */ jsxRuntime.jsx(
                  FieldActionWrapper$1,
                  {
                    onClick: (e) => {
                      e.preventDefault();
                      setConfirmPasswordShown((prev) => !prev);
                    },
                    label: formatMessage(
                      confirmPasswordShown ? {
                        id: "Auth.form.password.show-password",
                        defaultMessage: "Show password"
                      } : {
                        id: "Auth.form.password.hide-password",
                        defaultMessage: "Hide password"
                      }
                    ),
                    children: confirmPasswordShown ? /* @__PURE__ */ jsxRuntime.jsx(Icons.Eye, {}) : /* @__PURE__ */ jsxRuntime.jsx(Icons.EyeStriked, {})
                  }
                ),
                required: true,
                label: formatMessage({
                  id: "Auth.form.confirmPassword.label",
                  defaultMessage: "Confirm Password"
                }),
                type: confirmPasswordShown ? "text" : "password"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.Checkbox,
              {
                onValueChange: (checked) => {
                  handleChange({ target: { value: checked, name: "news" } });
                },
                value: values.news,
                name: "news",
                "aria-label": "news",
                children: formatMessage(
                  {
                    id: "Auth.form.register.news.label",
                    defaultMessage: "Keep me updated about new features & upcoming improvements (by doing this you accept the {terms} and the {policy})."
                  },
                  {
                    terms: /* @__PURE__ */ jsxRuntime.jsx(A, { target: "_blank", href: "https://strapi.io/terms", rel: "noreferrer", children: formatMessage({
                      id: "Auth.privacy-policy-agreement.terms",
                      defaultMessage: "terms"
                    }) }),
                    policy: /* @__PURE__ */ jsxRuntime.jsx(A, { target: "_blank", href: "https://strapi.io/privacy", rel: "noreferrer", children: formatMessage({
                      id: "Auth.privacy-policy-agreement.policy",
                      defaultMessage: "policy"
                    }) })
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { fullWidth: true, size: "L", type: "submit", children: formatMessage({
              id: "Auth.form.button.register",
              defaultMessage: "Let's start"
            }) })
          ] }) }) });
        }
      }
    ),
    match?.params.authType === "register" && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(v2.Link, { as: reactRouterDom.NavLink, to: "/auth/login", children: formatMessage({
      id: "Auth.link.signin.account",
      defaultMessage: "Already have an account?"
    }) }) }) })
  ] }) });
};
function normalizeData(data) {
  return Object.entries(data).reduce(
    (acc, [key, value]) => {
      if (!["password", "confirmPassword"].includes(key) && typeof value === "string") {
        acc[key] = value.trim();
        if (key === "lastname") {
          acc[key] = value || void 0;
        }
      } else {
        acc[key] = value;
      }
      return acc;
    },
    {}
  );
}
const A = styled__default.default.a`
  color: ${({ theme }) => theme.colors.primary600};
`;
const PasswordInput$1 = styled__default.default(designSystem.TextInput)`
  ::-ms-reveal {
    display: none;
  }
`;
const RESET_PASSWORD_SCHEMA = yup__namespace.object().shape({
  password: yup__namespace.string().min(8, helperPlugin.translatedErrors.minLength).matches(/[a-z]/, "components.Input.error.contain.lowercase").matches(/[A-Z]/, "components.Input.error.contain.uppercase").matches(/\d/, "components.Input.error.contain.number").required(helperPlugin.translatedErrors.required),
  confirmPassword: yup__namespace.string().oneOf([yup__namespace.ref("password"), null], "components.Input.error.password.noMatch").required(helperPlugin.translatedErrors.required)
});
const ResetPassword = () => {
  const [passwordShown, setPasswordShown] = React__namespace.useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = React__namespace.useState(false);
  const { formatMessage } = reactIntl.useIntl();
  const { push } = reactRouterDom.useHistory();
  const query = helperPlugin.useQuery();
  const { _unstableFormatAPIError: formatAPIError } = helperPlugin.useAPIErrorHandler();
  const { setToken } = useAuth("ResetPassword");
  const [resetPassword, { error }] = useResetPasswordMutation();
  const handleSubmit = async (body) => {
    const res = await resetPassword(body);
    if ("data" in res) {
      setToken(res.data.token);
      push("/");
    }
  };
  if (!query.get("code")) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to: "/auth/login" });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(UnauthenticatedLayout, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(LayoutContent, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Column, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(Logo, {}),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 6, paddingBottom: 7, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "h1", variant: "alpha", children: formatMessage({
          id: "global.reset-password",
          defaultMessage: "Reset password"
        }) }) }),
        error ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { id: "global-form-error", role: "alert", tabIndex: -1, textColor: "danger600", children: isBaseQueryError(error) ? formatAPIError(error) : formatMessage({
          id: "notification.error",
          defaultMessage: "An error occurred"
        }) }) : null
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        formik.Formik,
        {
          enableReinitialize: true,
          initialValues: {
            password: "",
            confirmPassword: ""
          },
          onSubmit: (values) => {
            handleSubmit({ password: values.password, resetPasswordToken: query.get("code") });
          },
          validationSchema: RESET_PASSWORD_SCHEMA,
          validateOnChange: false,
          children: ({ values, errors, handleChange }) => /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.Form, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 6, children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              PasswordInput,
              {
                name: "password",
                onChange: handleChange,
                value: values.password,
                error: errors.password ? formatMessage(
                  {
                    id: errors.password,
                    defaultMessage: "This field is required."
                  },
                  {
                    min: 8
                  }
                ) : void 0,
                endAction: /* @__PURE__ */ jsxRuntime.jsx(
                  FieldActionWrapper$1,
                  {
                    onClick: (e) => {
                      e.preventDefault();
                      setPasswordShown((prev) => !prev);
                    },
                    label: formatMessage(
                      passwordShown ? {
                        id: "Auth.form.password.show-password",
                        defaultMessage: "Show password"
                      } : {
                        id: "Auth.form.password.hide-password",
                        defaultMessage: "Hide password"
                      }
                    ),
                    children: passwordShown ? /* @__PURE__ */ jsxRuntime.jsx(Icons.Eye, {}) : /* @__PURE__ */ jsxRuntime.jsx(Icons.EyeStriked, {})
                  }
                ),
                hint: formatMessage({
                  id: "Auth.form.password.hint",
                  defaultMessage: "Password must contain at least 8 characters, 1 uppercase, 1 lowercase and 1 number"
                }),
                required: true,
                label: formatMessage({
                  id: "global.password",
                  defaultMessage: "Password"
                }),
                type: passwordShown ? "text" : "password"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              PasswordInput,
              {
                name: "confirmPassword",
                onChange: handleChange,
                value: values.confirmPassword,
                error: errors.confirmPassword ? formatMessage({
                  id: errors.confirmPassword,
                  defaultMessage: "This value is required."
                }) : void 0,
                endAction: /* @__PURE__ */ jsxRuntime.jsx(
                  FieldActionWrapper$1,
                  {
                    onClick: (e) => {
                      e.preventDefault();
                      setConfirmPasswordShown((prev) => !prev);
                    },
                    label: formatMessage(
                      passwordShown ? {
                        id: "Auth.form.password.show-password",
                        defaultMessage: "Show password"
                      } : {
                        id: "Auth.form.password.hide-password",
                        defaultMessage: "Hide password"
                      }
                    ),
                    children: confirmPasswordShown ? /* @__PURE__ */ jsxRuntime.jsx(Icons.Eye, {}) : /* @__PURE__ */ jsxRuntime.jsx(Icons.EyeStriked, {})
                  }
                ),
                required: true,
                label: formatMessage({
                  id: "Auth.form.confirmPassword.label",
                  defaultMessage: "Confirm Password"
                }),
                type: confirmPasswordShown ? "text" : "password"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { fullWidth: true, type: "submit", children: formatMessage({
              id: "global.change-password",
              defaultMessage: "Change password"
            }) })
          ] }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: /* @__PURE__ */ jsxRuntime.jsx(v2.Link, { as: reactRouterDom.NavLink, to: "/auth/login", children: formatMessage({ id: "Auth.link.ready", defaultMessage: "Ready to sign in?" }) }) }) })
  ] }) });
};
const PasswordInput = styled__default.default(designSystem.TextInput)`
  ::-ms-reveal {
    display: none;
  }
`;
const FORMS = {
  "forgot-password": ForgotPassword,
  "forgot-password-success": ForgotPasswordSuccess,
  // the `Component` attribute is set after all forms and CE/EE components are loaded, but since we
  // are here outside of a React component we can not use the hook directly
  login: () => null,
  oops: Oops,
  register: Register,
  "register-admin": Register,
  "reset-password": ResetPassword,
  providers: () => null
};
const AuthPage = ({ hasAdmin }) => {
  const {
    location: { search }
  } = reactRouterDom.useHistory();
  const match = reactRouterDom.useRouteMatch("/auth/:authType");
  const authType = match?.params.authType;
  const Login$1 = useEnterprise(
    Login,
    async () => (await Promise.resolve().then(() => require("./Login-BU_DQKuy.js"))).LoginEE
  );
  const forms = useEnterprise(
    FORMS,
    async () => (await Promise.resolve().then(() => require("./constants-tEdaLPr-.js"))).FORMS,
    {
      combine(ceForms, eeForms) {
        return {
          ...ceForms,
          ...eeForms
        };
      },
      defaultValue: FORMS
    }
  );
  const { token } = useAuth("AuthPage");
  if (!authType || !forms) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to: "/" });
  }
  const Component2 = forms[authType];
  if (!Component2 || hasAdmin && authType === "register-admin" || token) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to: "/" });
  }
  if (!hasAdmin && authType !== "register-admin") {
    return /* @__PURE__ */ jsxRuntime.jsx(
      reactRouterDom.Redirect,
      {
        to: {
          pathname: "/auth/register-admin",
          // Forward the `?redirectTo` from /auth/login
          // /abc => /auth/login?redirectTo=%2Fabc => /auth/register-admin?redirectTo=%2Fabc
          search
        }
      }
    );
  }
  if (Login$1 && authType === "login") {
    return /* @__PURE__ */ jsxRuntime.jsx(Login$1, {});
  } else if (authType === "login" && !Login$1) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(Component2, { hasAdmin });
};
const NotFoundPage = () => {
  const { formatMessage } = reactIntl.useIntl();
  helperPlugin.useFocusWhenNavigate();
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { labelledBy: "title", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.HeaderLayout,
      {
        id: "title",
        title: formatMessage({
          id: "content-manager.pageNotFound",
          defaultMessage: "Page not found"
        })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.ContentLayout, { children: /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.EmptyStateLayout,
      {
        action: /* @__PURE__ */ jsxRuntime.jsx(designSystem.LinkButton, { variant: "secondary", endIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.ArrowRight, {}), to: "/", children: formatMessage({
          id: "app.components.NotFoundPage.back",
          defaultMessage: "Back to homepage"
        }) }),
        content: formatMessage({
          id: "app.page.not.found",
          defaultMessage: "Oops! We can't seem to find the page you're looging for..."
        }),
        hasRadius: true,
        icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.EmptyPictures, { width: "10rem" }),
        shadow: "tableShadow"
      }
    ) })
  ] });
};
const NotFoundPage$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NotFoundPage
}, Symbol.toStringTag, { value: "Module" }));
const options = [
  {
    intlLabel: {
      id: "Usecase.front-end",
      defaultMessage: "Front-end developer"
    },
    value: "front_end_developer"
  },
  {
    intlLabel: {
      id: "Usecase.back-end",
      defaultMessage: "Back-end developer"
    },
    value: "back_end_developer"
  },
  {
    intlLabel: {
      id: "Usecase.full-stack",
      defaultMessage: "Full-stack developer"
    },
    value: "full_stack_developer"
  },
  {
    intlLabel: {
      id: "global.content-manager",
      defaultMessage: "Content Manager"
    },
    value: "content_manager"
  },
  {
    intlLabel: {
      id: "Usecase.content-creator",
      defaultMessage: "Content Creator"
    },
    value: "content_creator"
  },
  {
    intlLabel: {
      id: "Usecase.other",
      defaultMessage: "Other"
    },
    value: "other"
  }
];
const TypographyCenter = styled__default.default(designSystem.Typography)`
  text-align: center;
`;
const UseCasePage = () => {
  const toggleNotification = helperPlugin.useNotification();
  const { push, location } = reactRouterDom.useHistory();
  const { formatMessage } = reactIntl.useIntl();
  const [role, setRole] = React__namespace.useState(null);
  const [otherRole, setOtherRole] = React__namespace.useState("");
  const { user } = useAuth("UseCasePage");
  const firstname = user?.firstname;
  const email = user?.email;
  const { hasAdmin } = qs.parse(location?.search, { ignoreQueryPrefix: true });
  const isOther = role === "other";
  const handleSubmit = async (event, skipPersona) => {
    event.preventDefault();
    try {
      await fetch("https://analytics.strapi.io/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          username: firstname,
          firstAdmin: Boolean(!hasAdmin),
          persona: {
            role: skipPersona ? void 0 : role,
            otherRole: skipPersona ? void 0 : otherRole
          }
        })
      });
      toggleNotification({
        type: "success",
        message: {
          id: "Usecase.notification.success.project-created",
          defaultMessage: "Project has been successfully created"
        }
      });
      push("/");
    } catch (err) {
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(UnauthenticatedLayout, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { labelledBy: "usecase-title", children: [
    /* @__PURE__ */ jsxRuntime.jsx(LayoutContent, { children: /* @__PURE__ */ jsxRuntime.jsxs("form", { onSubmit: (e) => handleSubmit(e, false), children: [
      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", paddingBottom: 7, children: [
        /* @__PURE__ */ jsxRuntime.jsx(Logo, {}),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 6, paddingBottom: 1, width: helperPlugin.pxToRem(250), children: /* @__PURE__ */ jsxRuntime.jsx(TypographyCenter, { variant: "alpha", as: "h1", id: "usecase-title", children: formatMessage({
          id: "Usecase.title",
          defaultMessage: "Tell us a bit more about yourself"
        }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 6, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.Select,
          {
            id: "usecase",
            "data-testid": "usecase",
            label: formatMessage({
              id: "Usecase.input.work-type",
              defaultMessage: "What type of work do you do?"
            }),
            onChange: (value) => setRole(value),
            value: role,
            children: options.map(({ intlLabel, value }) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Option, { value, children: formatMessage(intlLabel) }, value))
          }
        ),
        isOther && /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.TextInput,
          {
            name: "other",
            label: formatMessage({ id: "Usecase.other", defaultMessage: "Other" }),
            value: otherRole,
            onChange: (e) => setOtherRole(e.target.value),
            "data-testid": "other"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { type: "submit", size: "L", fullWidth: true, disabled: !role, children: formatMessage({ id: "global.finish", defaultMessage: "Finish" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.TextButton, { onClick: (event) => handleSubmit(event, true), children: formatMessage({
      id: "Usecase.button.skip",
      defaultMessage: "Skip this question"
    }) }) }) })
  ] }) });
};
const LazyCompo = ({ loadComponent }) => {
  const [Compo, setCompo] = React__namespace.useState(null);
  React__namespace.useEffect(() => {
    const loadCompo = async () => {
      try {
        const loadedCompo = await loadComponent();
        if (typeof loadedCompo === "function") {
          setCompo(() => loadedCompo);
        } else if (loadedCompo.default) {
          setCompo(() => loadedCompo.default);
        }
      } catch (err) {
      }
    };
    loadCompo();
  }, [loadComponent]);
  if (Compo) {
    return /* @__PURE__ */ jsxRuntime.jsx(Compo, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {});
};
const createRoute = (loadComponent, to, exact = false) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactRouterDom.Route,
    {
      render: () => /* @__PURE__ */ jsxRuntime.jsx(LazyCompo, { loadComponent }),
      path: to,
      exact: exact || false
    },
    to
  );
};
const ROUTES_CE = null;
const AuthenticatedApp = React__namespace.lazy(
  () => Promise.resolve().then(() => require("./AuthenticatedApp-jZpU4Cuu.js")).then((n) => n.AuthenticatedApp).then((mod) => ({ default: mod.AuthenticatedApp }))
);
const App$2 = ({ authLogo, menuLogo, showReleaseNotification, showTutorials }) => {
  const adminPermissions = useEnterprise(
    ADMIN_PERMISSIONS_CE,
    async () => (await Promise.resolve().then(() => require("./constants-MET9sSo3.js"))).ADMIN_PERMISSIONS_EE,
    {
      combine(cePermissions, eePermissions) {
        return merge__default.default({}, cePermissions, eePermissions);
      },
      defaultValue: ADMIN_PERMISSIONS_CE
    }
  );
  const routes = useEnterprise(
    ROUTES_CE,
    async () => (await Promise.resolve().then(() => require("./constants-MET9sSo3.js"))).ROUTES_EE,
    {
      defaultValue: []
    }
  );
  const toggleNotification = helperPlugin.useNotification();
  const { formatMessage } = reactIntl.useIntl();
  const dispatch = reactRedux.useDispatch();
  const appInfo = helperPlugin.useAppInfo();
  const { token } = useAuth("App");
  const authRoutes = React__namespace.useMemo(() => {
    if (!routes) {
      return null;
    }
    return routes.map(({ to, Component: Component2, exact }) => createRoute(Component2, to, exact));
  }, [routes]);
  React__namespace.useEffect(() => {
    dispatch(setAdminPermissions(adminPermissions));
  }, [adminPermissions, dispatch]);
  const initQuery = useInitQuery();
  const {
    hasAdmin,
    uuid,
    authLogo: customAuthLogo,
    menuLogo: customMenuLogo
  } = initQuery.data ?? {};
  const telemetryPropertiesQuery = useTelemetryPropertiesQuery(void 0, {
    skip: !uuid || !token
  });
  React__namespace.useEffect(() => {
    if (initQuery.error) {
      toggleNotification({
        type: "warning",
        message: { id: "app.containers.App.notification.error.init" }
      });
    }
  }, [initQuery.error, toggleNotification]);
  React__namespace.useEffect(() => {
    if (uuid && appInfo.currentEnvironment && telemetryPropertiesQuery.data) {
      const event = "didInitializeAdministration";
      fetch("https://analytics.strapi.io/api/v2/track", {
        method: "POST",
        body: JSON.stringify({
          // This event is anonymous
          event,
          userId: "",
          eventPropeties: {},
          userProperties: { environment: appInfo.currentEnvironment },
          groupProperties: { ...telemetryPropertiesQuery.data, projectId: uuid }
        }),
        headers: {
          "Content-Type": "application/json",
          "X-Strapi-Event": event
        }
      });
    }
  }, [appInfo.currentEnvironment, telemetryPropertiesQuery.data, uuid]);
  const trackingInfo = React__namespace.useMemo(
    () => ({
      uuid,
      telemetryProperties: telemetryPropertiesQuery.data
    }),
    [uuid, telemetryPropertiesQuery.data]
  );
  if (initQuery.isLoading || Array.isArray(routes) && routes.length === 0) {
    return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(React__namespace.Suspense, { fallback: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {}), children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.SkipToContent, { children: formatMessage({ id: "skipToContent", defaultMessage: "Skip to content" }) }),
    /* @__PURE__ */ jsxRuntime.jsx(
      ConfigurationProvider,
      {
        authLogo: {
          default: authLogo,
          custom: {
            url: customAuthLogo ?? ""
          }
        },
        menuLogo: {
          default: menuLogo,
          custom: {
            url: customMenuLogo ?? ""
          }
        },
        showReleaseNotification,
        showTutorials,
        children: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.TrackingProvider, { value: trackingInfo, children: /* @__PURE__ */ jsxRuntime.jsxs(reactRouterDom.Switch, { children: [
          authRoutes,
          /* @__PURE__ */ jsxRuntime.jsx(
            reactRouterDom.Route,
            {
              path: "/auth/:authType",
              render: (routerProps) => /* @__PURE__ */ jsxRuntime.jsx(AuthPage, { ...routerProps, hasAdmin: Boolean(hasAdmin) }),
              exact: true
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(PrivateRoute, { path: "/usecase", children: /* @__PURE__ */ jsxRuntime.jsx(UseCasePage, {}) }),
          /* @__PURE__ */ jsxRuntime.jsx(PrivateRoute, { path: "/", children: /* @__PURE__ */ jsxRuntime.jsx(AuthenticatedApp, {}) }),
          /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: "", component: NotFoundPage })
        ] }) })
      }
    )
  ] });
};
const StrapiLogo = "data:image/svg+xml,%3csvg%20width='800'%20height='800'%20viewBox='0%200%20800%20800'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M39%20282c0-118%200-176.9%2036.6-213.5C112.2%2032%20171.1%2032%20288.9%2032h221.2c117.8%200%20176.7%200%20213.3%2036.6C760%20105.2%20760%20164.1%20760%20281.9v221.2c0%20117.8%200%20176.7-36.6%20213.3C686.8%20753%20627.9%20753%20510.1%20753H288.9c-117.8%200-176.7%200-213.3-36.6C39%20679.8%2039%20620.9%2039%20503.1V281.9Z'%20fill='%234945FF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M536.4%20250.7H293.7v123.8h123.8v123.7h123.8V255.5c0-2.6-2.2-4.8-4.9-4.8Z'%20fill='%23fff'/%3e%3cpath%20fill='%23fff'%20d='M412.7%20374.5h4.8v4.8h-4.8z'/%3e%3cpath%20d='M293.8%20374.5h119c2.6%200%204.8%202.1%204.8%204.8v119h-119a4.8%204.8%200%200%201-4.8-4.9v-119Z'%20fill='%239593FF'/%3e%3cpath%20d='M417.5%20498.2h123.8L421.6%20618a2.4%202.4%200%200%201-4-1.7v-118ZM293.8%20374.5h-118a2.4%202.4%200%200%201-1.7-4.1l119.7-119.7v123.8Z'%20fill='%239593FF'/%3e%3c/svg%3e";
const useInjectionZone = (area) => {
  const { getAdminInjectedComponents } = helperPlugin.useStrapiApp();
  const [moduleName, page, position] = area.split(".");
  return getAdminInjectedComponents(moduleName, page, position);
};
const INJECTION_ZONES = {
  admin: {
    // Temporary injection zone, support for the react-tour plugin in foodadvisor
    tutorials: {
      links: []
    }
  },
  contentManager: {
    editView: { informations: [], "right-links": [] },
    listView: {
      actions: [],
      deleteModalAdditionalInfos: [],
      publishModalAdditionalInfos: [],
      unpublishModalAdditionalInfos: []
    }
  }
};
const InjectionZone = ({ area, ...props }) => {
  const components = useInjectionZone(area);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: components.map((component) => /* @__PURE__ */ jsxRuntime.jsx(component.Component, { ...props }, component.name)) });
};
const GuidedTourProvider = ({ children }) => {
  const [{ currentStep, guidedTourState, isGuidedTourVisible, isSkipped }, dispatch] = React__namespace.useReducer(reducer$8, initialState$9, initialiseState);
  const setCurrentStep = (step) => {
    if (step !== null) {
      const isStepAlreadyDone = get__default.default(guidedTourState, step);
      const [sectionName, stepName] = step.split(".");
      const sectionArray = Object.entries(guidedTourState[sectionName]);
      const currentStepIndex = sectionArray.findIndex(([key]) => key === stepName);
      const previousSteps = sectionArray.slice(0, currentStepIndex);
      const isStepToShow = previousSteps.every(([, sectionValue]) => sectionValue);
      if (isStepAlreadyDone || isSkipped || !isStepToShow) {
        return null;
      }
    }
    helperPlugin.auth.set(null, "GUIDED_TOUR_CURRENT_STEP", true);
    return dispatch({
      type: "SET_CURRENT_STEP",
      step
    });
  };
  const setGuidedTourVisibility = (value) => {
    dispatch({
      type: "SET_GUIDED_TOUR_VISIBILITY",
      value
    });
  };
  const setStepState = (currentStep2, value) => {
    addCompletedStep(currentStep2);
    dispatch({
      type: "SET_STEP_STATE",
      currentStep: currentStep2,
      value
    });
  };
  const startSection = (sectionName) => {
    const sectionSteps = guidedTourState[sectionName];
    if (sectionSteps) {
      const guidedTourArray = Object.entries(guidedTourState);
      const currentSectionIndex = guidedTourArray.findIndex(([key]) => key === sectionName);
      const previousSections = guidedTourArray.slice(0, currentSectionIndex);
      const isSectionToShow = previousSections.every(
        ([, sectionValue]) => Object.values(sectionValue).every(Boolean)
      );
      const [firstStep] = Object.keys(sectionSteps);
      const isFirstStepDone = sectionSteps[firstStep];
      if (isSectionToShow && !currentStep && !isFirstStepDone) {
        setCurrentStep(`${sectionName}.${firstStep}`);
      }
    }
  };
  const setSkipped = (value) => {
    helperPlugin.auth.set(value, "GUIDED_TOUR_SKIPPED", true);
    dispatch({
      type: "SET_SKIPPED",
      value
    });
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    helperPlugin.GuidedTourProvider,
    {
      guidedTourState,
      currentStep,
      setCurrentStep,
      setGuidedTourVisibility,
      setSkipped,
      setStepState,
      startSection,
      isGuidedTourVisible,
      isSkipped,
      children
    }
  );
};
const initialState$9 = {
  currentStep: null,
  guidedTourState: {
    contentTypeBuilder: {
      create: false,
      success: false
    },
    contentManager: {
      create: false,
      success: false
    },
    apiTokens: {
      create: false,
      success: false
    },
    transferTokens: {
      create: false,
      success: false
    }
  },
  isGuidedTourVisible: false,
  isSkipped: false
};
const reducer$8 = (state = initialState$9, action) => produce__default.default(state, (draftState) => {
  switch (action.type) {
    case "SET_CURRENT_STEP": {
      draftState.currentStep = action.step;
      break;
    }
    case "SET_STEP_STATE": {
      const [section, step] = action.currentStep.split(".");
      draftState.guidedTourState[section][step] = action.value;
      break;
    }
    case "SET_SKIPPED": {
      draftState.isSkipped = action.value;
      break;
    }
    case "SET_GUIDED_TOUR_VISIBILITY": {
      draftState.isGuidedTourVisible = action.value;
      break;
    }
    default: {
      return draftState;
    }
  }
});
const initialiseState = (initialState2) => {
  const copyInitialState = { ...initialState2 };
  const guidedTourLocaleStorage = helperPlugin.auth.get("GUIDED_TOUR_COMPLETED_STEPS");
  const currentStepLocaleStorage = helperPlugin.auth.get("GUIDED_TOUR_CURRENT_STEP");
  const skippedLocaleStorage = helperPlugin.auth.get("GUIDED_TOUR_SKIPPED");
  if (Array.isArray(guidedTourLocaleStorage)) {
    guidedTourLocaleStorage.forEach((step) => {
      const [sectionName, stepName] = step.split(".");
      set__default.default(copyInitialState, ["guidedTourState", sectionName, stepName], true);
    });
  }
  if (currentStepLocaleStorage) {
    const [sectionName, stepName] = currentStepLocaleStorage.split(".");
    set__default.default(copyInitialState, ["guidedTourState", sectionName, stepName], true);
    addCompletedStep(currentStepLocaleStorage);
    helperPlugin.auth.set(null, "GUIDED_TOUR_CURRENT_STEP", true);
  }
  if (skippedLocaleStorage !== null) {
    set__default.default(copyInitialState, "isSkipped", skippedLocaleStorage);
  }
  return copyInitialState;
};
const addCompletedStep = (completedStep) => {
  const currentSteps = helperPlugin.auth.get("GUIDED_TOUR_COMPLETED_STEPS") ?? [];
  if (!Array.isArray(currentSteps)) {
    return;
  }
  const isAlreadyStored = currentSteps.includes(completedStep);
  if (isAlreadyStored) {
    return;
  }
  helperPlugin.auth.set([...currentSteps, completedStep], "GUIDED_TOUR_COMPLETED_STEPS", true);
};
const LanguageProvider = ({ children, messages }) => {
  const locale = useTypedSelector((state) => state.admin_app.language.locale);
  const appMessages = defaultsDeep__default.default(messages[locale], messages.en);
  return /* @__PURE__ */ jsxRuntime.jsx(reactIntl.IntlProvider, { locale, defaultLocale: "en", messages: appMessages, textComponent: "span", children });
};
const Theme = ({ children, themes }) => {
  const { currentTheme } = useTypedSelector((state) => state.admin_app.theme);
  const [systemTheme, setSystemTheme] = React__namespace.useState();
  const { locale } = reactIntl.useIntl();
  const dispatch = reactRedux.useDispatch();
  React__namespace.useEffect(() => {
    const themeWatcher = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(themeWatcher.matches ? "dark" : "light");
    const listener = (event) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };
    themeWatcher.addEventListener("change", listener);
    return () => {
      themeWatcher.removeEventListener("change", listener);
    };
  }, []);
  React__namespace.useEffect(() => {
    dispatch(setAvailableThemes(Object.keys(themes)));
  }, [dispatch, themes]);
  const computedThemeName = currentTheme === "system" ? systemTheme : currentTheme;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    designSystem.DesignSystemProvider,
    {
      locale,
      theme: themes?.[computedThemeName || "light"],
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(GlobalStyle, {})
      ]
    }
  );
};
const GlobalStyle = styled.createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.neutral100};
  }
`;
const queryClient = new reactQuery.QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});
const Providers = ({
  children,
  components,
  customFields,
  fields,
  getAdminInjectedComponents,
  getPlugin,
  menu,
  messages,
  plugins,
  runHookParallel,
  runHookSeries,
  runHookWaterfall,
  settings,
  store,
  themes
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(reactRedux.Provider, { store, children: /* @__PURE__ */ jsxRuntime.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntime.jsx(LanguageProvider, { messages, children: /* @__PURE__ */ jsxRuntime.jsx(Theme, { themes, children: /* @__PURE__ */ jsxRuntime.jsx(reactQuery.QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntime.jsx(
    helperPlugin.StrapiAppProvider,
    {
      getPlugin,
      getAdminInjectedComponents,
      menu,
      plugins,
      runHookParallel,
      runHookWaterfall,
      runHookSeries,
      settings,
      children: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LibraryProvider, { components, fields, children: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.CustomFieldsProvider, { customFields, children: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.AutoReloadOverlayBlockerProvider, { children: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.OverlayBlockerProvider, { children: /* @__PURE__ */ jsxRuntime.jsx(GuidedTourProvider, { children: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.NotificationsProvider, { children }) }) }) }) }) })
    }
  ) }) }) }) }) });
};
class Components {
  components;
  constructor() {
    this.components = {};
  }
  add(component) {
    const { name: name2, Component: Component2 } = component;
    invariant__default.default(Component2, "A Component must be provided");
    invariant__default.default(name2, "A name must be provided");
    invariant__default.default(this.components[name2] === void 0, "A similar field already exists");
    this.components[name2] = Component2;
  }
}
const useIsMounted = () => {
  const isMounted = React__namespace.useRef(false);
  React__namespace.useLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};
const useForceUpdate = () => {
  const [tick, update] = React__namespace.useState();
  const isMounted = useIsMounted();
  const forceUpdate = React__namespace.useCallback(() => {
    if (isMounted.current) {
      update(Math.random());
    }
  }, [isMounted, update]);
  return [tick, forceUpdate];
};
const useThrottledCallback = (callback, wait, options2) => {
  const throttledCallback = React.useMemo(
    () => throttle__default.default(callback, wait, options2),
    [callback, options2, wait]
  );
  return throttledCallback;
};
const requestIdleCallbackShim = (callback) => {
  const start = Date.now();
  return setTimeout(() => {
    callback({
      didTimeout: false,
      timeRemaining() {
        return Math.max(0, Date.now() - start);
      }
    });
  }, 1);
};
const _requestIdleCallback = typeof requestIdleCallback === "undefined" ? requestIdleCallbackShim : requestIdleCallback;
const cancelIdleCallbackShim = (handle) => {
  return clearTimeout(handle);
};
const _cancelIdleCallback = typeof cancelIdleCallback === "undefined" ? cancelIdleCallbackShim : cancelIdleCallback;
const DescriptionComponentRenderer = ({
  children,
  props,
  descriptions
}) => {
  const statesRef = React__namespace.useRef({});
  const [tick, forceUpdate] = useForceUpdate();
  const requestHandle = React__namespace.useRef(null);
  const requestUpdate = React__namespace.useCallback(() => {
    if (requestHandle.current) {
      _cancelIdleCallback(requestHandle.current);
    }
    requestHandle.current = _requestIdleCallback(() => {
      requestHandle.current = null;
      forceUpdate();
    });
  }, [forceUpdate]);
  const throttledRequestUpdate = useThrottledCallback(requestUpdate, 60, { trailing: true });
  const update = React__namespace.useCallback(
    (id, description) => {
      if (description === null) {
        delete statesRef.current[id];
      } else {
        const current = statesRef.current[id];
        statesRef.current[id] = { ...current, value: { ...description, id } };
      }
      throttledRequestUpdate();
    },
    [throttledRequestUpdate]
  );
  const ids2 = React__namespace.useMemo(
    () => descriptions.map((description) => getCompId(description)),
    [descriptions]
  );
  const states = React__namespace.useMemo(
    () => ids2.map((id) => statesRef.current[id]?.value).filter((state) => state !== null && state !== void 0),
    /**
     * we leave tick in the deps to ensure the memo is recalculated when the `update` function  is called.
     * the `ids` will most likely be stable unless we get new actions, but we can't respond to the Description
     * Component changing the ref data in any other way.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ids2, tick]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    descriptions.map((description) => {
      const key = getCompId(description);
      return /* @__PURE__ */ jsxRuntime.jsx(Description, { id: key, description, props, update }, key);
    }),
    children(states)
  ] });
};
const Description = React__namespace.memo(
  ({ description, id, props, update }) => {
    const comp = description(props);
    useShallowCompareEffect(() => {
      update(id, comp);
      return () => {
        update(id, null);
      };
    }, comp);
    return null;
  },
  (prev, next) => isEqual__default.default(prev.props, next.props)
);
const ids = /* @__PURE__ */ new WeakMap();
let counter = 0;
function getCompId(comp) {
  const cachedId = ids.get(comp);
  if (cachedId)
    return cachedId;
  const id = `${comp.name || comp.displayName || "<anonymous>"}-${counter++}`;
  ids.set(comp, id);
  return id;
}
const useShallowCompareMemoize = (value) => {
  const ref = React__namespace.useRef(void 0);
  if (!isEqual__default.default(value, ref.current)) {
    ref.current = value;
  }
  return [ref.current];
};
const useShallowCompareEffect = (callback, dependencies) => {
  React__namespace.useEffect(callback, useShallowCompareMemoize(dependencies));
};
const getTranslation = (id) => `content-manager.${id}`;
const generatePermissionsObject = (uid) => {
  const permissions2 = {
    create: [{ action: "plugin::content-manager.explorer.create", subject: null }],
    delete: [{ action: "plugin::content-manager.explorer.delete", subject: null }],
    publish: [{ action: "plugin::content-manager.explorer.publish", subject: null }],
    read: [{ action: "plugin::content-manager.explorer.read", subject: null }],
    update: [{ action: "plugin::content-manager.explorer.update", subject: null }]
  };
  return Object.entries(permissions2).reduce((acc, [key, value]) => {
    acc[key] = value.map((perm) => ({ ...perm, subject: uid }));
    return acc;
  }, {});
};
const getFieldsActionMatchingPermissions = (userPermissions, slug) => {
  const getMatchingPermissions = (action) => {
    const matched = helperPlugin.findMatchingPermissions(userPermissions, [
      {
        action: `plugin::content-manager.explorer.${action}`,
        subject: slug
      }
    ]);
    return matched.flatMap((perm) => perm.properties?.fields).filter(
      (field, index, arr) => arr.indexOf(field) === index && typeof field === "string"
    );
  };
  return {
    createActionAllowedFields: getMatchingPermissions("create"),
    readActionAllowedFields: getMatchingPermissions("read"),
    updateActionAllowedFields: getMatchingPermissions("update")
  };
};
const useAllowedActions = (slug) => {
  const viewPermissions = generatePermissionsObject(slug);
  const permissions2 = useTypedSelector((state) => state["content-manager_rbacManager"].permissions);
  const { allowedActions } = helperPlugin.useRBAC(viewPermissions, permissions2 ?? []);
  return allowedActions;
};
const getFieldName = (stringName) => stringName.split(".").filter((string) => isNaN__default.default(parseInt(string, 10)));
const getMaxTempKey = (arr) => {
  if (arr.length === 0) {
    return -1;
  }
  const maxValue = Math.max(...arr.map((o) => Number(o.id ?? o.__temp_key__ ?? 0)));
  return Number.isNaN(maxValue) ? -1 : maxValue;
};
const isFieldTypeNumber = (type) => {
  return ["integer", "biginteger", "decimal", "float", "number"].includes(type);
};
const createYupSchema = (model, { components }, options2 = {
  isCreatingEntry: true,
  isDraft: true,
  isFromComponent: false,
  isJSONTestDisabled: false
}) => {
  const { attributes } = model;
  return yup__namespace.object().shape(
    Object.keys(attributes).reduce((acc, current) => {
      const attribute = attributes[current];
      if (attribute.type !== "relation" && attribute.type !== "component" && attribute.type !== "dynamiczone") {
        const formatted = createYupSchemaAttribute(attribute.type, attribute, options2);
        acc[current] = formatted;
      }
      if (attribute.type === "relation") {
        acc[current] = [
          "oneWay",
          "oneToOne",
          "manyToOne",
          "oneToManyMorph",
          "oneToOneMorph"
          // @ts-expect-error – see comment at top of file
        ].includes(attribute.relationType) ? yup__namespace.object().nullable() : yup__namespace.array().nullable();
      }
      if (attribute.type === "component") {
        const componentFieldSchema = createYupSchema(
          components[attribute.component],
          {
            components
          },
          { ...options2, isFromComponent: true }
        );
        if (attribute.repeatable === true) {
          const { min, max, required } = attribute;
          const componentSchema2 = yup__namespace.lazy((value) => {
            let baseSchema = yup__namespace.array().of(componentFieldSchema);
            if (min) {
              if (required) {
                baseSchema = baseSchema.min(min, helperPlugin.translatedErrors.min);
              } else if (required !== true && isEmpty__default.default(value)) {
                baseSchema = baseSchema.nullable();
              } else {
                baseSchema = baseSchema.min(min, helperPlugin.translatedErrors.min);
              }
            } else if (required && !options2.isDraft) {
              baseSchema = baseSchema.min(1, helperPlugin.translatedErrors.required);
            }
            if (max) {
              baseSchema = baseSchema.max(max, helperPlugin.translatedErrors.max);
            }
            return baseSchema;
          });
          acc[current] = componentSchema2;
          return acc;
        }
        const componentSchema = yup__namespace.lazy((obj) => {
          if (obj !== void 0) {
            return attribute.required === true && !options2.isDraft ? componentFieldSchema.defined() : componentFieldSchema.nullable();
          }
          return attribute.required === true ? yup__namespace.object().defined() : yup__namespace.object().nullable();
        });
        acc[current] = componentSchema;
        return acc;
      }
      if (attribute.type === "dynamiczone") {
        let dynamicZoneSchema = yup__namespace.array().of(
          // @ts-expect-error – see comment at top of file
          yup__namespace.lazy(({ __component }) => {
            return createYupSchema(
              components[__component],
              { components },
              { ...options2, isFromComponent: true }
            );
          })
        );
        const { max, min } = attribute;
        if (min) {
          if (attribute.required) {
            dynamicZoneSchema = dynamicZoneSchema.test("min", helperPlugin.translatedErrors.min, (value) => {
              if (options2.isCreatingEntry) {
                return value && value.length >= min;
              }
              if (value === void 0) {
                return true;
              }
              return value !== null && value.length >= min;
            }).test("required", helperPlugin.translatedErrors.required, (value) => {
              if (options2.isCreatingEntry) {
                return value !== null || value !== void 0;
              }
              if (value === void 0) {
                return true;
              }
              return value !== null;
            });
          } else {
            dynamicZoneSchema = dynamicZoneSchema.notEmptyMin(min);
          }
        } else if (attribute.required && !options2.isDraft) {
          dynamicZoneSchema = dynamicZoneSchema.test("required", helperPlugin.translatedErrors.required, (value) => {
            if (options2.isCreatingEntry) {
              return value !== null || value !== void 0;
            }
            if (value === void 0) {
              return true;
            }
            return value !== null;
          });
        }
        if (max) {
          dynamicZoneSchema = dynamicZoneSchema.max(max, helperPlugin.translatedErrors.max);
        }
        acc[current] = dynamicZoneSchema;
      }
      return acc;
    }, {})
  );
};
const createYupSchemaAttribute = (type, validations, options2) => {
  let schema = yup__namespace.mixed();
  if (["string", "uid", "text", "richtext", "email", "password", "enumeration"].includes(type)) {
    schema = yup__namespace.string();
  }
  if (type === "blocks") {
    schema = yup__namespace.mixed().test("isJSON", helperPlugin.translatedErrors.json, (value) => {
      if (options2.isJSONTestDisabled) {
        return true;
      }
      if (options2.isDraft) {
        return true;
      }
      if (value && !Array.isArray(value)) {
        return false;
      }
      return true;
    });
  }
  if (type === "json") {
    schema = yup__namespace.mixed(helperPlugin.translatedErrors.json).test("isJSON", helperPlugin.translatedErrors.json, (value) => {
      if (options2.isJSONTestDisabled) {
        return true;
      }
      if (!value || !value.length) {
        return true;
      }
      try {
        JSON.parse(value);
        return true;
      } catch (err) {
        return false;
      }
    }).nullable().test("required", helperPlugin.translatedErrors.required, (value) => {
      if (validations.required && (!value || !value.length)) {
        return false;
      }
      return true;
    });
  }
  if (type === "email") {
    schema = schema.email(helperPlugin.translatedErrors.email);
  }
  if (["number", "integer", "float", "decimal"].includes(type)) {
    schema = yup__namespace.number().transform((cv) => isNaN__default.default(cv) ? void 0 : cv).typeError();
  }
  if (type === "biginteger") {
    schema = yup__namespace.string().matches(/^-?\d*$/);
  }
  if (["date", "datetime"].includes(type)) {
    schema = yup__namespace.date();
  }
  Object.keys(validations).forEach((validation) => {
    const validationValue = validations[validation];
    if (!!validationValue || // @ts-expect-error – see comment at top of file
    !isBoolean__default.default(validationValue) && Number.isInteger(Math.floor(validationValue)) || // @ts-expect-error – see comment at top of file
    validationValue === 0) {
      switch (validation) {
        case "required": {
          if (!options2.isDraft) {
            if (type === "password" && options2.isCreatingEntry) {
              schema = schema.required(helperPlugin.translatedErrors.required);
            }
            if (type !== "password") {
              if (options2.isCreatingEntry) {
                schema = schema.required(helperPlugin.translatedErrors.required);
              } else {
                schema = schema.test("required", helperPlugin.translatedErrors.required, (value) => {
                  if (value === void 0 && !options2.isFromComponent) {
                    return true;
                  }
                  if (isFieldTypeNumber(type)) {
                    if (value === 0) {
                      return true;
                    }
                    return !!value;
                  }
                  if (type === "boolean") {
                    return value !== null && value !== void 0;
                  }
                  if (type === "date" || type === "datetime") {
                    if (typeof value === "string") {
                      return !isEmpty__default.default(value);
                    }
                    return !isEmpty__default.default(value?.toString());
                  }
                  return !isEmpty__default.default(value);
                });
              }
            }
          }
          break;
        }
        case "max": {
          if (type === "biginteger") {
            schema = schema.isInferior(helperPlugin.translatedErrors.max, validationValue);
          } else {
            schema = schema.max(validationValue, helperPlugin.translatedErrors.max);
          }
          break;
        }
        case "maxLength":
          schema = schema.max(validationValue, helperPlugin.translatedErrors.maxLength);
          break;
        case "min": {
          if (type === "biginteger") {
            schema = schema.isSuperior(helperPlugin.translatedErrors.min, validationValue);
          } else {
            schema = schema.min(validationValue, helperPlugin.translatedErrors.min);
          }
          break;
        }
        case "minLength": {
          if (!options2.isDraft) {
            schema = schema.min(validationValue, helperPlugin.translatedErrors.minLength);
          }
          break;
        }
        case "regex":
          schema = schema.matches(new RegExp(validationValue), {
            message: helperPlugin.translatedErrors.regex,
            excludeEmptyString: !validations.required
          });
          break;
        case "lowercase":
          if (["text", "textarea", "email", "string"].includes(type)) {
            schema = schema.strict().lowercase();
          }
          break;
        case "uppercase":
          if (["text", "textarea", "email", "string"].includes(type)) {
            schema = schema.strict().uppercase();
          }
          break;
        case "positive":
          if (isFieldTypeNumber(type)) {
            schema = schema.positive();
          }
          break;
        case "negative":
          if (isFieldTypeNumber(type)) {
            schema = schema.negative();
          }
          break;
        default:
          schema = schema.nullable();
      }
    }
  });
  return schema;
};
yup__namespace.addMethod(yup__namespace.mixed, "defined", function() {
  return this.test("defined", helperPlugin.translatedErrors.required, (value) => value !== void 0);
});
yup__namespace.addMethod(yup__namespace.array, "notEmptyMin", function(min) {
  return this.test("notEmptyMin", helperPlugin.translatedErrors.min, (value) => {
    if (!value || !value.length) {
      return true;
    }
    return value.length >= min;
  });
});
yup__namespace.addMethod(yup__namespace.string, "isInferior", function(message, max) {
  return this.test("isInferior", message, function(value) {
    if (!value) {
      return true;
    }
    if (Number.isNaN(toNumber__default.default(value))) {
      return true;
    }
    return toNumber__default.default(max) >= toNumber__default.default(value);
  });
});
yup__namespace.addMethod(yup__namespace.string, "isSuperior", function(message, min) {
  return this.test("isSuperior", message, function(value) {
    if (!value) {
      return true;
    }
    if (Number.isNaN(toNumber__default.default(value))) {
      return true;
    }
    return toNumber__default.default(value) >= toNumber__default.default(min);
  });
});
const InjectionZoneList = ({ area, ...props }) => {
  const injectedComponents = useInjectionZone(area);
  if (!injectedComponents) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx("ul", { children: injectedComponents.map(({ name: name2, Component: Component2 }) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { padding: 3, style: { textAlign: "center" }, children: /* @__PURE__ */ jsxRuntime.jsx(Component2, { ...props }) }, name2)) });
};
const DialogConfirmDelete = ({
  isConfirmButtonLoading = false,
  isOpen = false,
  onToggleDialog,
  onConfirm
}) => {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    designSystem.Dialog,
    {
      onClose: onToggleDialog,
      title: formatMessage({
        id: "app.components.ConfirmDialog.title",
        defaultMessage: "Confirmation"
      }),
      isOpen,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.DialogBody, { icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.ExclamationMarkCircle, {}), children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 2, children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { id: "confirm-description", children: formatMessage({
            id: "components.popUpWarning.message",
            defaultMessage: "Are you sure you want to delete this?"
          }) }) }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { children: /* @__PURE__ */ jsxRuntime.jsx(InjectionZoneList, { area: "contentManager.listView.deleteModalAdditionalInfos" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.DialogFooter,
          {
            startAction: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { onClick: onToggleDialog, variant: "tertiary", children: formatMessage({
              id: "app.components.Button.cancel",
              defaultMessage: "Cancel"
            }) }),
            endAction: /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.Button,
              {
                onClick: onConfirm,
                variant: "danger-light",
                startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Trash, {}),
                id: "confirm-delete",
                loading: isConfirmButtonLoading,
                children: formatMessage({
                  id: "app.components.Button.confirm",
                  defaultMessage: "Confirm"
                })
              }
            )
          }
        )
      ]
    }
  );
};
const stopPropagation = (e) => e.stopPropagation();
const CheckboxDataCell = ({ rowId, index }) => {
  const { selectedEntries, onSelectRow } = helperPlugin.useTableContext();
  const { formatMessage } = reactIntl.useIntl();
  const isChecked = selectedEntries.findIndex((id) => id === rowId) !== -1;
  const ariaLabel = formatMessage(
    {
      id: "app.component.table.select.one-entry",
      defaultMessage: `Select {target}`
    },
    { target: index + 1 }
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.BaseCheckbox,
    {
      "aria-label": ariaLabel,
      checked: isChecked,
      onClick: stopPropagation,
      onChange: () => {
        onSelectRow({ name: rowId, value: !isChecked });
      }
    }
  );
};
const EntityActionsDataCell = ({
  rowId,
  index,
  canCreate = false,
  canDelete = false,
  setIsConfirmDeleteRowOpen,
  handleCloneClick
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const { trackUsage } = helperPlugin.useTracking();
  const { setSelectedEntries } = helperPlugin.useTableContext();
  const [{ query }] = helperPlugin.useQueryParams();
  const itemLineText = formatMessage(
    {
      id: "content-manager.components.ListViewTable.row-line",
      defaultMessage: "item line {number}"
    },
    { number: index + 1 }
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 1, justifyContent: "end", onClick: stopPropagation, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.IconButton,
      {
        forwardedAs: reactRouterDom.Link,
        onClick: () => {
          trackUsage("willEditEntryFromButton");
        },
        to: (location) => ({
          pathname: `${location.pathname}/${rowId}`,
          state: { from: location.pathname },
          search: query.plugins ? qs.stringify({ plugins: query.plugins }) : ""
        }),
        label: formatMessage(
          { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
          { target: itemLineText }
        ),
        borderWidth: 0,
        children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Pencil, {})
      }
    ),
    canCreate && /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.IconButton,
      {
        onClick: handleCloneClick(rowId),
        label: formatMessage(
          {
            id: "app.component.table.duplicate",
            defaultMessage: "Duplicate {target}"
          },
          { target: itemLineText }
        ),
        borderWidth: 0,
        children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Duplicate, {})
      }
    ),
    canDelete && /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.IconButton,
      {
        onClick: () => {
          trackUsage("willDeleteEntryFromList");
          setSelectedEntries([rowId]);
          setIsConfirmDeleteRowOpen(true);
        },
        label: formatMessage(
          { id: "global.delete-target", defaultMessage: "Delete {target}" },
          { target: itemLineText }
        ),
        borderWidth: 0,
        children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Trash, {})
      }
    )
  ] });
};
const Root$1 = ({
  children,
  onConfirmDelete,
  isConfirmDeleteRowOpen,
  setIsConfirmDeleteRowOpen
}) => {
  const [isLoading, setIsLoading] = React__namespace.useState(false);
  const { selectedEntries, setSelectedEntries } = helperPlugin.useTableContext();
  const handleConfirmDelete = async () => {
    try {
      setIsLoading(true);
      await onConfirmDelete(selectedEntries[0]);
      setIsConfirmDeleteRowOpen(false);
      setIsLoading(false);
      setSelectedEntries([]);
    } catch (error) {
      setIsLoading(false);
      setIsConfirmDeleteRowOpen(false);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(helperPlugin.Table.Body, { children: [
    children,
    /* @__PURE__ */ jsxRuntime.jsx(
      DialogConfirmDelete,
      {
        isConfirmButtonLoading: isLoading,
        onConfirm: handleConfirmDelete,
        onToggleDialog: () => setIsConfirmDeleteRowOpen(!isConfirmDeleteRowOpen),
        isOpen: isConfirmDeleteRowOpen
      }
    )
  ] });
};
const Table = { CheckboxDataCell, EntityActionsDataCell, Root: Root$1 };
const ConfirmBulkActionDialog = ({
  onToggleDialog,
  isOpen = false,
  dialogBody,
  endAction
}) => {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    designSystem.Dialog,
    {
      onClose: onToggleDialog,
      title: formatMessage({
        id: "app.components.ConfirmDialog.title",
        defaultMessage: "Confirmation"
      }),
      isOpen,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.DialogBody, { icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.ExclamationMarkCircle, {}), children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 2, children: dialogBody }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.DialogFooter,
          {
            startAction: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { onClick: onToggleDialog, variant: "tertiary", children: formatMessage({
              id: "app.components.Button.cancel",
              defaultMessage: "Cancel"
            }) }),
            endAction
          }
        )
      ]
    }
  );
};
const BoldChunk$1 = (chunks) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", children: chunks });
const ConfirmDialogPublishAll = ({
  isOpen,
  onToggleDialog,
  isConfirmButtonLoading = false,
  onConfirm
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const { get: get2 } = helperPlugin.useFetchClient();
  const { selectedEntries } = helperPlugin.useTableContext();
  const toggleNotification = helperPlugin.useNotification();
  const { formatAPIError } = helperPlugin.useAPIErrorHandler(getTranslation);
  const contentType = useTypedSelector((state) => state["content-manager_listView"].contentType);
  const [{ query }] = helperPlugin.useQueryParams();
  const slug = contentType?.uid ?? "";
  const hasI18nEnabled = Boolean(contentType?.pluginOptions?.i18n);
  const {
    data: countDraftRelations = 0,
    isLoading,
    isError
  } = reactQuery.useQuery(
    ["content-manager", "draft-relations", slug, selectedEntries],
    async () => {
      const {
        data: { data }
      } = await get2(
        `/content-manager/collection-types/${slug}/actions/countManyEntriesDraftRelations`,
        {
          params: {
            ids: selectedEntries,
            locale: query?.plugins?.i18n?.locale
          }
        }
      );
      return data;
    },
    {
      // The API is called everytime you select/deselect an entry, this check avoids us sending a query with bad data
      enabled: selectedEntries.length > 0,
      onError(error) {
        toggleNotification({ type: "warning", message: formatAPIError(error) });
      }
    }
  );
  if (isError) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    ConfirmBulkActionDialog,
    {
      isOpen: isOpen && !isLoading,
      onToggleDialog,
      dialogBody: /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { id: "confirm-description", textAlign: "center", children: [
          countDraftRelations > 0 && formatMessage(
            {
              id: getTranslation(`popUpwarning.warning.bulk-has-draft-relations.message`),
              defaultMessage: "<b>{count} {count, plural, one { relation } other { relations } } out of {entities} { entities, plural, one { entry } other { entries } } {count, plural, one { is } other { are } }</b> not published yet and might lead to unexpected behavior. "
            },
            {
              b: BoldChunk$1,
              count: countDraftRelations,
              entities: selectedEntries.length
            }
          ),
          formatMessage({
            id: getTranslation("popUpWarning.bodyMessage.contentType.publish.all"),
            defaultMessage: "Are you sure you want to publish these entries?"
          })
        ] }),
        hasI18nEnabled && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "danger500", children: formatMessage(
          {
            id: getTranslation("Settings.list.actions.publishAdditionalInfos"),
            defaultMessage: "This will publish the active locale versions <em>(from Internationalization)</em>"
          },
          {
            em: Emphasis
          }
        ) })
      ] }),
      endAction: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.Button,
        {
          onClick: onConfirm,
          variant: "secondary",
          startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Check, {}),
          loading: isConfirmButtonLoading,
          children: formatMessage({
            id: "app.utils.publish",
            defaultMessage: "Publish"
          })
        }
      )
    }
  );
};
const TypographyMaxWidth$3 = styled__default.default(designSystem.Typography)`
  max-width: 300px;
`;
const EntryValidationText = ({
  validationErrors,
  isPublished = false
}) => {
  const { formatMessage } = reactIntl.useIntl();
  if (validationErrors) {
    const validationErrorsMessages = Object.entries(validationErrors).map(
      ([key, value]) => formatMessage(
        { id: `${value.id}.withField`, defaultMessage: value.defaultMessage },
        { field: key }
      )
    ).join(" ");
    return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Icon, { color: "danger600", as: Icons.CrossCircle }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tooltip, { description: validationErrorsMessages, children: /* @__PURE__ */ jsxRuntime.jsx(TypographyMaxWidth$3, { textColor: "danger600", variant: "omega", fontWeight: "semiBold", ellipsis: true, children: validationErrorsMessages }) })
    ] });
  }
  if (isPublished) {
    return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Icon, { color: "success600", as: Icons.CheckCircle }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "success600", fontWeight: "bold", children: formatMessage({
        id: "content-manager.bulk-publish.already-published",
        defaultMessage: "Already Published"
      }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Icon, { color: "success600", as: Icons.CheckCircle }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: formatMessage({
      id: "app.utils.ready-to-publish",
      defaultMessage: "Ready to publish"
    }) })
  ] });
};
const SelectedEntriesTableContent = ({
  isPublishing,
  rows = [],
  entriesToPublish = [],
  validationErrors = {}
}) => {
  const {
    location: { pathname }
  } = reactRouterDom.useHistory();
  const { formatMessage } = reactIntl.useIntl();
  const contentTypeSettings = useTypedSelector(
    (state) => state["content-manager_listView"].contentType?.settings
  );
  const mainField = contentTypeSettings?.mainField;
  const shouldDisplayMainField = mainField != null && mainField !== "id";
  return /* @__PURE__ */ jsxRuntime.jsxs(helperPlugin.Table.Content, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(helperPlugin.Table.Head, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.Table.HeaderCheckboxCell, {}),
      /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.Table.HeaderCell, { fieldSchemaType: "integer", label: "id", name: "id" }),
      shouldDisplayMainField && /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.Table.HeaderCell, { fieldSchemaType: "string", label: "name", name: "name" }),
      /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.Table.HeaderCell, { fieldSchemaType: "string", label: "status", name: "status" })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.Table.LoadingBody, {}),
    /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.Table.Body, { children: rows.map((row, index) => /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Tr, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(Table.CheckboxDataCell, { rowId: row.id, index }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: row.id }) }),
      shouldDisplayMainField && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: row[mainField] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: isPublishing && entriesToPublish.includes(row.id) ? /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: formatMessage({
          id: "content-manager.success.record.publishing",
          defaultMessage: "Publishing..."
        }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Loader, { small: true })
      ] }) : /* @__PURE__ */ jsxRuntime.jsx(
        EntryValidationText,
        {
          validationErrors: validationErrors[row.id],
          isPublished: row.publishedAt !== null
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.IconButton,
        {
          forwardedAs: reactRouterDom.Link,
          to: {
            pathname: `${pathname}/${row.id}`,
            state: { from: pathname }
          },
          label: formatMessage(
            { id: "app.component.HelperPluginTable.edit", defaultMessage: "Edit {target}" },
            {
              target: formatMessage(
                {
                  id: "content-manager.components.ListViewHelperPluginTable.row-line",
                  defaultMessage: "item line {number}"
                },
                { number: index + 1 }
              )
            }
          ),
          noBorder: true,
          target: "_blank",
          marginLeft: "auto",
          children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Pencil, {})
        }
      ) })
    ] }, row.id)) })
  ] });
};
const BoldChunk = (chunks) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", children: chunks });
const SelectedEntriesModalContent = ({
  toggleModal,
  refetchModalData,
  onSuccessfulPublish,
  validationErrors = {}
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const { selectedEntries, rows, isLoading, isFetching } = helperPlugin.useTableContext();
  const [isDialogOpen, setIsDialogOpen] = React__namespace.useState(false);
  const [publishedCount, setPublishedCount] = React__namespace.useState(0);
  const { formatAPIError } = helperPlugin.useAPIErrorHandler();
  const entriesToPublish = rows.reduce((acc, { id }) => {
    if (selectedEntries.includes(id) && !validationErrors[id]) {
      acc.push(id);
    }
    return acc;
  }, []);
  const { post } = helperPlugin.useFetchClient();
  const toggleNotification = helperPlugin.useNotification();
  const { contentType } = useTypedSelector((state) => state["content-manager_listView"]);
  const selectedEntriesWithErrorsCount = rows.filter(
    ({ id }) => selectedEntries.includes(id) && validationErrors[id]
  ).length;
  const selectedEntriesPublished = rows.filter(
    ({ id, publishedAt }) => selectedEntries.includes(id) && publishedAt
  ).length;
  const selectedEntriesWithNoErrorsCount = selectedEntries.length - selectedEntriesWithErrorsCount - selectedEntriesPublished;
  const bulkPublishMutation = reactQuery.useMutation(
    (data) => post(`/content-manager/collection-types/${contentType.uid}/actions/bulkPublish`, data),
    {
      onSuccess(_res, { ids: ids2 }) {
        onSuccessfulPublish(ids2);
        toggleNotification({
          type: "success",
          message: { id: "content-manager.success.record.publish", defaultMessage: "Published" }
        });
      },
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
      }
    }
  );
  const toggleDialog = () => setIsDialogOpen((prev) => !prev);
  const handleConfirmBulkPublish = async () => {
    toggleDialog();
    const { data } = await bulkPublishMutation.mutateAsync({ ids: entriesToPublish });
    setPublishedCount(data.count);
  };
  const getFormattedCountMessage = () => {
    if (publishedCount) {
      return formatMessage(
        {
          id: getTranslation("containers.ListPage.selectedEntriesModal.publishedCount"),
          defaultMessage: "<b>{publishedCount}</b> {publishedCount, plural, =0 {entries} one {entry} other {entries}} published. <b>{withErrorsCount}</b> {withErrorsCount, plural, =0 {entries} one {entry} other {entries}} waiting for action."
        },
        {
          publishedCount,
          withErrorsCount: selectedEntriesWithErrorsCount,
          b: BoldChunk
        }
      );
    }
    return formatMessage(
      {
        id: getTranslation("containers.ListPage.selectedEntriesModal.selectedCount"),
        defaultMessage: "<b>{alreadyPublishedCount}</b> {alreadyPublishedCount, plural, =0 {entries} one {entry} other {entries}} already published. <b>{readyToPublishCount}</b> {readyToPublishCount, plural, =0 {entries} one {entry} other {entries}} ready to publish. <b>{withErrorsCount}</b> {withErrorsCount, plural, =0 {entries} one {entry} other {entries}} waiting for action."
      },
      {
        readyToPublishCount: selectedEntriesWithNoErrorsCount,
        withErrorsCount: selectedEntriesWithErrorsCount,
        alreadyPublishedCount: selectedEntriesPublished,
        b: BoldChunk
      }
    );
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.ModalBody, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: getFormattedCountMessage() }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { marginTop: 5, children: /* @__PURE__ */ jsxRuntime.jsx(
        SelectedEntriesTableContent,
        {
          isPublishing: bulkPublishMutation.isLoading,
          rows,
          entriesToPublish,
          validationErrors
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.ModalFooter,
      {
        startActions: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { onClick: toggleModal, variant: "tertiary", children: formatMessage({
          id: "app.components.Button.cancel",
          defaultMessage: "Cancel"
        }) }),
        endActions: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { onClick: () => refetchModalData(), variant: "tertiary", loading: isFetching, children: formatMessage({ id: "app.utils.refresh", defaultMessage: "Refresh" }) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.Button,
            {
              onClick: toggleDialog,
              disabled: selectedEntries.length === 0 || selectedEntriesWithErrorsCount > 0 || isLoading,
              loading: bulkPublishMutation.isLoading,
              children: formatMessage({ id: "app.utils.publish", defaultMessage: "Publish" })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      ConfirmDialogPublishAll,
      {
        isOpen: isDialogOpen,
        onToggleDialog: toggleDialog,
        isConfirmButtonLoading: bulkPublishMutation.isLoading,
        onConfirm: handleConfirmBulkPublish
      }
    )
  ] });
};
const PublishAction = ({ model: slug, ids: ids2 }) => {
  const { formatMessage } = reactIntl.useIntl();
  const queryClient2 = reactQuery.useQueryClient();
  const {
    data: list,
    contentType,
    components
  } = useTypedSelector((state) => state["content-manager_listView"]);
  const selectedEntries = list.filter((entry) => ids2.includes(entry.id));
  const hasPublishPermission = useAllowedActions(slug).canPublish;
  const showPublishButton = hasPublishPermission && selectedEntries.some((entry) => !entry.publishedAt);
  const { setSelectedEntries: setListViewTableSelectedRows } = helperPlugin.useTableContext();
  const [
    {
      query: { sort, plugins }
    }
  ] = helperPlugin.useQueryParams();
  const queryParams = {
    page: 1,
    pageSize: ids2.length,
    sort,
    filters: {
      id: {
        $in: ids2
      }
    },
    locale: plugins?.i18n?.locale
  };
  const { get: get2 } = helperPlugin.useFetchClient();
  const {
    data = [],
    isLoading,
    isFetching,
    refetch
  } = reactQuery.useQuery(
    ["bulk-actions", contentType?.uid, queryParams],
    async () => {
      const { data: data2 } = await get2(
        `content-manager/collection-types/${contentType.uid}`,
        {
          params: queryParams
        }
      );
      return data2.results;
    },
    {
      enabled: contentType !== null
    }
  );
  const { rows, validationErrors } = React__namespace.useMemo(() => {
    if (data.length > 0 && contentType) {
      const schema = createYupSchema(
        contentType,
        { components },
        { isDraft: false, isJSONTestDisabled: true }
      );
      const validationErrors2 = {};
      const rows2 = data.map((entry) => {
        try {
          schema.validateSync(entry, { abortEarly: false });
          return entry;
        } catch (e) {
          if (e instanceof yup.ValidationError) {
            validationErrors2[entry.id] = helperPlugin.getYupInnerErrors(e);
          }
          return entry;
        }
      });
      return { rows: rows2, validationErrors: validationErrors2 };
    }
    return {
      rows: [],
      validationErrors: {}
    };
  }, [components, contentType, data]);
  const refetchList = () => {
    queryClient2.invalidateQueries(["content-manager", "collection-types", slug]);
  };
  const onSuccessfulPublish = (ids22) => {
    setListViewTableSelectedRows((allIds) => allIds.filter((id) => !ids22.includes(id)));
    refetchList();
  };
  if (!showPublishButton)
    return null;
  return {
    actionType: "publish",
    variant: "tertiary",
    label: formatMessage({ id: "app.utils.publish", defaultMessage: "Publish" }),
    dialog: {
      type: "modal",
      title: formatMessage({
        id: getTranslation("containers.ListPage.selectedEntriesModal.title"),
        defaultMessage: "Publish entries"
      }),
      content: ({ onClose }) => {
        return /* @__PURE__ */ jsxRuntime.jsx(
          helperPlugin.Table.Root,
          {
            rows,
            defaultSelectedEntries: ids2,
            colCount: 4,
            isLoading,
            isFetching,
            children: /* @__PURE__ */ jsxRuntime.jsx(
              SelectedEntriesModalContent,
              {
                onSuccessfulPublish,
                toggleModal: () => {
                  onClose();
                  refetchList();
                },
                refetchModalData: refetch,
                validationErrors
              }
            )
          }
        );
      },
      onClose: () => {
        refetchList();
      }
    }
  };
};
const BulkActionsRenderer = () => {
  const { plugins } = helperPlugin.useStrapiApp();
  const { selectedEntries } = helperPlugin.useTableContext();
  const { slug, collectionType } = reactRouterDom.useParams();
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { gap: 2, children: /* @__PURE__ */ jsxRuntime.jsx(
    DescriptionComponentRenderer,
    {
      props: {
        model: slug,
        collectionType,
        ids: selectedEntries
      },
      descriptions: plugins["content-manager"].apis.getBulkActions(),
      children: (actions) => actions.map((action) => /* @__PURE__ */ jsxRuntime.jsx(BulkActionAction, { ...action }, action.id))
    }
  ) });
};
const BulkActionAction = (action) => {
  const [dialogId, setDialogId] = React__namespace.useState(null);
  const toggleNotification = helperPlugin.useNotification();
  const { trackUsage } = helperPlugin.useTracking();
  const handleClick = (action2) => (e) => {
    const { onClick, dialog, id } = action2;
    if (onClick) {
      onClick(e);
    }
    if (dialog) {
      switch (dialog.type) {
        case "notification":
          toggleNotification({
            title: dialog.title,
            message: dialog.content,
            type: dialog.status,
            timeout: dialog.timeout,
            onClose: dialog.onClose
          });
          break;
        case "dialog":
        case "modal": {
          if (action2.actionType === "delete")
            trackUsage("willBulkDeleteEntries");
          e.preventDefault();
          setDialogId(id);
        }
      }
    }
  };
  const handleClose = () => {
    setDialogId(null);
    if (action.dialog?.type === "modal" && action.dialog?.onClose) {
      action.dialog.onClose();
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Button,
      {
        disabled: action.disabled,
        startIcon: action.icon,
        variant: action.variant,
        onClick: handleClick(action),
        children: action.label
      }
    ),
    action.dialog?.type === "dialog" ? /* @__PURE__ */ jsxRuntime.jsx(
      BulkActionConfirmDialog,
      {
        ...action.dialog,
        variant: action.variant,
        isOpen: dialogId === action.id,
        onClose: handleClose
      }
    ) : null,
    action.dialog?.type === "modal" ? /* @__PURE__ */ jsxRuntime.jsx(
      BulkActionModal,
      {
        ...action.dialog,
        onModalClose: handleClose,
        isOpen: dialogId === action.id
      }
    ) : null
  ] });
};
const BulkActionConfirmDialog = ({
  onClose,
  onCancel,
  onConfirm,
  title,
  content,
  confirmButton,
  isOpen,
  variant = "secondary"
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const handleClose = async () => {
    if (onCancel) {
      await onCancel();
    }
    onClose();
  };
  const handleConfirm = async () => {
    if (onConfirm) {
      await onConfirm();
    }
    onClose();
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Dialog, { isOpen, title, onClose: handleClose, children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.DialogBody, { icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.ExclamationMarkCircle, {}), children: content }),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.DialogFooter,
      {
        startAction: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { onClick: handleClose, variant: "tertiary", children: formatMessage({
          id: "app.components.Button.cancel",
          defaultMessage: "Cancel"
        }) }),
        endAction: /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.Button,
          {
            onClick: handleConfirm,
            variant: variant === "danger-light" ? variant : "secondary",
            startIcon: variant === "danger-light" ? /* @__PURE__ */ jsxRuntime.jsx(Icons.Trash, {}) : /* @__PURE__ */ jsxRuntime.jsx(Icons.Check, {}),
            children: confirmButton ? confirmButton : formatMessage({
              id: "app.components.Button.confirm",
              defaultMessage: "Confirm"
            })
          }
        )
      }
    )
  ] });
};
const BulkActionModal = ({
  isOpen,
  title,
  onClose,
  content: Content,
  onModalClose
}) => {
  const id = React__namespace.useId();
  if (!isOpen) {
    return null;
  }
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    onModalClose();
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.ModalLayout, { borderRadius: "4px", overflow: "hidden", onClose: handleClose, labelledBy: id, children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.ModalHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", textColor: "neutral800", as: "h2", id, children: title }) }),
    /* @__PURE__ */ jsxRuntime.jsx(Content, { onClose: handleClose })
  ] });
};
const DeleteAction = ({ ids: ids2, model: slug }) => {
  const { formatMessage } = reactIntl.useIntl();
  const { post } = helperPlugin.useFetchClient();
  const toggleNotification = helperPlugin.useNotification();
  const { formatAPIError } = helperPlugin.useAPIErrorHandler(getTranslation);
  const contentType = useTypedSelector((state) => state["content-manager_listView"].contentType);
  const { setSelectedEntries } = helperPlugin.useTableContext();
  const hasI18nEnabled = Boolean(contentType?.pluginOptions?.i18n);
  const queryClient2 = reactQuery.useQueryClient();
  const { trackUsage } = helperPlugin.useTracking();
  const hasDeletePermission = useAllowedActions(slug).canDelete;
  const handleConfirmDeleteAllData = async () => {
    try {
      await post(`/content-manager/collection-types/${slug}/actions/bulkDelete`, {
        ids: ids2
      });
      queryClient2.invalidateQueries(["content-manager", "collection-types", slug]);
      setSelectedEntries([]);
      trackUsage("didBulkDeleteEntries");
    } catch (err) {
      if (err instanceof axios.AxiosError) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(err)
        });
      }
    }
  };
  if (!hasDeletePermission)
    return null;
  return {
    actionType: "delete",
    variant: "danger-light",
    label: formatMessage({ id: "global.delete", defaultMessage: "Delete" }),
    dialog: {
      type: "dialog",
      title: formatMessage({
        id: "app.components.ConfirmDialog.title",
        defaultMessage: "Confirmation"
      }),
      content: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 2, children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { id: "confirm-description", textAlign: "center", children: formatMessage({
          id: "popUpWarning.bodyMessage.contentType.delete.all",
          defaultMessage: "Are you sure you want to delete these entries?"
        }) }),
        hasI18nEnabled && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { textAlign: "center", padding: 3, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "danger500", children: formatMessage(
          {
            id: getTranslation("Settings.list.actions.deleteAdditionalInfos"),
            defaultMessage: "This will delete the active locale versions <em>(from Internationalization)</em>"
          },
          {
            em: Emphasis
          }
        ) }) })
      ] }),
      onConfirm: handleConfirmDeleteAllData
    }
  };
};
const UnpublishAction = ({ ids: ids2, model: slug }) => {
  const { formatMessage } = reactIntl.useIntl();
  const { post } = helperPlugin.useFetchClient();
  const toggleNotification = helperPlugin.useNotification();
  const { formatAPIError } = helperPlugin.useAPIErrorHandler(getTranslation);
  const { selectedEntries, setSelectedEntries } = helperPlugin.useTableContext();
  const { data, contentType } = useTypedSelector((state) => state["content-manager_listView"]);
  const selectedEntriesObjects = data.filter((entry) => selectedEntries.includes(entry.id));
  const hasI18nEnabled = Boolean(contentType?.pluginOptions?.i18n);
  const queryClient2 = reactQuery.useQueryClient();
  const hasPublishPermission = useAllowedActions(slug).canPublish;
  const bulkUnpublishMutation = reactQuery.useMutation(
    async (body) => {
      const { data: data2 } = await post(`/content-manager/collection-types/${slug}/actions/bulkUnpublish`, body);
      return data2;
    },
    {
      onSuccess() {
        toggleNotification({
          type: "success",
          message: {
            id: "content-manager.success.record.unpublish",
            defaultMessage: "Unpublished"
          }
        });
        queryClient2.invalidateQueries(["content-manager", "collection-types", slug]);
        setSelectedEntries([]);
      },
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
      }
    }
  );
  const handleConfirmUnpublishAllData = async () => {
    await bulkUnpublishMutation.mutateAsync({ ids: ids2 });
  };
  const showUnpublishButton = hasPublishPermission && selectedEntriesObjects.some((entry) => entry.publishedAt);
  if (!showUnpublishButton)
    return null;
  return {
    actionType: "unpublish",
    variant: "tertiary",
    label: formatMessage({ id: "app.utils.unpublish", defaultMessage: "Unpublish" }),
    dialog: {
      type: "dialog",
      title: formatMessage({
        id: "app.components.ConfirmDialog.title",
        defaultMessage: "Confirmation"
      }),
      content: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 2, children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { id: "confirm-description", textAlign: "center", children: formatMessage({
          id: "popUpWarning.bodyMessage.contentType.unpublish.all",
          defaultMessage: "Are you sure you want to unpublish these entries?"
        }) }),
        hasI18nEnabled && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { textAlign: "center", padding: 3, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "danger500", children: formatMessage(
          {
            id: getTranslation("Settings.list.actions.unpublishAdditionalInfos"),
            defaultMessage: "This will unpublish the active locale versions <em>(from Internationalization)</em>"
          },
          {
            em: Emphasis
          }
        ) }) })
      ] }),
      confirmButton: formatMessage({
        id: "app.utils.unpublish",
        defaultMessage: "Unpublish"
      }),
      onConfirm: handleConfirmUnpublishAllData
    }
  };
};
const Emphasis = (chunks) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "semiBold", textColor: "danger500", children: chunks });
const DEFAULT_BULK_ACTIONS = [PublishAction, UnpublishAction, DeleteAction];
class ContentManagerPlugin {
  /**
   * The following properties are the stored ones provided by any plugins registering with
   * the content-manager. The function calls however, need to be called at runtime in the
   * application, so instead we collate them and run them later with the complete list incl.
   * ones already registered & the context of the view.
   */
  bulkActions = [...DEFAULT_BULK_ACTIONS];
  constructor() {
  }
  addBulkAction(actions) {
    if (Array.isArray(actions)) {
      this.bulkActions = [...this.bulkActions, ...actions];
    } else if (typeof actions === "function") {
      this.bulkActions = actions(this.bulkActions);
    } else {
      throw new Error(
        `Expected the \`actions\` passed to \`addBulkAction\` to be an array or a function, but received ${getPrintableType(
          actions
        )}`
      );
    }
  }
  get config() {
    return {
      id: "content-manager",
      name: "Content Manager",
      apis: {
        addBulkAction: this.addBulkAction.bind(this),
        getBulkActions: () => this.bulkActions
      }
    };
  }
}
const getPrintableType = (value) => {
  const nativeType = typeof value;
  if (nativeType === "object") {
    if (value === null)
      return "null";
    if (Array.isArray(value))
      return "array";
    if (value instanceof Object && value.constructor.name !== "Object") {
      return value.constructor.name;
    }
  }
  return nativeType;
};
const ALLOWED_TYPES = [
  "biginteger",
  "boolean",
  "date",
  "datetime",
  "decimal",
  "email",
  "enumeration",
  "float",
  "integer",
  "json",
  "password",
  "richtext",
  "string",
  "text",
  "time",
  "uid"
];
const ALLOWED_ROOT_LEVEL_OPTIONS = [
  "min",
  "minLength",
  "max",
  "maxLength",
  "required",
  "regex",
  "enum",
  "unique",
  "private",
  "default"
];
class CustomFields {
  customFields;
  constructor() {
    this.customFields = {};
  }
  register(customFields) {
    if (Array.isArray(customFields)) {
      customFields.forEach((customField) => {
        this.register(customField);
      });
    } else {
      const { name: name2, pluginId, type, intlLabel, intlDescription, components, options: options2 } = customFields;
      invariant__default.default(name2, "A name must be provided");
      invariant__default.default(type, "A type must be provided");
      invariant__default.default(intlLabel, "An intlLabel must be provided");
      invariant__default.default(intlDescription, "An intlDescription must be provided");
      invariant__default.default(components, "A components object must be provided");
      invariant__default.default(components.Input, "An Input component must be provided");
      invariant__default.default(
        ALLOWED_TYPES.includes(type),
        `Custom field type: '${type}' is not a valid Strapi type or it can't be used with a Custom Field`
      );
      const isValidObjectKey = /^(?![0-9])[a-zA-Z0-9$_-]+$/g;
      invariant__default.default(
        isValidObjectKey.test(name2),
        `Custom field name: '${name2}' is not a valid object key`
      );
      const allFormOptions = [...options2?.base || [], ...options2?.advanced || []];
      if (allFormOptions.length) {
        const optionPathValidations = allFormOptions.reduce(optionsValidationReducer, []);
        optionPathValidations.forEach(({ isValidOptionPath, errorMessage }) => {
          invariant__default.default(isValidOptionPath, errorMessage);
        });
      }
      const uid = pluginId ? `plugin::${pluginId}.${name2}` : `global::${name2}`;
      const uidAlreadyUsed = Object.prototype.hasOwnProperty.call(this.customFields, uid);
      invariant__default.default(!uidAlreadyUsed, `Custom field: '${uid}' has already been registered`);
      this.customFields[uid] = customFields;
    }
  }
  getAll() {
    return this.customFields;
  }
  get(uid) {
    return this.customFields[uid];
  }
}
const optionsValidationReducer = (acc, option) => {
  if ("items" in option) {
    return option.items.reduce(optionsValidationReducer, acc);
  }
  if (!option.name) {
    acc.push({
      isValidOptionPath: false,
      errorMessage: "The 'name' property is required on an options object"
    });
  } else {
    acc.push({
      isValidOptionPath: option.name.startsWith("options") || ALLOWED_ROOT_LEVEL_OPTIONS.includes(option.name),
      errorMessage: `'${option.name}' must be prefixed with 'options.'`
    });
  }
  return acc;
};
class Fields {
  fields;
  constructor() {
    this.fields = {};
  }
  add(field) {
    const { type, Component: Component2 } = field;
    invariant__default.default(Component2, "A Component must be provided");
    invariant__default.default(type, "A type must be provided");
    this.fields[type] = Component2;
  }
}
class Middlewares {
  middlewares;
  constructor() {
    this.middlewares = [];
  }
  add(middleware) {
    this.middlewares.push(middleware);
  }
}
class Plugin {
  apis;
  // @ts-expect-error - TS doesn't like the fact that this can be null
  initializer;
  injectionZones;
  isReady;
  name;
  pluginId;
  constructor(pluginConf) {
    this.apis = pluginConf.apis || {};
    this.initializer = pluginConf.initializer || null;
    this.injectionZones = pluginConf.injectionZones || {};
    this.isReady = pluginConf.isReady !== void 0 ? pluginConf.isReady : true;
    this.name = pluginConf.name;
    this.pluginId = pluginConf.id;
  }
  getInjectedComponents(containerName, blockName) {
    try {
      return this.injectionZones[containerName][blockName] || [];
    } catch (err) {
      console.error("Cannot get injected component", err);
      return [];
    }
  }
  injectComponent(containerName, blockName, component) {
    try {
      this.injectionZones[containerName][blockName].push(component);
    } catch (err) {
      console.error("Cannot inject component", err);
    }
  }
}
class Reducers {
  reducers;
  constructor({ appReducers = {} } = {}) {
    this.reducers = { ...appReducers };
  }
  add(reducerName, reducer2) {
    this.reducers[reducerName] = reducer2;
  }
}
const RBACProvider = ({ children, permissions: permissions2, refetchPermissions }) => {
  const allPermissions = useTypedSelector((state) => state.rbacProvider.allPermissions);
  const dispatch = useTypedDispatch();
  React__namespace.useEffect(() => {
    dispatch(setPermissionsAction(permissions2));
    return () => {
      dispatch(resetStoreAction());
    };
  }, [permissions2, dispatch]);
  if (!allPermissions) {
    return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.RBACContext.Provider, { value: { allPermissions, refetchPermissions }, children });
};
const initialState$8 = {
  allPermissions: null,
  collectionTypesRelatedPermissions: {}
};
const RESET_STORE = "StrapiAdmin/RBACProvider/RESET_STORE";
const SET_PERMISSIONS$1 = "StrapiAdmin/RBACProvider/SET_PERMISSIONS";
const resetStoreAction = () => ({ type: RESET_STORE });
const setPermissionsAction = (permissions2) => ({
  type: SET_PERMISSIONS$1,
  permissions: permissions2
});
const RBACReducer = (state = initialState$8, action) => produce__default.default(state, (draftState) => {
  switch (action.type) {
    case SET_PERMISSIONS$1: {
      draftState.allPermissions = action.permissions;
      draftState.collectionTypesRelatedPermissions = action.permissions.filter((perm) => perm.subject).reduce((acc, current) => {
        const { subject, action: action2 } = current;
        if (!subject)
          return acc;
        if (!acc[subject]) {
          acc[subject] = {};
        }
        acc[subject] = acc[subject][action2] ? { ...acc[subject], [action2]: [...acc[subject][action2], current] } : { ...acc[subject], [action2]: [current] };
        return acc;
      }, {});
      break;
    }
    case RESET_STORE: {
      return initialState$8;
    }
    default:
      return state;
  }
});
const useSyncRbac = (query, collectionTypeUID, containerName = "listView") => {
  const dispatch = useTypedDispatch();
  const collectionTypesRelatedPermissions = useTypedSelector(
    (state) => state.rbacProvider.collectionTypesRelatedPermissions
  );
  const permissions2 = useTypedSelector((state) => state["content-manager_rbacManager"].permissions);
  const relatedPermissions = collectionTypesRelatedPermissions[collectionTypeUID];
  React.useEffect(() => {
    if (relatedPermissions) {
      dispatch({
        type: SET_PERMISSIONS,
        permissions: relatedPermissions,
        __meta__: {
          plugins: query ? query.plugins : null,
          containerName
        }
      });
      return () => {
        dispatch({ type: RESET_PERMISSIONS });
      };
    }
    return () => {
    };
  }, [relatedPermissions, dispatch, query, containerName]);
  const isPermissionMismatch = permissions2?.some((permission) => permission.subject !== collectionTypeUID) ?? true;
  return {
    isValid: Boolean(permissions2) && !isPermissionMismatch,
    permissions: permissions2
  };
};
const initialState$7 = {
  permissions: null
};
const SET_PERMISSIONS = "ContentManager/RBACManager/SET_PERMISSIONS";
const RESET_PERMISSIONS = "ContentManager/RBACManager/RESET_PERMISSIONS";
const reducer$7 = (state = initialState$7, action) => (
  // eslint-disable-next-line consistent-return
  produce__default.default(state, (draftState) => {
    switch (action.type) {
      case SET_PERMISSIONS: {
        draftState.permissions = Object.entries(action.permissions).reduce((acc, current) => {
          return [...acc, ...current[1]];
        }, []);
        break;
      }
      case RESET_PERMISSIONS: {
        draftState.permissions = null;
        break;
      }
      default:
        return draftState;
    }
  })
);
function getStyle(initialOffset, currentOffset, mouseOffset) {
  if (!initialOffset || !currentOffset || !mouseOffset) {
    return { display: "none" };
  }
  const { x, y } = mouseOffset;
  return {
    transform: `translate(${x}px, ${y}px)`
  };
}
const DragLayer = ({ renderItem }) => {
  const { itemType, isDragging, item, initialOffset, currentOffset, mouseOffset } = reactDnd.useDragLayer(
    (monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
      mouseOffset: monitor.getClientOffset()
    })
  );
  if (!isDragging) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.Box,
    {
      height: "100%",
      left: 0,
      position: "fixed",
      pointerEvents: "none",
      top: 0,
      zIndex: 100,
      width: "100%",
      children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { style: getStyle(initialOffset, currentOffset, mouseOffset), children: renderItem({ type: itemType, item }) })
    }
  );
};
const CardDragPreview = ({ labelField, isSibling = false }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    FieldContainer$1,
    {
      background: isSibling ? "neutral100" : "primary100",
      display: "inline-flex",
      gap: 3,
      hasRadius: true,
      justifyContent: "space-between",
      isSibling,
      "max-height": helperPlugin.pxToRem(32),
      maxWidth: "min-content",
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 3, children: [
          /* @__PURE__ */ jsxRuntime.jsx(DragButton$2, { alignItems: "center", cursor: "all-scroll", padding: 3, children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Drag, {}) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            TypographyMaxWidth$2,
            {
              textColor: isSibling ? void 0 : "primary600",
              fontWeight: "bold",
              ellipsis: true,
              children: labelField
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(ActionBox, { alignItems: "center", children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Pencil, {}) }),
          /* @__PURE__ */ jsxRuntime.jsx(ActionBox, { alignItems: "center", children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Cross, {}) })
        ] })
      ]
    }
  );
};
const ActionBox = styled__default.default(designSystem.Flex)`
  height: ${({ theme }) => theme.spaces[7]};

  &:last-child {
    padding: 0 ${({ theme }) => theme.spaces[3]};
  }
`;
const DragButton$2 = styled__default.default(ActionBox)`
  border-right: 1px solid ${({ theme }) => theme.colors.primary200};

  svg {
    width: ${12 / 16}rem;
    height: ${12 / 16}rem;
  }
`;
const FieldContainer$1 = styled__default.default(designSystem.Flex)`
  border: 1px solid
    ${({ theme, isSibling }) => isSibling ? theme.colors.neutral150 : theme.colors.primary200};

  svg {
    width: ${10 / 16}rem;
    height: ${10 / 16}rem;

    path {
      fill: ${({ theme, isSibling }) => isSibling ? void 0 : theme.colors.primary600};
    }
  }
`;
const TypographyMaxWidth$2 = styled__default.default(designSystem.Typography)`
  max-width: ${72 / 16}rem;
`;
const ComponentDragPreview = ({ displayedValue }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    designSystem.Flex,
    {
      background: "neutral0",
      borderColor: "neutral200",
      justifyContent: "space-between",
      gap: 3,
      padding: 3,
      width: helperPlugin.pxToRem(300),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(ToggleButton, { type: "button", children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 6, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            DropdownIconWrapper,
            {
              alignItems: "center",
              justifyContent: "center",
              background: "neutral200",
              height: helperPlugin.pxToRem(32),
              width: helperPlugin.pxToRem(32),
              children: /* @__PURE__ */ jsxRuntime.jsx(Icons.CarretDown, {})
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { maxWidth: helperPlugin.pxToRem(150), children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral700", ellipsis: true, children: displayedValue }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.IconButton, { "aria-label": "", borderWidth: 0, children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Trash, {}) }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.IconButton, { "aria-label": "", borderWidth: 0, children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Drag, {}) })
        ] })
      ]
    }
  );
};
const DropdownIconWrapper = styled__default.default(designSystem.Flex)`
  border-radius: 50%;

  svg {
    height: ${6 / 16}rem;
    width: ${11 / 16}rem;
    > path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }
`;
const ToggleButton = styled__default.default.button`
  border: none;
  background: transparent;
  display: block;
  width: 100%;
  text-align: unset;
  padding: 0;
`;
const useKeyboardDragAndDrop = (active, index, { onCancel, onDropItem, onGrabItem, onMoveItem }) => {
  const [isSelected, setIsSelected] = React__namespace.useState(false);
  const handleMove = (movement) => {
    if (!isSelected) {
      return;
    }
    if (typeof index === "number" && onMoveItem) {
      if (movement === "UP") {
        onMoveItem(index - 1, index);
      } else if (movement === "DOWN") {
        onMoveItem(index + 1, index);
      }
    }
  };
  const handleDragClick = () => {
    if (isSelected) {
      if (onDropItem) {
        onDropItem(index);
      }
      setIsSelected(false);
    } else {
      if (onGrabItem) {
        onGrabItem(index);
      }
      setIsSelected(true);
    }
  };
  const handleCancel = () => {
    if (isSelected) {
      setIsSelected(false);
      if (onCancel) {
        onCancel(index);
      }
    }
  };
  const handleKeyDown = (e) => {
    if (!active) {
      return;
    }
    if (e.key === "Tab" && !isSelected) {
      return;
    }
    e.preventDefault();
    switch (e.key) {
      case " ":
      case "Enter":
        handleDragClick();
        break;
      case "Escape":
        handleCancel();
        break;
      case "ArrowDown":
      case "ArrowRight":
        handleMove("DOWN");
        break;
      case "ArrowUp":
      case "ArrowLeft":
        handleMove("UP");
        break;
    }
  };
  return handleKeyDown;
};
const DIRECTIONS = {
  UPWARD: "upward",
  DOWNWARD: "downward"
};
const DROP_SENSITIVITY = {
  REGULAR: "regular",
  IMMEDIATE: "immediate"
};
const useDragAndDrop = (active, {
  type = "STRAPI_DND",
  index,
  item,
  onStart,
  onEnd,
  onGrabItem,
  onDropItem,
  onCancel,
  onMoveItem,
  dropSensitivity = DROP_SENSITIVITY.REGULAR
}) => {
  const objectRef = React__namespace.useRef(null);
  const [{ handlerId, isOver }, dropRef] = reactDnd.useDrop({
    accept: type,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isOver: monitor.isOver({ shallow: true })
      };
    },
    drop(item2) {
      const draggedIndex = item2.index;
      const newIndex = index;
      if (isOver && onDropItem) {
        onDropItem(draggedIndex, newIndex);
      }
    },
    hover(item2, monitor) {
      if (!objectRef.current || !onMoveItem) {
        return;
      }
      const dragIndex = item2.index;
      const newIndex = index;
      const hoverBoundingRect = objectRef.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset)
        return;
      const hoverClientY = clientOffset && clientOffset.y - hoverBoundingRect.top;
      if (typeof dragIndex === "number" && typeof newIndex === "number") {
        if (dragIndex === newIndex) {
          return;
        }
        if (dropSensitivity === DROP_SENSITIVITY.REGULAR) {
          if (dragIndex < newIndex && hoverClientY < hoverMiddleY) {
            return;
          }
          if (dragIndex > newIndex && hoverClientY > hoverMiddleY) {
            return;
          }
        }
        onMoveItem(newIndex, dragIndex);
        item2.index = newIndex;
      } else {
        if (Array.isArray(dragIndex) && Array.isArray(newIndex)) {
          if (dropSensitivity === DROP_SENSITIVITY.REGULAR) {
            const minLength = Math.min(dragIndex.length, newIndex.length);
            let areEqual = true;
            let isLessThan = false;
            let isGreaterThan = false;
            for (let i = 0; i < minLength; i++) {
              if (dragIndex[i] < newIndex[i]) {
                isLessThan = true;
                areEqual = false;
                break;
              } else if (dragIndex[i] > newIndex[i]) {
                isGreaterThan = true;
                areEqual = false;
                break;
              }
            }
            if (areEqual && dragIndex.length === newIndex.length) {
              return;
            }
            if (isLessThan && !isGreaterThan && hoverClientY < hoverMiddleY) {
              return;
            }
            if (isGreaterThan && !isLessThan && hoverClientY > hoverMiddleY) {
              return;
            }
          }
        }
        onMoveItem(newIndex, dragIndex);
        item2.index = newIndex;
      }
    }
  });
  const getDragDirection = (monitor) => {
    if (monitor && monitor.isDragging() && !monitor.didDrop() && monitor.getInitialClientOffset() && monitor.getClientOffset()) {
      const deltaY = monitor.getInitialClientOffset().y - monitor.getClientOffset().y;
      if (deltaY > 0)
        return DIRECTIONS.UPWARD;
      if (deltaY < 0)
        return DIRECTIONS.DOWNWARD;
      return null;
    }
    return null;
  };
  const [{ isDragging, direction }, dragRef, dragPreviewRef] = reactDnd.useDrag({
    type,
    item() {
      if (onStart) {
        onStart();
      }
      const { width } = objectRef.current?.getBoundingClientRect() ?? {};
      return { index, width, ...item };
    },
    end() {
      if (onEnd) {
        onEnd();
      }
    },
    canDrag: active,
    /**
     * This is useful when the item is in a virtualized list.
     * However, if we don't have an ID then we want the libraries
     * defaults to take care of this.
     */
    isDragging: item?.id ? (monitor) => {
      return item.id === monitor.getItem().id;
    } : void 0,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      initialOffset: monitor.getInitialClientOffset(),
      currentOffset: monitor.getClientOffset(),
      direction: getDragDirection(monitor)
    })
  });
  const handleKeyDown = useKeyboardDragAndDrop(active, index, {
    onGrabItem,
    onDropItem,
    onCancel,
    onMoveItem
  });
  return [
    { handlerId, isDragging, handleKeyDown, isOverDropTarget: isOver, direction },
    objectRef,
    dropRef,
    dragRef,
    dragPreviewRef
  ];
};
const usePrev = (value) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
const ItemTypes = {
  COMPONENT: "component",
  EDIT_FIELD: "editField",
  FIELD: "field",
  DYNAMIC_ZONE: "dynamicZone",
  RELATION: "relation",
  BLOCKS: "blocks"
};
const setRef = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
};
const composeRefs = (...refs) => {
  return (node) => refs.forEach((ref) => setRef(ref, node));
};
const RELATION_ITEM_HEIGHT = 50;
const RELATION_GUTTER = 4;
const RelationInput = ({
  canReorder,
  description,
  disabled,
  error,
  iconButtonAriaLabel,
  id,
  name: name2,
  numberOfRelationsToDisplay,
  label,
  labelAction,
  labelLoadMore,
  labelDisconnectRelation,
  listAriaDescription,
  liveText,
  loadingMessage,
  onCancel,
  onDropItem,
  onGrabItem,
  noRelationsMessage,
  onRelationConnect,
  onRelationLoadMore,
  onRelationDisconnect,
  onRelationReorder,
  onSearchNextPage,
  onSearch,
  placeholder,
  publicationStateTranslations,
  required,
  relations: paginatedRelations,
  searchResults,
  size
}) => {
  const [textValue, setTextValue] = React__namespace.useState("");
  const [overflow, setOverflow] = React__namespace.useState();
  const listRef = React__namespace.useRef(null);
  const outerListRef = React__namespace.useRef(null);
  const fieldRef = helperPlugin.useFocusInputField(name2);
  const { data } = searchResults;
  const relations = paginatedRelations.data;
  const totalNumberOfRelations = relations.length ?? 0;
  const dynamicListHeight = React__namespace.useMemo(
    () => totalNumberOfRelations > numberOfRelationsToDisplay ? Math.min(totalNumberOfRelations, numberOfRelationsToDisplay) * (RELATION_ITEM_HEIGHT + RELATION_GUTTER) + RELATION_ITEM_HEIGHT / 2 : Math.min(totalNumberOfRelations, numberOfRelationsToDisplay) * (RELATION_ITEM_HEIGHT + RELATION_GUTTER),
    [totalNumberOfRelations, numberOfRelationsToDisplay]
  );
  const shouldDisplayLoadMoreButton = !!labelLoadMore && paginatedRelations.hasNextPage;
  const options2 = React__namespace.useMemo(
    () => data.flat().filter(Boolean).map((result) => ({
      ...result,
      value: result.id,
      label: result.mainField
    })),
    [data]
  );
  React__namespace.useEffect(() => {
    if (totalNumberOfRelations <= numberOfRelationsToDisplay) {
      return setOverflow(void 0);
    }
    const handleNativeScroll = (e) => {
      const el = e.target;
      const parentScrollContainerHeight = el.parentNode.scrollHeight;
      const maxScrollBottom = el.scrollHeight - el.scrollTop;
      if (el.scrollTop === 0) {
        return setOverflow("bottom");
      }
      if (maxScrollBottom === parentScrollContainerHeight) {
        return setOverflow("top");
      }
      return setOverflow("top-bottom");
    };
    const outerListRefCurrent = outerListRef?.current;
    if (!paginatedRelations.isLoading && relations.length > 0 && outerListRefCurrent) {
      outerListRef.current.addEventListener("scroll", handleNativeScroll);
    }
    return () => {
      if (outerListRefCurrent) {
        outerListRefCurrent.removeEventListener("scroll", handleNativeScroll);
      }
    };
  }, [paginatedRelations, relations, numberOfRelationsToDisplay, totalNumberOfRelations]);
  const handleMenuOpen = (isOpen) => {
    if (isOpen) {
      onSearch(textValue);
    }
  };
  const handleUpdatePositionOfRelation = (newIndex, currentIndex) => {
    if (onRelationReorder && newIndex >= 0 && newIndex < relations.length) {
      onRelationReorder(currentIndex, newIndex);
    }
  };
  const previewRelationsLength = usePrev(relations.length);
  const updatedRelationsWith = React__namespace.useRef();
  const handleLoadMore = () => {
    updatedRelationsWith.current = "loadMore";
    onRelationLoadMore();
  };
  React__namespace.useEffect(() => {
    if (updatedRelationsWith.current === "onChange") {
      setTextValue("");
    }
    if (updatedRelationsWith.current === "onChange" && relations.length !== previewRelationsLength) {
      listRef.current?.scrollToItem(relations.length, "end");
      updatedRelationsWith.current = void 0;
    } else if (updatedRelationsWith.current === "loadMore" && relations.length !== previewRelationsLength) {
      listRef.current?.scrollToItem(0, "start");
      updatedRelationsWith.current = void 0;
    }
  }, [previewRelationsLength, relations]);
  const ariaDescriptionId = `${name2}-item-instructions`;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    designSystem.Flex,
    {
      direction: "column",
      gap: 3,
      justifyContent: "space-between",
      alignItems: "stretch",
      wrap: "wrap",
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "row", alignItems: "end", justifyContent: "end", gap: 2, width: "100%", children: [
          /* @__PURE__ */ jsxRuntime.jsx(ComboboxWrapper, { marginRight: "auto", maxWidth: size <= 6 ? "100%" : "70%", width: "100%", children: /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.Combobox,
            {
              ref: fieldRef,
              autocomplete: "none",
              error,
              name: name2,
              hint: description,
              id,
              required,
              label,
              labelAction,
              disabled,
              placeholder,
              hasMoreItems: searchResults.hasNextPage,
              loading: searchResults.isLoading,
              onOpenChange: handleMenuOpen,
              noOptionsMessage: () => noRelationsMessage,
              loadingMessage,
              onLoadMore: () => {
                onSearchNextPage();
              },
              textValue,
              onChange: (relationId) => {
                if (!relationId) {
                  return;
                }
                onRelationConnect(data.flat().find((opt) => opt.id.toString() === relationId));
                updatedRelationsWith.current = "onChange";
              },
              onTextValueChange: (text) => {
                setTextValue(text);
              },
              onInputChange: (event) => {
                onSearch(event.currentTarget.value);
              },
              children: options2.map((opt) => {
                return /* @__PURE__ */ jsxRuntime.jsx(Option, { ...opt }, opt.id);
              })
            }
          ) }),
          shouldDisplayLoadMoreButton && /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.TextButton,
            {
              disabled: paginatedRelations.isLoading || paginatedRelations.isFetchingNextPage,
              onClick: handleLoadMore,
              loading: paginatedRelations.isLoading || paginatedRelations.isFetchingNextPage,
              startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Refresh, {}),
              shrink: 0,
              children: labelLoadMore
            }
          )
        ] }),
        relations.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs(ShadowBox, { overflowDirection: overflow, children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.VisuallyHidden, { id: ariaDescriptionId, children: listAriaDescription }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.VisuallyHidden, { "aria-live": "assertive", children: liveText }),
          /* @__PURE__ */ jsxRuntime.jsx(
            reactWindow.FixedSizeList,
            {
              height: dynamicListHeight,
              ref: listRef,
              outerRef: outerListRef,
              itemCount: totalNumberOfRelations,
              itemSize: RELATION_ITEM_HEIGHT + RELATION_GUTTER,
              itemData: {
                name: name2,
                ariaDescribedBy: ariaDescriptionId,
                canDrag: canReorder,
                disabled,
                handleCancel: onCancel,
                handleDropItem: onDropItem,
                handleGrabItem: onGrabItem,
                iconButtonAriaLabel,
                labelDisconnectRelation,
                onRelationDisconnect,
                publicationStateTranslations,
                relations,
                updatePositionOfRelation: handleUpdatePositionOfRelation
              },
              itemKey: (index) => `${relations[index].mainField}_${relations[index].id}`,
              innerElementType: "ol",
              children: ListItem
            }
          )
        ] })
      ]
    }
  );
};
const ComboboxWrapper = styled__default.default(designSystem.Box)`
  align-self: flex-start;
`;
const ShadowBox = styled__default.default(designSystem.Box)`
  position: relative;
  overflow: hidden;
  flex: 1;

  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 4px;
    z-index: 1;
  }

  &:before {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    top: 0;
    opacity: ${({ overflowDirection }) => overflowDirection === "top-bottom" || overflowDirection === "top" ? 1 : 0};
    transition: opacity 0.2s ease-in-out;
  }

  &:after {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(0deg, rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    bottom: 0;
    opacity: ${({ overflowDirection }) => overflowDirection === "top-bottom" || overflowDirection === "bottom" ? 1 : 0};
    transition: opacity 0.2s ease-in-out;
  }
`;
const Option = ({
  publicationState,
  mainField,
  id
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const stringifiedDisplayValue = (mainField ?? id).toString();
  if (publicationState) {
    const isDraft = publicationState === "draft";
    const draftMessage = {
      id: getTranslation("components.Select.draft-info-title"),
      defaultMessage: "State: Draft"
    };
    const publishedMessage = {
      id: getTranslation("components.Select.publish-info-title"),
      defaultMessage: "State: Published"
    };
    const title = isDraft ? formatMessage(draftMessage) : formatMessage(publishedMessage);
    return /* @__PURE__ */ jsxRuntime.jsx(designSystem.ComboboxOption, { value: id.toString(), textValue: stringifiedDisplayValue, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(StyledBullet, { title, isDraft }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { ellipsis: true, children: stringifiedDisplayValue })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.ComboboxOption, { value: id.toString(), textValue: stringifiedDisplayValue, children: stringifiedDisplayValue });
};
const StyledBullet = styled__default.default.div`
  flex-shrink: 0;
  width: ${helperPlugin.pxToRem(6)};
  height: ${helperPlugin.pxToRem(6)};
  margin-right: ${({ theme }) => theme.spaces[2]};
  background-color: ${({ theme, isDraft }) => theme.colors[isDraft ? "secondary600" : "success600"]};
  border-radius: 50%;
`;
const ListItem = ({ data, index, style }) => {
  const {
    ariaDescribedBy,
    canDrag,
    disabled,
    handleCancel,
    handleDropItem,
    handleGrabItem,
    iconButtonAriaLabel,
    name: name2,
    labelDisconnectRelation,
    onRelationDisconnect,
    publicationStateTranslations,
    relations,
    updatePositionOfRelation
  } = data;
  const { publicationState, href, mainField, id } = relations[index];
  const statusColor = publicationState === "draft" ? "secondary" : "success";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    RelationItem,
    {
      ariaDescribedBy,
      canDrag,
      disabled,
      displayValue: String(mainField ?? id),
      iconButtonAriaLabel,
      id,
      index,
      name: name2,
      endAction: /* @__PURE__ */ jsxRuntime.jsx(
        DisconnectButton,
        {
          "data-testid": `remove-relation-${id}`,
          disabled,
          type: "button",
          onClick: () => onRelationDisconnect(relations[index]),
          "aria-label": labelDisconnectRelation,
          children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Icon, { width: "12px", as: Icons.Cross })
        }
      ),
      onCancel: handleCancel,
      onDropItem: handleDropItem,
      onGrabItem: handleGrabItem,
      status: publicationState || void 0,
      style: {
        ...style,
        bottom: style.bottom ?? 0 + RELATION_GUTTER,
        height: style.height ?? 0 - RELATION_GUTTER
      },
      updatePositionOfRelation,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { minWidth: 0, paddingTop: 1, paddingBottom: 1, paddingRight: 4, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tooltip, { description: mainField ?? `${id}`, children: href ? /* @__PURE__ */ jsxRuntime.jsx(LinkEllipsis, { to: href, children: mainField ?? id }) : /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: disabled ? "neutral600" : "primary600", ellipsis: true, children: mainField ?? id }) }) }),
        publicationState && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Status, { variant: statusColor, showBullet: false, size: "S", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", textColor: `${statusColor}700`, children: publicationStateTranslations[publicationState] }) })
      ]
    }
  );
};
const DisconnectButton = styled__default.default.button`
  svg path {
    fill: ${({ theme, disabled }) => disabled ? theme.colors.neutral600 : theme.colors.neutral500};
  }

  &:hover svg path,
  &:focus svg path {
    fill: ${({ theme, disabled }) => !disabled && theme.colors.neutral600};
  }
`;
const LinkEllipsis = styled__default.default(designSystem.Link)`
  display: block;

  > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`;
const RelationItem = ({
  ariaDescribedBy,
  children,
  displayValue,
  canDrag,
  disabled,
  endAction,
  iconButtonAriaLabel,
  style,
  id,
  index,
  name: name2,
  onCancel,
  onDropItem,
  onGrabItem,
  status,
  updatePositionOfRelation,
  ...props
}) => {
  const [{ handlerId, isDragging, handleKeyDown }, relationRef, dropRef, dragRef, dragPreviewRef] = useDragAndDrop(canDrag && !disabled, {
    type: `${ItemTypes.RELATION}_${name2}`,
    index,
    item: {
      displayedValue: displayValue,
      status,
      id,
      index
    },
    onMoveItem: updatePositionOfRelation,
    onDropItem,
    onGrabItem,
    onCancel,
    dropSensitivity: DROP_SENSITIVITY.IMMEDIATE
  });
  const composedRefs = composeRefs(relationRef, dragRef);
  React__namespace.useEffect(() => {
    dragPreviewRef(reactDndHtml5Backend.getEmptyImage());
  }, [dragPreviewRef]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.Box,
    {
      style,
      as: "li",
      ref: dropRef,
      "aria-describedby": ariaDescribedBy,
      cursor: canDrag ? "all-scroll" : "default",
      children: isDragging ? /* @__PURE__ */ jsxRuntime.jsx(RelationItemPlaceholder, {}) : /* @__PURE__ */ jsxRuntime.jsxs(
        designSystem.Flex,
        {
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: canDrag ? 2 : 4,
          paddingRight: 4,
          hasRadius: true,
          borderColor: "neutral200",
          background: disabled ? "neutral150" : "neutral0",
          justifyContent: "space-between",
          ref: canDrag ? composedRefs : void 0,
          "data-handler-id": handlerId,
          ...props,
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs(FlexWrapper, { gap: 1, children: [
              canDrag ? /* @__PURE__ */ jsxRuntime.jsx(
                designSystem.IconButton,
                {
                  forwardedAs: "div",
                  role: "button",
                  tabIndex: 0,
                  "aria-label": iconButtonAriaLabel,
                  borderWidth: 0,
                  onKeyDown: handleKeyDown,
                  disabled,
                  children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Drag, {})
                }
              ) : null,
              /* @__PURE__ */ jsxRuntime.jsx(ChildrenWrapper, { justifyContent: "space-between", children })
            ] }),
            endAction && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingLeft: 4, children: endAction })
          ]
        }
      )
    }
  );
};
const RelationItemPlaceholder = () => /* @__PURE__ */ jsxRuntime.jsx(
  designSystem.Box,
  {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    hasRadius: true,
    borderStyle: "dashed",
    borderColor: "primary600",
    borderWidth: "1px",
    background: "primary100",
    height: `calc(100% - ${RELATION_GUTTER}px)`
  }
);
const FlexWrapper = styled__default.default(designSystem.Flex)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;

  & > div[role='button'] {
    cursor: all-scroll;
  }
`;
const ChildrenWrapper = styled__default.default(designSystem.Flex)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;
`;
const getInitialDataPathUsingTempKeys = (initialData, modifiedData) => (currentPath) => {
  const splitPath = currentPath.split(".");
  return splitPath.reduce((acc, currentValue, index) => {
    const initialDataParent = get__default.default(initialData, acc);
    const modifiedDataTempKey = get__default.default(modifiedData, [
      ...splitPath.slice(0, index),
      currentValue,
      "__temp_key__"
    ]);
    if (Array.isArray(initialDataParent) && typeof modifiedDataTempKey === "number") {
      const initialDataIndex = initialDataParent.findIndex(
        (entry) => entry.__temp_key__ === modifiedDataTempKey
      );
      acc.push(initialDataIndex.toString());
      return acc;
    }
    acc.push(currentValue);
    return acc;
  }, []);
};
function getRelationLink(targetModel, id) {
  return `/content-manager/collection-types/${targetModel}/${id ?? ""}`;
}
const normalizeRelation = (relation, { shouldAddLink, mainFieldName, targetModel }) => {
  const nextRelation = {
    ...relation,
    // @ts-expect-error – TODO: fix why this want's it to be an attribute as opposed to a string.
    mainField: relation[mainFieldName]
  };
  if (shouldAddLink) {
    nextRelation.href = getRelationLink(targetModel, nextRelation.id);
  }
  nextRelation.publicationState = false;
  if (nextRelation?.publishedAt !== void 0) {
    nextRelation.publicationState = nextRelation.publishedAt ? PUBLICATION_STATES.PUBLISHED : PUBLICATION_STATES.DRAFT;
  }
  return nextRelation;
};
const normalizeRelations = (relations, args) => {
  return [...relations].map((relation) => normalizeRelation(relation, args));
};
const useRelation = (cacheKey = [], { relation, search }) => {
  const [searchParams, setSearchParams] = React.useState({});
  const [currentPage, setCurrentPage] = React.useState(0);
  const { get: get2 } = helperPlugin.useFetchClient();
  const { onLoad: onLoadRelations, normalizeArguments } = relation;
  const relationsRes = reactQuery.useInfiniteQuery(
    ["relation", ...cacheKey],
    async ({ pageParam = 1 }) => {
      try {
        const { data: data2 } = await get2(relation?.endpoint, {
          params: {
            ...relation.pageParams ?? {},
            page: pageParam
          }
        });
        setCurrentPage(pageParam);
        return data2;
      } catch (err) {
        return null;
      }
    },
    {
      cacheTime: 0,
      enabled: relation.enabled,
      getNextPageParam(lastPage) {
        const isXToOneRelation = lastPage && !("pagination" in lastPage);
        if (!lastPage || // the API may send an empty 204 response
        isXToOneRelation || // xToOne relations do not have a pagination
        lastPage?.pagination.page >= lastPage?.pagination.pageCount) {
          return void 0;
        }
        return lastPage.pagination.page + 1;
      },
      select: (data2) => ({
        ...data2,
        pages: data2.pages.map((page) => {
          if (!page) {
            return page;
          }
          let normalizedResults = [];
          if ("data" in page && page.data) {
            normalizedResults = [page.data];
          } else if ("results" in page && page.results) {
            normalizedResults = [...page.results].reverse();
          }
          return {
            pagination: "pagination" in page ? page.pagination : void 0,
            results: normalizedResults
          };
        })
      })
    }
  );
  const { pageGoal } = relation;
  const { status, data, fetchNextPage, hasNextPage } = relationsRes;
  React.useEffect(() => {
    if (pageGoal && pageGoal > currentPage && hasNextPage && status === "success") {
      fetchNextPage({
        pageParam: currentPage + 1
      });
    }
  }, [pageGoal, currentPage, fetchNextPage, hasNextPage, status]);
  const onLoadRelationsCallback = helperPlugin.useCallbackRef(onLoadRelations);
  React.useEffect(() => {
    if (status === "success" && data && data.pages?.at(-1)?.results && onLoadRelationsCallback) {
      const normalizedResults = normalizeRelations(
        data.pages.at(-1)?.results ?? [],
        normalizeArguments
      );
      onLoadRelationsCallback(normalizedResults);
    }
  }, [status, onLoadRelationsCallback, data]);
  const searchRes = reactQuery.useInfiniteQuery(
    ["relation", ...cacheKey, "search", JSON.stringify(searchParams)],
    async ({ pageParam = 1 }) => {
      try {
        const { data: data2 } = await get2(search.endpoint, {
          params: {
            ...search.pageParams ?? {},
            ...searchParams,
            page: pageParam
          }
        });
        return data2;
      } catch (err) {
        return null;
      }
    },
    {
      enabled: Object.keys(searchParams).length > 0,
      getNextPageParam(lastPage) {
        if (!lastPage?.pagination || lastPage.pagination && lastPage.pagination.page >= lastPage.pagination.pageCount) {
          return void 0;
        }
        return lastPage.pagination.page + 1;
      }
    }
  );
  const searchFor = (term, options2 = {}) => {
    setSearchParams({
      ...options2,
      _q: term,
      _filter: "$containsi"
    });
  };
  return { relations: relationsRes, search: searchRes, searchFor };
};
const diffRelations = (browserStateRelations = [], serverStateRelations = []) => {
  const connected = browserStateRelations.reduce((acc, relation) => {
    if (!serverStateRelations.find((oldRelation) => oldRelation.id === relation.id)) {
      return [...acc, relation.id];
    }
    return acc;
  }, []);
  const disconnected = serverStateRelations.reduce((acc, relation) => {
    if (!browserStateRelations.find((oldRelation) => oldRelation.id === relation.id)) {
      return [...acc, relation.id];
    }
    return acc;
  }, []);
  return [connected, disconnected];
};
const normalizeSearchResults = (relations, { mainFieldName }) => {
  const { data } = relations;
  const { pages = [] } = data ?? {};
  return {
    ...relations,
    data: pages.map(
      (page) => (page?.results ?? []).map(
        (relation) => normalizeRelation(relation, { mainFieldName, shouldAddLink: false, targetModel: "" })
      )
    ).filter(Boolean).flat()
  };
};
const PUBLICATION_STATES = {
  DRAFT: "draft",
  PUBLISHED: "published"
};
const RELATIONS_TO_DISPLAY = 5;
const SEARCH_RESULTS_TO_DISPLAY = 10;
const RelationInputDataManager = ({
  componentUid,
  name: name2,
  error,
  editable,
  description,
  intlLabel,
  isUserAllowedToEditField,
  isUserAllowedToReadField,
  labelAction,
  mainField,
  placeholder,
  queryInfos: { defaultParams, shouldDisplayRelationLink: shouldDisplayRelationLink2 = false },
  required,
  relationType,
  size,
  targetModel
}) => {
  const {
    isCreatingEntry,
    createActionAllowedFields,
    readActionAllowedFields,
    updateActionAllowedFields,
    slug,
    modifiedData,
    initialData,
    relationConnect,
    relationDisconnect,
    relationLoad,
    relationReorder
  } = helperPlugin.useCMEditViewDataManager();
  const { params } = reactRouterDom.useRouteMatch(
    "/content-manager/collection-types/:collectionType/create/clone/:origin"
  ) ?? {};
  const { origin } = params ?? {};
  const isCloningEntry = Boolean(origin);
  const isComponentRelation = Boolean(componentUid);
  const isFieldAllowed = React__namespace.useMemo(() => {
    if (isUserAllowedToEditField === true) {
      return true;
    }
    const allowedFields = isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields;
    return allowedFields.includes(name2);
  }, [
    isCreatingEntry,
    createActionAllowedFields,
    name2,
    isUserAllowedToEditField,
    updateActionAllowedFields
  ]);
  const isFieldReadable = React__namespace.useMemo(() => {
    if (isUserAllowedToReadField) {
      return true;
    }
    const allowedFields = isCreatingEntry ? [] : readActionAllowedFields;
    return allowedFields.includes(name2);
  }, [isCreatingEntry, isUserAllowedToReadField, name2, readActionAllowedFields]);
  const fieldNameKeys = name2.split(".");
  const componentId = componentUid ? get__default.default(modifiedData, fieldNameKeys.slice(0, -1))?.id : void 0;
  const entityId = origin || modifiedData.id;
  const relationFetchEndpoint = React__namespace.useMemo(() => {
    if (isCreatingEntry && !origin) {
      return null;
    }
    if (componentUid) {
      return componentId ? `/content-manager/relations/${componentUid}/${componentId}/${fieldNameKeys.at(-1)}` : null;
    }
    return `/content-manager/relations/${slug}/${entityId}/${name2.split(".").at(-1)}`;
  }, [isCreatingEntry, origin, componentUid, slug, entityId, name2, componentId, fieldNameKeys]);
  const relationSearchEndpoint = React__namespace.useMemo(() => {
    if (componentUid) {
      return `/content-manager/relations/${componentUid}/${name2.split(".").at(-1)}`;
    }
    return `/content-manager/relations/${slug}/${name2.split(".").at(-1)}`;
  }, [componentUid, slug, name2]);
  const [liveText, setLiveText] = React__namespace.useState("");
  const { formatMessage } = reactIntl.useIntl();
  const nameSplit = name2.split(".");
  const initialDataPath = getInitialDataPathUsingTempKeys(initialData, modifiedData)(name2);
  const relationsFromModifiedData = get__default.default(modifiedData, name2, []);
  const currentLastPage = Math.ceil(get__default.default(initialData, name2, []).length / RELATIONS_TO_DISPLAY);
  const { relations, search, searchFor } = useRelation(
    [slug, initialDataPath.join("."), modifiedData.id, defaultParams],
    {
      relation: {
        enabled: !!relationFetchEndpoint,
        endpoint: relationFetchEndpoint,
        pageGoal: currentLastPage,
        pageParams: {
          ...defaultParams,
          pageSize: RELATIONS_TO_DISPLAY
        },
        onLoad(value) {
          relationLoad?.({
            target: {
              initialDataPath: ["initialData", ...initialDataPath],
              modifiedDataPath: ["modifiedData", ...nameSplit],
              value
            }
          });
        },
        normalizeArguments: {
          mainFieldName: mainField.name,
          shouldAddLink: shouldDisplayRelationLink2,
          targetModel
        }
      },
      search: {
        endpoint: relationSearchEndpoint,
        pageParams: {
          ...defaultParams,
          // eslint-disable-next-line no-nested-ternary
          entityId: isCreatingEntry || isCloningEntry ? void 0 : isComponentRelation ? componentId : entityId,
          pageSize: SEARCH_RESULTS_TO_DISPLAY
        }
      }
    }
  );
  const isMorph = relationType.toLowerCase().includes("morph");
  const toOneRelation = [
    "oneWay",
    "oneToOne",
    "manyToOne",
    "oneToManyMorph",
    "oneToOneMorph"
  ].includes(relationType);
  const isDisabled = React__namespace.useMemo(() => {
    if (isMorph) {
      return true;
    }
    if (!isCreatingEntry) {
      return !isFieldAllowed && isFieldReadable || !editable;
    }
    return !editable;
  }, [isMorph, isCreatingEntry, editable, isFieldAllowed, isFieldReadable]);
  const handleRelationConnect = (relation) => {
    const normalizedRelation = normalizeRelation(relation, {
      mainFieldName: mainField.name,
      shouldAddLink: shouldDisplayRelationLink2,
      targetModel
    });
    relationConnect?.({ name: name2, value: normalizedRelation, toOneRelation });
  };
  const handleRelationDisconnect = (relation) => {
    relationDisconnect?.({ name: name2, id: relation.id });
  };
  const handleRelationLoadMore = () => {
    relations.fetchNextPage();
  };
  const handleSearch = (term = "") => {
    const [connected, disconnected] = diffRelations(
      relationsFromModifiedData,
      get__default.default(initialData, name2)
    );
    searchFor(term, {
      idsToInclude: disconnected,
      idsToOmit: connected
    });
  };
  const handleSearchMore = () => {
    search.fetchNextPage();
  };
  const getItemPos = (index) => `${index + 1} of ${relationsFromModifiedData.length}`;
  const handleRelationReorder = (oldIndex, newIndex) => {
    const item = relationsFromModifiedData[oldIndex];
    setLiveText(
      formatMessage(
        {
          id: getTranslation("dnd.reorder"),
          defaultMessage: "{item}, moved. New position in list: {position}."
        },
        {
          item: item.mainField ?? item.id,
          position: getItemPos(newIndex)
        }
      )
    );
    relationReorder?.({
      name: name2,
      newIndex,
      oldIndex
    });
  };
  const handleGrabItem = (index) => {
    const item = relationsFromModifiedData[index];
    setLiveText(
      formatMessage(
        {
          id: getTranslation("dnd.grab-item"),
          defaultMessage: `{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel.`
        },
        {
          item: item.mainField ?? item.id,
          position: getItemPos(index)
        }
      )
    );
  };
  const handleDropItem = (index) => {
    const item = relationsFromModifiedData[index];
    setLiveText(
      formatMessage(
        {
          id: getTranslation("dnd.drop-item"),
          defaultMessage: `{item}, dropped. Final position in list: {position}.`
        },
        {
          item: item.mainField ?? item.id,
          position: getItemPos(index)
        }
      )
    );
  };
  const handleCancel = (index) => {
    const item = relationsFromModifiedData[index];
    setLiveText(
      formatMessage(
        {
          id: getTranslation("dnd.cancel-item"),
          defaultMessage: "{item}, dropped. Re-order cancelled."
        },
        {
          item: item.mainField ?? item.id
        }
      )
    );
  };
  if (!isFieldAllowed && isCreatingEntry || !isCreatingEntry && !isFieldAllowed && !isFieldReadable) {
    return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.NotAllowedInput, { name: name2, intlLabel, labelAction });
  }
  const browserRelationsCount = relationsFromModifiedData.length;
  const serverRelationsCount = (get__default.default(initialData, initialDataPath) ?? []).length;
  const realServerRelationsCount = relations.data?.pages[0]?.pagination?.total ?? 0;
  const totalRelations = !relations.data && browserRelationsCount === serverRelationsCount ? browserRelationsCount : browserRelationsCount - serverRelationsCount + realServerRelationsCount;
  return /* @__PURE__ */ jsxRuntime.jsx(
    RelationInput,
    {
      error,
      canReorder: !toOneRelation,
      description,
      disabled: isDisabled,
      iconButtonAriaLabel: formatMessage({
        id: getTranslation("components.RelationInput.icon-button-aria-label"),
        defaultMessage: "Drag"
      }),
      id: name2,
      label: `${formatMessage({
        id: intlLabel.id,
        defaultMessage: intlLabel.defaultMessage
      })} ${totalRelations > 0 ? `(${totalRelations})` : ""}`,
      labelAction,
      labelLoadMore: !isCreatingEntry || isCloningEntry ? formatMessage({
        id: getTranslation("relation.loadMore"),
        defaultMessage: "Load More"
      }) : void 0,
      labelDisconnectRelation: formatMessage({
        id: getTranslation("relation.disconnect"),
        defaultMessage: "Remove"
      }),
      listAriaDescription: formatMessage({
        id: getTranslation("dnd.instructions"),
        defaultMessage: `Press spacebar to grab and re-order`
      }),
      liveText,
      loadingMessage: formatMessage({
        id: getTranslation("relation.isLoading"),
        defaultMessage: "Relations are loading"
      }),
      name: name2,
      noRelationsMessage: formatMessage({
        id: getTranslation("relation.notAvailable"),
        defaultMessage: "No relations available"
      }),
      numberOfRelationsToDisplay: RELATIONS_TO_DISPLAY,
      onDropItem: handleDropItem,
      onGrabItem: handleGrabItem,
      onCancel: handleCancel,
      onRelationConnect: handleRelationConnect,
      onRelationDisconnect: handleRelationDisconnect,
      onRelationLoadMore: handleRelationLoadMore,
      onRelationReorder: handleRelationReorder,
      onSearch: (term) => handleSearch(term),
      onSearchNextPage: () => handleSearchMore(),
      placeholder: formatMessage(
        placeholder || {
          id: getTranslation("relation.add"),
          defaultMessage: "Add relation"
        }
      ),
      publicationStateTranslations: {
        [PUBLICATION_STATES.DRAFT]: formatMessage({
          id: getTranslation("relation.publicationState.draft"),
          defaultMessage: "Draft"
        }),
        [PUBLICATION_STATES.PUBLISHED]: formatMessage({
          id: getTranslation("relation.publicationState.published"),
          defaultMessage: "Published"
        })
      },
      relations: pick__default.default(
        { ...relations, data: relationsFromModifiedData },
        "data",
        "hasNextPage",
        "isFetchingNextPage",
        "isLoading",
        "isSuccess"
      ),
      required,
      searchResults: normalizeSearchResults(search, {
        mainFieldName: mainField.name
      }),
      size
    }
  );
};
const RelationDragPreview = ({ status, displayedValue, width }) => {
  const { formatMessage } = reactIntl.useIntl();
  const stateMessage = {
    [PUBLICATION_STATES.DRAFT]: formatMessage({
      id: getTranslation("relation.publicationState.draft"),
      defaultMessage: "Draft"
    }),
    [PUBLICATION_STATES.PUBLISHED]: formatMessage({
      id: getTranslation("relation.publicationState.published"),
      defaultMessage: "Published"
    })
  };
  const statusColor = status === PUBLICATION_STATES.DRAFT ? "secondary" : "success";
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { style: { width }, children: /* @__PURE__ */ jsxRuntime.jsxs(
    designSystem.Flex,
    {
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 2,
      paddingRight: 4,
      hasRadius: true,
      borderWidth: 1,
      background: "neutral0",
      borderColor: "neutral200",
      justifyContent: "space-between",
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(FlexWrapper, { gap: 1, children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.IconButton, { "aria-label": "", borderWidth: 0, children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Drag, {}) }),
          /* @__PURE__ */ jsxRuntime.jsxs(ChildrenWrapper, { maxWidth: "100%", justifyContent: "space-between", children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { minWidth: 0, paddingTop: 1, paddingBottom: 1, paddingRight: 4, children: /* @__PURE__ */ jsxRuntime.jsx(LinkEllipsis, { href: "", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "primary600", ellipsis: true, children: displayedValue }) }) }),
            status && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Status, { variant: statusColor, showBullet: false, size: "S", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", textColor: `${statusColor}700`, children: stateMessage[status] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingLeft: 4, children: /* @__PURE__ */ jsxRuntime.jsx(DisconnectButton, { type: "button", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Icon, { width: "12px", as: Icons.Cross }) }) })
      ]
    }
  ) });
};
const LeftMenu = () => {
  const [search, setSearch] = React__namespace.useState("");
  const { formatMessage, locale } = reactIntl.useIntl();
  const collectionTypeLinks = useTypedSelector(
    (state) => state["content-manager_app"].collectionTypeLinks
  );
  const singleTypeLinks = useTypedSelector((state) => state["content-manager_app"].singleTypeLinks);
  const { includes } = helperPlugin.useFilter(locale, {
    sensitivity: "base"
  });
  const formatter = helperPlugin.useCollator(locale, {
    sensitivity: "base"
  });
  const menu = React__namespace.useMemo(
    () => [
      {
        id: "collectionTypes",
        title: formatMessage({
          id: getTranslation("components.LeftMenu.collection-types"),
          defaultMessage: "Collection Types"
        }),
        searchable: true,
        links: collectionTypeLinks
      },
      {
        id: "singleTypes",
        title: formatMessage({
          id: getTranslation("components.LeftMenu.single-types"),
          defaultMessage: "Single Types"
        }),
        searchable: true,
        links: singleTypeLinks
      }
    ].map((section) => ({
      ...section,
      links: section.links.filter((link) => includes(link.title, search)).sort((a, b) => formatter.compare(a.title, b.title)).map((link) => {
        return {
          ...link,
          title: formatMessage({ id: link.title, defaultMessage: link.title })
        };
      })
    })),
    [collectionTypeLinks, search, singleTypeLinks, includes, formatMessage, formatter]
  );
  const handleClear = () => {
    setSearch("");
  };
  const handleChangeSearch = ({ target: { value } }) => {
    setSearch(value);
  };
  const label = formatMessage({
    id: getTranslation("header.name"),
    defaultMessage: "Content"
  });
  return /* @__PURE__ */ jsxRuntime.jsxs(v2.SubNav, { ariaLabel: label, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      v2.SubNavHeader,
      {
        label,
        searchable: true,
        value: search,
        onChange: handleChangeSearch,
        onClear: handleClear,
        searchLabel: formatMessage({
          id: "content-manager.components.LeftMenu.Search.label",
          defaultMessage: "Search for a content type"
        })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(v2.SubNavSections, { children: menu.map((section) => {
      return /* @__PURE__ */ jsxRuntime.jsx(
        v2.SubNavSection,
        {
          label: section.title,
          badgeLabel: section.links.length.toString(),
          children: section.links.map((link) => {
            const search2 = link.search ? `?${link.search}` : "";
            return (
              // @ts-expect-error – DS inference does not work with the `as` prop.
              /* @__PURE__ */ jsxRuntime.jsx(v2.SubNavLink, { as: reactRouterDom.NavLink, to: `${link.to}${search2}`, children: link.title }, link.uid)
            );
          })
        },
        section.id
      );
    }) })
  ] });
};
const ModelsContext = React__namespace.createContext({
  refetchData: () => Promise.resolve()
});
const { MUTATE_COLLECTION_TYPES_LINKS: MUTATE_COLLECTION_TYPES_LINKS$1, MUTATE_SINGLE_TYPES_LINKS: MUTATE_SINGLE_TYPES_LINKS$1 } = HOOKS;
const useContentManagerInitData = () => {
  const dispatch = useTypedDispatch();
  const toggleNotification = helperPlugin.useNotification();
  const state = useTypedSelector((state2) => state2["content-manager_app"]);
  const { allPermissions } = helperPlugin.useRBACProvider();
  const { runHookWaterfall } = helperPlugin.useStrapiApp();
  const { notifyStatus } = designSystem.useNotifyAT();
  const { formatMessage } = reactIntl.useIntl();
  const { get: get2 } = helperPlugin.useFetchClient();
  const fetchDataRef = React.useRef(async () => {
    dispatch({
      type: "ContentManager/App/GET_INIT_DATA"
    });
    try {
      const {
        data: {
          data: { components, contentTypes: models, fieldSizes }
        }
      } = await get2("/content-manager/init");
      notifyStatus(
        formatMessage({
          id: getTranslation("App.schemas.data-loaded"),
          defaultMessage: "The schemas have been successfully loaded."
        })
      );
      const {
        data: { data: contentTypeConfigurations }
      } = await get2(
        "/content-manager/content-types-settings"
      );
      const { collectionType: collectionTypeLinks, singleType: singleTypeLinks } = models.reduce(
        (acc, model) => {
          acc[model.kind].push(model);
          return acc;
        },
        {
          collectionType: [],
          singleType: []
        }
      );
      const collectionTypeSectionLinks = generateLinks(
        collectionTypeLinks,
        "collectionTypes",
        contentTypeConfigurations
      );
      const singleTypeSectionLinks = generateLinks(singleTypeLinks, "singleTypes");
      const collectionTypeLinksPermissions = await Promise.all(
        collectionTypeSectionLinks.map(
          ({ permissions: permissions2 }) => helperPlugin.hasPermissions(allPermissions, permissions2)
        )
      );
      const authorizedCollectionTypeLinks = collectionTypeSectionLinks.filter(
        (_, index) => collectionTypeLinksPermissions[index]
      );
      const singleTypeLinksPermissions = await Promise.all(
        singleTypeSectionLinks.map(({ permissions: permissions2 }) => helperPlugin.hasPermissions(allPermissions, permissions2))
      );
      const authorizedSingleTypeLinks = singleTypeSectionLinks.filter(
        (_, index) => singleTypeLinksPermissions[index]
      );
      const { ctLinks } = runHookWaterfall(MUTATE_COLLECTION_TYPES_LINKS$1, {
        ctLinks: authorizedCollectionTypeLinks,
        models
      });
      const { stLinks } = runHookWaterfall(MUTATE_SINGLE_TYPES_LINKS$1, {
        stLinks: authorizedSingleTypeLinks,
        models
      });
      dispatch({
        type: "ContentManager/App/SET_INIT_DATA",
        data: {
          authorizedCollectionTypeLinks: ctLinks,
          authorizedSingleTypeLinks: stLinks,
          contentTypeSchemas: models,
          components,
          fieldSizes
        }
      });
    } catch (err) {
      console.error(err);
      toggleNotification({ type: "warning", message: { id: "notification.error" } });
    }
  });
  React.useEffect(() => {
    fetchDataRef.current();
    return () => {
      dispatch({
        type: "ContentManager/App/RESET_INIT_DATA"
      });
    };
  }, [dispatch, toggleNotification]);
  return { ...state, refetchData: fetchDataRef.current };
};
const generateLinks = (links, type, configurations = []) => {
  return links.filter((link) => link.isDisplayed).map((link) => {
    const collectionTypesPermissions = [
      { action: "plugin::content-manager.explorer.create", subject: link.uid },
      { action: "plugin::content-manager.explorer.read", subject: link.uid }
    ];
    const singleTypesPermissions = [
      { action: "plugin::content-manager.explorer.read", subject: link.uid }
    ];
    const permissions2 = type === "collectionTypes" ? collectionTypesPermissions : singleTypesPermissions;
    const currentContentTypeConfig = configurations.find(({ uid }) => uid === link.uid);
    let search = null;
    if (currentContentTypeConfig) {
      const searchParams = {
        page: 1,
        pageSize: currentContentTypeConfig.settings.pageSize,
        sort: `${currentContentTypeConfig.settings.defaultSortBy}:${currentContentTypeConfig.settings.defaultSortOrder}`
      };
      search = qs.stringify(searchParams, { encode: false });
    }
    return {
      permissions: permissions2,
      search,
      kind: link.kind,
      title: link.info.displayName,
      to: `/content-manager/${link.kind === "collectionType" ? "collection-types" : "single-types"}/${link.uid}`,
      uid: link.uid,
      // Used for the list item key in the helper plugin
      name: link.uid,
      isDisplayed: link.isDisplayed
    };
  });
};
const mergeMetasWithSchema = (data, schemas, mainSchemaKey) => {
  const findSchema = (uid2) => schemas.find((obj) => obj.uid === uid2);
  const merged = Object.assign({}, data);
  const { uid } = data[mainSchemaKey];
  const schema = findSchema(uid);
  merged[mainSchemaKey] = merge__default.default({}, schema, data[mainSchemaKey]);
  Object.keys(data.components).forEach((compoUID) => {
    const compoSchema = findSchema(compoUID);
    merged.components[compoUID] = {
      ...data.components[compoUID],
      ...compoSchema
    };
  });
  return merged;
};
const getRelationModel = (targetModel, models) => models.find((model) => model.uid === targetModel);
const formatLayouts = (initialData, models) => {
  const data = createMetasSchema(initialData, models);
  const contentType = {
    ...data.contentType,
    layouts: {
      ...data.contentType.layouts,
      edit: formatLayoutWithMetas(data.contentType, models),
      list: formatListLayoutWithMetas(data.contentType, data.components)
    }
  };
  const components = Object.keys(data.components).reduce(
    (acc, componentUid) => {
      const formattedComponentEditLayout = formatLayoutWithMetas(
        data.components[componentUid],
        models
      );
      acc[componentUid] = {
        ...data.components[componentUid],
        layouts: {
          ...data.components[componentUid].layouts,
          edit: formattedComponentEditLayout
        }
      };
      return acc;
    },
    {}
  );
  return {
    contentType,
    components
  };
};
const createMetasSchema = (initialData, models) => {
  const data = mergeMetasWithSchema(cloneDeep__default.default(initialData), models, "contentType");
  const { components, contentType } = data;
  const formatMetadatas = (targetSchema) => {
    return Object.keys(targetSchema.metadatas).reduce((acc, current) => {
      const schema = targetSchema.attributes[current] ?? {};
      let metadatas = targetSchema.metadatas[current];
      if (schema.type === "relation" && "target" in schema) {
        const relationModel = getRelationModel(schema.target, models);
        const mainFieldName = metadatas.edit.mainField;
        const mainField = {
          name: mainFieldName,
          ...relationModel.attributes[mainFieldName]
        };
        metadatas = {
          list: {
            ...metadatas.list,
            mainField
          },
          edit: {
            ...metadatas.edit,
            mainField
          }
        };
      }
      acc[current] = metadatas;
      return acc;
    }, {});
  };
  data.contentType.metadatas = formatMetadatas(contentType);
  Object.keys(components).forEach((compoUID) => {
    data.components[compoUID].metadatas = formatMetadatas(components[compoUID]);
  });
  return data;
};
const formatLayoutWithMetas = (contentTypeConfiguration, models) => contentTypeConfiguration.layouts.edit.reduce((acc, current) => {
  const row = current.map((attribute) => {
    const fieldSchema = contentTypeConfiguration.attributes[attribute.name] ?? {};
    const data = {
      ...attribute,
      fieldSchema,
      metadatas: contentTypeConfiguration.metadatas[attribute.name].edit ?? {}
    };
    if (fieldSchema.type === "relation") {
      const targetModelSchema = getRelationModel(fieldSchema.target, models);
      const targetModelPluginOptions = targetModelSchema.pluginOptions || {};
      data.targetModelPluginOptions = targetModelPluginOptions;
      data.queryInfos = {
        shouldDisplayRelationLink: shouldDisplayRelationLink(
          contentTypeConfiguration,
          attribute.name,
          models
        )
      };
    }
    return data;
  });
  acc.push(row);
  return acc;
}, []);
const formatListLayoutWithMetas = (contentTypeConfiguration, components) => {
  const formatted = contentTypeConfiguration.layouts.list.reduce(
    (acc, current) => {
      const fieldSchema = contentTypeConfiguration.attributes[current] ?? {};
      const metadatas = contentTypeConfiguration.metadatas[current].list ?? {};
      if (fieldSchema.type === "component") {
        const component = components[fieldSchema.component];
        const mainFieldName = component.settings.mainField;
        const mainFieldAttribute = component.attributes[mainFieldName];
        acc.push({
          key: `__${current}_key__`,
          name: current,
          fieldSchema,
          metadatas: {
            ...metadatas,
            mainField: {
              ...mainFieldAttribute,
              name: mainFieldName
            }
          }
        });
        return acc;
      }
      acc.push({ key: `__${current}_key__`, name: current, fieldSchema, metadatas });
      return acc;
    },
    []
  );
  return formatted;
};
const shouldDisplayRelationLink = (contentTypeConfiguration, fieldName, models) => {
  const targetModel = contentTypeConfiguration.attributes[fieldName].targetModel ?? "";
  return models.some((model) => model.uid === targetModel && model.isDisplayed);
};
const formatLayoutForSettingsView = ({
  layouts,
  metadatas,
  ...rest
}) => {
  return {
    ...rest,
    layouts: {
      edit: layouts.edit.map(
        (row) => row.map(({ name: name2, size }) => ({
          name: name2,
          size
        }))
      ),
      list: layouts.list.map((obj) => {
        if (typeof obj === "object" && "name" in obj) {
          return obj.name;
        }
        return obj;
      })
    },
    metadatas: Object.keys(metadatas).reduce(
      (acc, current) => {
        const currentMetadatas = metadatas[current] ?? {};
        if (currentMetadatas.edit.mainField) {
          return {
            ...acc,
            [current]: {
              edit: {
                ...currentMetadatas.edit,
                mainField: currentMetadatas.edit.mainField.name
              },
              list: omit__default.default(currentMetadatas.list, ["mainField"])
            }
          };
        } else {
          return {
            ...acc,
            [current]: {
              edit: currentMetadatas.edit,
              list: omit__default.default(currentMetadatas.list, ["mainField"])
            }
          };
        }
      },
      {}
    )
  };
};
const useContentTypeLayout$1 = (contentTypeUID) => {
  const schemas = useTypedSelector(selectSchemas);
  const { get: get2 } = helperPlugin.useFetchClient();
  const { data, isLoading, refetch } = reactQuery.useQuery(
    ["content-manager", "content-types", contentTypeUID, "configuration"],
    async () => {
      const {
        data: { data: data2 }
      } = await get2(
        `/content-manager/content-types/${contentTypeUID}/configuration`
      );
      return data2;
    }
  );
  const layout = React__namespace.useMemo(() => data ? formatLayouts(data, schemas) : null, [data, schemas]);
  return {
    isLoading,
    layout,
    updateLayout: refetch
  };
};
const LayoutDndContext = React__namespace.default.createContext();
function LayoutDndProvider({
  attributes,
  buttonData,
  children,
  goTo,
  layout,
  metadatas,
  moveItem,
  moveRow,
  onAddData,
  relationsLayout,
  removeField,
  selectedItemName,
  setEditFieldToSelect,
  ...rest
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    LayoutDndContext.Provider,
    {
      value: {
        attributes,
        buttonData,
        goTo,
        layout,
        metadatas,
        moveItem,
        moveRow,
        onAddData,
        relationsLayout,
        removeField,
        selectedItemName,
        setEditFieldToSelect,
        ...rest
      },
      children
    }
  );
}
LayoutDndProvider.defaultProps = {
  attributes: {},
  buttonData: [],
  goTo() {
  },
  layout: [],
  metadatas: {},
  moveItem() {
  },
  moveRow() {
  },
  onAddData() {
  },
  relationsLayout: [],
  removeField() {
  },
  selectedItemName: null,
  setEditFieldToSelect() {
  }
};
LayoutDndProvider.propTypes = {
  attributes: PropTypes__default.default.object,
  buttonData: PropTypes__default.default.array,
  children: PropTypes__default.default.node.isRequired,
  goTo: PropTypes__default.default.func,
  layout: PropTypes__default.default.array,
  metadatas: PropTypes__default.default.object,
  moveItem: PropTypes__default.default.func,
  moveRow: PropTypes__default.default.func,
  onAddData: PropTypes__default.default.func,
  relationsLayout: PropTypes__default.default.array,
  removeField: PropTypes__default.default.func,
  selectedItemName: PropTypes__default.default.string,
  setEditFieldToSelect: PropTypes__default.default.func
};
function useLayoutDnd() {
  return React__namespace.useContext(LayoutDndContext);
}
const permissions = [{ action: "plugin::content-type-builder.read", subject: null }];
const LinkToCTB = () => {
  const { trackUsage } = helperPlugin.useTracking();
  const { formatMessage } = reactIntl.useIntl();
  const { slug, modifiedData, isContentTypeView } = useLayoutDnd();
  const type = isContentTypeView ? "content-types" : "components";
  const baseUrl = `/plugins/content-type-builder/${type === "content-types" ? type : "component-categories"}`;
  const category = get__default.default(modifiedData, "category", "");
  const suffixUrl = type === "content-types" ? slug : `${category}/${slug}`;
  const handleClick = () => {
    trackUsage("willEditEditLayout");
  };
  if (slug === "strapi::administrator") {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.CheckPermissions, { permissions, children: /* @__PURE__ */ jsxRuntime.jsx(
    helperPlugin.LinkButton,
    {
      to: `${baseUrl}/${suffixUrl}`,
      onClick: handleClick,
      size: "S",
      startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Pencil, {}),
      variant: "secondary",
      children: formatMessage({
        id: getTranslation(`edit-settings-view.link-to-ctb.${type}`),
        defaultMessage: "Edit the content type"
      })
    }
  ) });
};
const ComponentFieldList = ({ componentUid }) => {
  const { componentLayouts } = useLayoutDnd();
  const { formatMessage } = reactIntl.useIntl();
  const componentData = get__default.default(componentLayouts, [componentUid], {});
  const componentLayout = get__default.default(componentData, ["layouts", "edit"], []);
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { padding: 3, children: [
    componentLayout.map((row, index) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid, { gap: 4, children: row.map((rowContent) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: rowContent.size, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 2, children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.Flex,
        {
          alignItems: "center",
          background: "neutral0",
          paddingLeft: 3,
          paddingRight: 3,
          height: `${32 / 16}rem`,
          hasRadius: true,
          borderColor: "neutral200",
          children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral800", children: rowContent.name })
        }
      ) }) }, rowContent.name)) }, index)
    )),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 2, children: /* @__PURE__ */ jsxRuntime.jsx(
      helperPlugin.Link,
      {
        startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Cog, {}),
        to: `/content-manager/components/${componentUid}/configurations/edit`,
        children: formatMessage({
          id: getTranslation("components.FieldItem.linkToComponentLayout"),
          defaultMessage: "Set the component's layout"
        })
      }
    ) })
  ] });
};
ComponentFieldList.propTypes = {
  componentUid: PropTypes__default.default.string.isRequired
};
const ComponentIcon = ({ showBackground = true, icon = "cube" }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.Flex,
    {
      alignItems: "center",
      background: showBackground ? "neutral200" : void 0,
      justifyContent: "center",
      height: 8,
      width: 8,
      color: "neutral600",
      borderRadius: showBackground ? "50%" : 0,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.Icon,
        {
          as: COMPONENT_ICONS[icon] || COMPONENT_ICONS.cube,
          height: 5,
          width: 5
        }
      )
    }
  );
};
const COMPONENT_ICONS = {
  alien: Icons__namespace.Alien,
  apps: Icons__namespace.Apps,
  archive: Icons__namespace.Archive,
  arrowDown: Icons__namespace.ArrowDown,
  arrowLeft: Icons__namespace.ArrowLeft,
  arrowRight: Icons__namespace.ArrowRight,
  arrowUp: Icons__namespace.ArrowUp,
  attachment: Icons__namespace.Attachment,
  bell: Icons__namespace.Bell,
  bold: Icons__namespace.Bold,
  book: Icons__namespace.Book,
  briefcase: Icons__namespace.Briefcase,
  brush: Icons__namespace.Brush,
  bulletList: Icons__namespace.BulletList,
  calendar: Icons__namespace.Calendar,
  car: Icons__namespace.Car,
  cast: Icons__namespace.Cast,
  chartBubble: Icons__namespace.ChartBubble,
  chartCircle: Icons__namespace.ChartCircle,
  chartPie: Icons__namespace.ChartPie,
  check: Icons__namespace.Check,
  clock: Icons__namespace.Clock,
  cloud: Icons__namespace.Cloud,
  code: Icons__namespace.Code,
  cog: Icons__namespace.Cog,
  collapse: Icons__namespace.Collapse,
  command: Icons__namespace.Command,
  connector: Icons__namespace.Connector,
  crop: Icons__namespace.Crop,
  crown: Icons__namespace.Crown,
  cube: Icons__namespace.Cube,
  cup: Icons__namespace.Cup,
  cursor: Icons__namespace.Cursor,
  dashboard: Icons__namespace.Dashboard,
  database: Icons__namespace.Database,
  discuss: Icons__namespace.Discuss,
  doctor: Icons__namespace.Doctor,
  earth: Icons__namespace.Earth,
  emotionHappy: Icons__namespace.EmotionHappy,
  emotionUnhappy: Icons__namespace.EmotionUnhappy,
  envelop: Icons__namespace.Envelop,
  exit: Icons__namespace.Exit,
  expand: Icons__namespace.Expand,
  eye: Icons__namespace.Eye,
  feather: Icons__namespace.Feather,
  file: Icons__namespace.File,
  fileError: Icons__namespace.FileError,
  filePdf: Icons__namespace.FilePdf,
  filter: Icons__namespace.Filter,
  folder: Icons__namespace.Folder,
  gate: Icons__namespace.Gate,
  gift: Icons__namespace.Gift,
  globe: Icons__namespace.Globe,
  grid: Icons__namespace.Grid,
  handHeart: Icons__namespace.HandHeart,
  hashtag: Icons__namespace.Hashtag,
  headphone: Icons__namespace.Headphone,
  heart: Icons__namespace.Heart,
  house: Icons__namespace.House,
  information: Icons__namespace.Information,
  italic: Icons__namespace.Italic,
  key: Icons__namespace.Key,
  landscape: Icons__namespace.Landscape,
  layer: Icons__namespace.Layer,
  layout: Icons__namespace.Layout,
  lightbulb: Icons__namespace.Lightbulb,
  link: Icons__namespace.Link,
  lock: Icons__namespace.Lock,
  magic: Icons__namespace.Magic,
  manyToMany: Icons__namespace.ManyToMany,
  manyToOne: Icons__namespace.ManyToOne,
  manyWays: Icons__namespace.ManyWays,
  medium: Icons__namespace.Medium,
  message: Icons__namespace.Message,
  microphone: Icons__namespace.Microphone,
  monitor: Icons__namespace.Monitor,
  moon: Icons__namespace.Moon,
  music: Icons__namespace.Music,
  oneToMany: Icons__namespace.OneToMany,
  oneToOne: Icons__namespace.OneToOne,
  oneWay: Icons__namespace.OneWay,
  paint: Icons__namespace.Paint,
  paintBrush: Icons__namespace.PaintBrush,
  paperPlane: Icons__namespace.PaperPlane,
  pencil: Icons__namespace.Pencil,
  phone: Icons__namespace.Phone,
  picture: Icons__namespace.Picture,
  pin: Icons__namespace.Pin,
  pinMap: Icons__namespace.PinMap,
  plane: Icons__namespace.Plane,
  play: Icons__namespace.Play,
  plus: Icons__namespace.Plus,
  priceTag: Icons__namespace.PriceTag,
  puzzle: Icons__namespace.Puzzle,
  question: Icons__namespace.Question,
  quote: Icons__namespace.Quote,
  refresh: Icons__namespace.Refresh,
  repeat: Icons__namespace.Repeat,
  restaurant: Icons__namespace.Restaurant,
  rocket: Icons__namespace.Rocket,
  rotate: Icons__namespace.Rotate,
  scissors: Icons__namespace.Scissors,
  search: Icons__namespace.Search,
  seed: Icons__namespace.Seed,
  server: Icons__namespace.Server,
  shield: Icons__namespace.Shield,
  shirt: Icons__namespace.Shirt,
  shoppingCart: Icons__namespace.ShoppingCart,
  slideshow: Icons__namespace.Slideshow,
  stack: Icons__namespace.Stack,
  star: Icons__namespace.Star,
  store: Icons__namespace.Store,
  strikeThrough: Icons__namespace.StrikeThrough,
  sun: Icons__namespace.Sun,
  television: Icons__namespace.Television,
  thumbDown: Icons__namespace.ThumbDown,
  thumbUp: Icons__namespace.ThumbUp,
  train: Icons__namespace.Train,
  twitter: Icons__namespace.Twitter,
  typhoon: Icons__namespace.Typhoon,
  underline: Icons__namespace.Underline,
  user: Icons__namespace.User,
  volumeMute: Icons__namespace.VolumeMute,
  volumeUp: Icons__namespace.VolumeUp,
  walk: Icons__namespace.Walk,
  wheelchair: Icons__namespace.Wheelchair,
  write: Icons__namespace.Write
};
const CustomLink = styled__default.default(designSystem.Flex)`
  text-decoration: none;

  &:focus,
  &:hover {
    ${({ theme }) => `
      background-color: ${theme.colors.primary100};
      border-color: ${theme.colors.primary200};

      ${designSystem.Typography} {
          color: ${theme.colors.primary600};
      }
    `}

    /* > ComponentIcon */
    > div:first-child {
      background: ${({ theme }) => theme.colors.primary200};
      color: ${({ theme }) => theme.colors.primary600};

      svg {
        path {
          fill: ${({ theme }) => theme.colors.primary600};
        }
      }
    }
  }
`;
const DynamicZoneList = ({ components }) => {
  const { componentLayouts } = useLayoutDnd();
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { gap: 2, overflow: "scroll hidden", padding: 3, children: components.map((componentUid) => /* @__PURE__ */ jsxRuntime.jsxs(
    CustomLink,
    {
      hasRadius: true,
      background: "neutral0",
      justifyContent: "center",
      alignItems: "center",
      height: `${84 / 16}rem`,
      minWidth: `${140 / 16}rem`,
      padding: 2,
      direction: "column",
      borderColor: "neutral200",
      as: reactRouterDom.Link,
      to: `/content-manager/components/${componentUid}/configurations/edit`,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(ComponentIcon, { icon: componentLayouts?.[componentUid]?.info?.icon }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 1, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontSize: 1, textColor: "neutral600", fontWeight: "bold", children: componentLayouts?.[componentUid]?.info?.displayName ?? "" }) })
      ]
    },
    componentUid
  )) });
};
DynamicZoneList.propTypes = {
  components: PropTypes__default.default.arrayOf(PropTypes__default.default.string).isRequired
};
const CustomIconButton$2 = styled__default.default(designSystem.IconButton)`
  background-color: transparent;
  path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
const FieldButtonContent = ({ attribute, onEditField, onDeleteField, children }) => {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { overflow: "hidden", width: "100%", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { paddingLeft: 3, alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "semiBold", textColor: "neutral800", ellipsis: true, children }),
      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          CustomIconButton$2,
          {
            label: formatMessage(
              {
                id: getTranslation("containers.ListSettingsView.modal-form.edit-label"),
                defaultMessage: `Edit {fieldName}`
              },
              { fieldName: children }
            ),
            onClick: onEditField,
            icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Pencil, {}),
            noBorder: true
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          CustomIconButton$2,
          {
            label: formatMessage(
              {
                id: "global.delete-target",
                defaultMessage: `Delete {target}`
              },
              {
                target: children
              }
            ),
            "data-testid": "delete-field",
            onClick: onDeleteField,
            icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Trash, {}),
            noBorder: true
          }
        )
      ] })
    ] }),
    attribute?.type === "component" && /* @__PURE__ */ jsxRuntime.jsx(ComponentFieldList, { componentUid: attribute.component }),
    attribute?.type === "dynamiczone" && /* @__PURE__ */ jsxRuntime.jsx(DynamicZoneList, { components: attribute.components })
  ] });
};
FieldButtonContent.defaultProps = {
  attribute: void 0
};
FieldButtonContent.propTypes = {
  attribute: PropTypes__default.default.shape({
    components: PropTypes__default.default.array,
    component: PropTypes__default.default.string,
    type: PropTypes__default.default.string
  }),
  onEditField: PropTypes__default.default.func.isRequired,
  onDeleteField: PropTypes__default.default.func.isRequired,
  children: PropTypes__default.default.string.isRequired
};
const Wrapper$2 = styled__default.default(designSystem.Flex)`
  position: relative;
  ${({ isFirst, isLast, hasHorizontalPadding }) => {
  if (isFirst) {
    return `
        padding-right: 4px;
      `;
  }
  if (isLast) {
    return `
        padding-left: 4px;
      `;
  }
  if (hasHorizontalPadding) {
    return `
        padding: 0 4px;
      `;
  }
  return "";
}}
  ${({ showRightCarret, showLeftCarret, theme }) => {
  if (showRightCarret) {
    return `
        &:after {
          content: '';
          position: absolute;
          right: -1px;
          background-color: ${theme.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `;
  }
  if (showLeftCarret) {
    return `
        &:before {
          content: '';
          position: absolute;
          left: -1px;
          background-color: ${theme.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `;
  }
  return "";
}};
`;
const CustomDragIcon = styled__default.default(Icons.Drag)`
  height: ${12 / 16}rem;
  width: ${12 / 16}rem;
  path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
const CustomFlex = styled__default.default(designSystem.Flex)`
  display: ${({ dragStart }) => dragStart ? "none" : "flex"};
  opacity: ${({ isDragging, isFullSize, isHidden }) => {
  if (isDragging && !isFullSize) {
    return 0.2;
  }
  if (isDragging && isFullSize || isHidden) {
    return 0;
  }
  return 1;
}};
`;
const DragButton$1 = styled__default.default(designSystem.Flex)`
  cursor: all-scroll;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
`;
const DisplayedFieldButton = ({
  attribute,
  children,
  index,
  lastIndex,
  moveItem,
  moveRow,
  name: name2,
  onDeleteField,
  onEditField,
  rowIndex,
  size
}) => {
  const [dragStart, setDragStart] = React.useState(false);
  const isHidden = name2 === "_TEMP_";
  const { setIsDraggingSibling } = useLayoutDnd();
  const isFullSize = size === 12;
  const dragRef = React.useRef(null);
  const dropRef = React.useRef(null);
  const [{ clientOffset, isOver }, drop] = reactDnd.useDrop({
    accept: ItemTypes.EDIT_FIELD,
    hover(item, monitor) {
      if (!dropRef.current) {
        return;
      }
      if (item.size !== 12) {
        return;
      }
      const dragIndex = monitor.getItem().index;
      const hoverIndex = index;
      const dragRow = monitor.getItem().rowIndex;
      const targetRow = rowIndex;
      if (dragIndex === hoverIndex && dragRow === targetRow) {
        return;
      }
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset2 = monitor.getClientOffset();
      const hoverClientY = clientOffset2.y - hoverBoundingRect.top;
      if (dragRow < targetRow && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragRow > targetRow && hoverClientY > hoverMiddleY) {
        return;
      }
      moveRow(dragRow, targetRow);
      item.rowIndex = targetRow;
      item.itemIndex = hoverIndex;
    },
    drop(item, monitor) {
      if (!dropRef.current) {
        return;
      }
      const dragIndex = monitor.getItem().index;
      const hoverIndex = index;
      const dragRow = monitor.getItem().rowIndex;
      const targetRow = rowIndex;
      if (item.size === 12) {
        return;
      }
      if (dragIndex === hoverIndex && dragRow === targetRow) {
        return;
      }
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      if (Math.abs(monitor.getClientOffset().x - hoverBoundingRect.left) > hoverBoundingRect.width / 1.8) {
        moveItem(dragIndex, hoverIndex + 1, dragRow, targetRow);
        item.itemIndex = hoverIndex + 1;
        item.rowIndex = targetRow;
        return;
      }
      moveItem(dragIndex, hoverIndex, dragRow, targetRow);
      item.itemIndex = hoverIndex;
      item.rowIndex = targetRow;
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      clientOffset: monitor.getClientOffset(),
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      itemType: monitor.getItemType()
    })
  });
  const [{ isDragging, getItem }, drag, dragPreview] = reactDnd.useDrag({
    type: ItemTypes.EDIT_FIELD,
    item() {
      setIsDraggingSibling(true);
      return {
        index,
        labelField: children,
        rowIndex,
        name: name2,
        size
      };
    },
    canDrag() {
      return name2 !== "_TEMP_";
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      getItem: monitor.getItem()
    }),
    end() {
      setIsDraggingSibling(false);
    }
  });
  React.useEffect(() => {
    dragPreview(reactDndHtml5Backend.getEmptyImage(), { captureDraggingState: true });
  }, [dragPreview]);
  const refs = {
    dragRef: drag(dragRef),
    dropRef: drop(dropRef)
  };
  let showLeftCarret = false;
  let showRightCarret = false;
  if (dropRef.current && clientOffset) {
    const hoverBoundingRect = dropRef.current.getBoundingClientRect();
    showLeftCarret = isOver && getItem.size !== 12 && Math.abs(clientOffset.x - hoverBoundingRect.left) < hoverBoundingRect.width / 2;
    showRightCarret = isOver && getItem.size !== 12 && Math.abs(clientOffset.x - hoverBoundingRect.left) > hoverBoundingRect.width / 2;
    if (name2 === "_TEMP_") {
      showLeftCarret = isOver && getItem.size !== 12;
      showRightCarret = false;
    }
  }
  const getHeight = () => {
    if (attribute && isFullSize) {
      return `${74 / 16}rem`;
    }
    return `${32 / 16}rem`;
  };
  const isFirst = index === 0 && !isFullSize;
  const isLast = index === lastIndex && !isFullSize;
  const hasHorizontalPadding = index !== 0 && !isFullSize;
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: size, children: /* @__PURE__ */ jsxRuntime.jsxs(
    Wrapper$2,
    {
      ref: refs.dropRef,
      showLeftCarret,
      showRightCarret,
      isFirst,
      isLast,
      hasHorizontalPadding,
      onDrag: () => {
        if (isFullSize && !dragStart) {
          setDragStart(true);
        }
      },
      onDragEnd: () => {
        if (isFullSize) {
          setDragStart(false);
        }
      },
      children: [
        dragStart && isFullSize && /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.Box,
          {
            width: "100%",
            height: "2px",
            background: "primary600"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          CustomFlex,
          {
            width: isFullSize && dragStart ? 0 : "100%",
            borderColor: "neutral150",
            hasRadius: true,
            background: "neutral100",
            minHeight: getHeight(),
            alignItems: "stretch",
            isDragging,
            dragStart,
            isFullSize,
            isHidden,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                DragButton$1,
                {
                  as: "span",
                  type: "button",
                  ref: refs.dragRef,
                  onClick: (e) => e.stopPropagation(),
                  alignItems: "center",
                  paddingLeft: 3,
                  paddingRight: 3,
                  tabIndex: -1,
                  children: /* @__PURE__ */ jsxRuntime.jsx(CustomDragIcon, {})
                }
              ),
              !isHidden && /* @__PURE__ */ jsxRuntime.jsx(
                FieldButtonContent,
                {
                  attribute,
                  onEditField,
                  onDeleteField,
                  children
                }
              )
            ]
          }
        )
      ]
    }
  ) });
};
DisplayedFieldButton.defaultProps = {
  attribute: void 0
};
DisplayedFieldButton.propTypes = {
  attribute: PropTypes__default.default.shape({
    components: PropTypes__default.default.array,
    component: PropTypes__default.default.string,
    type: PropTypes__default.default.string
  }),
  children: PropTypes__default.default.string.isRequired,
  index: PropTypes__default.default.number.isRequired,
  moveItem: PropTypes__default.default.func.isRequired,
  moveRow: PropTypes__default.default.func.isRequired,
  name: PropTypes__default.default.string.isRequired,
  onDeleteField: PropTypes__default.default.func.isRequired,
  onEditField: PropTypes__default.default.func.isRequired,
  rowIndex: PropTypes__default.default.number.isRequired,
  lastIndex: PropTypes__default.default.number.isRequired,
  size: PropTypes__default.default.number.isRequired
};
const RowItemsLayout = ({ rowItem, onRemoveField, rowId, rowIndex, index, lastIndex }) => {
  const { setEditFieldToSelect, attributes, modifiedData, moveRow, moveItem } = useLayoutDnd();
  const attribute = get__default.default(attributes, [rowItem.name], {});
  const attributeLabel = get__default.default(modifiedData, ["metadatas", rowItem.name, "edit", "label"], "");
  return /* @__PURE__ */ jsxRuntime.jsx(
    DisplayedFieldButton,
    {
      onEditField: () => setEditFieldToSelect(rowItem.name),
      onDeleteField: () => onRemoveField(rowId, index),
      attribute,
      index,
      lastIndex,
      rowIndex,
      name: rowItem.name,
      size: rowItem.size,
      moveRow,
      moveItem,
      children: attributeLabel || rowItem.name
    }
  );
};
RowItemsLayout.propTypes = {
  index: PropTypes__default.default.number.isRequired,
  lastIndex: PropTypes__default.default.number.isRequired,
  onRemoveField: PropTypes__default.default.func.isRequired,
  rowId: PropTypes__default.default.number.isRequired,
  rowIndex: PropTypes__default.default.number.isRequired,
  rowItem: PropTypes__default.default.object.isRequired
};
const RowsLayout = ({ row, onRemoveField, rowIndex }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid, { children: row.rowContent.map((rowItem, index) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      RowItemsLayout,
      {
        rowItem,
        index,
        rowId: row.rowId,
        onRemoveField,
        rowIndex,
        lastIndex: row.rowContent.length - 1
      },
      rowItem.name
    );
  }) });
};
RowsLayout.propTypes = {
  onRemoveField: PropTypes__default.default.func.isRequired,
  row: PropTypes__default.default.object.isRequired,
  rowIndex: PropTypes__default.default.number.isRequired
};
const DisplayedFields = ({ editLayout, fields, onRemoveField, onAddField }) => {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 4, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", children: formatMessage({
          id: getTranslation("containers.ListPage.displayedFields"),
          defaultMessage: "Displayed fields"
        }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", textColor: "neutral600", children: formatMessage({
          id: "containers.SettingPage.editSettings.description",
          defaultMessage: "Drag & drop the fields to build the layout"
        }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(LinkToCTB, {})
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { padding: 4, hasRadius: true, borderStyle: "dashed", borderWidth: "1px", borderColor: "neutral300", children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 2, children: [
      editLayout.map((row, index) => /* @__PURE__ */ jsxRuntime.jsx(RowsLayout, { row, rowIndex: index, onRemoveField }, row.rowId)),
      /* @__PURE__ */ jsxRuntime.jsxs(v2.Menu.Root, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          v2.Menu.Trigger,
          {
            startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Plus, {}),
            endIcon: null,
            disabled: fields.length === 0,
            fullWidth: true,
            variant: "secondary",
            children: formatMessage({
              id: getTranslation("containers.SettingPage.add.field"),
              defaultMessage: "Insert another field"
            })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(v2.Menu.Content, { children: fields.map((field) => /* @__PURE__ */ jsxRuntime.jsx(v2.Menu.Item, { onSelect: () => onAddField(field), children: field }, field)) })
      ] })
    ] }) })
  ] });
};
DisplayedFields.propTypes = {
  editLayout: PropTypes__default.default.array.isRequired,
  fields: PropTypes__default.default.array.isRequired,
  onAddField: PropTypes__default.default.func.isRequired,
  onRemoveField: PropTypes__default.default.func.isRequired
};
const iconByTypes = {
  biginteger: /* @__PURE__ */ jsxRuntime.jsx(Icons.Number, {}),
  boolean: /* @__PURE__ */ jsxRuntime.jsx(Icons.Boolean, {}),
  date: /* @__PURE__ */ jsxRuntime.jsx(Icons.Date, {}),
  datetime: /* @__PURE__ */ jsxRuntime.jsx(Icons.Date, {}),
  decimal: /* @__PURE__ */ jsxRuntime.jsx(Icons.Number, {}),
  email: /* @__PURE__ */ jsxRuntime.jsx(Icons.Email, {}),
  enum: /* @__PURE__ */ jsxRuntime.jsx(Icons.Enumeration, {}),
  enumeration: /* @__PURE__ */ jsxRuntime.jsx(Icons.Enumeration, {}),
  file: /* @__PURE__ */ jsxRuntime.jsx(Icons.Media, {}),
  files: /* @__PURE__ */ jsxRuntime.jsx(Icons.Media, {}),
  float: /* @__PURE__ */ jsxRuntime.jsx(Icons.Number, {}),
  integer: /* @__PURE__ */ jsxRuntime.jsx(Icons.Number, {}),
  media: /* @__PURE__ */ jsxRuntime.jsx(Icons.Media, {}),
  number: /* @__PURE__ */ jsxRuntime.jsx(Icons.Number, {}),
  relation: /* @__PURE__ */ jsxRuntime.jsx(Icons.Relation, {}),
  string: /* @__PURE__ */ jsxRuntime.jsx(Icons.Text, {}),
  text: /* @__PURE__ */ jsxRuntime.jsx(Icons.Text, {}),
  richtext: /* @__PURE__ */ jsxRuntime.jsx(Icons.Text, {}),
  time: /* @__PURE__ */ jsxRuntime.jsx(Icons.Date, {}),
  timestamp: /* @__PURE__ */ jsxRuntime.jsx(Icons.Date, {}),
  json: /* @__PURE__ */ jsxRuntime.jsx(Icons.Json, {}),
  uid: /* @__PURE__ */ jsxRuntime.jsx(Icons.Uid, {}),
  component: /* @__PURE__ */ jsxRuntime.jsx(Icons.Component, {}),
  dynamiczone: /* @__PURE__ */ jsxRuntime.jsx(Icons.DynamicZone, {})
};
const FieldTypeIcon = ({ type, customFieldUid }) => {
  const customFieldsRegistry = helperPlugin.useCustomFields();
  let Compo = iconByTypes[type];
  if (customFieldUid) {
    const customField = customFieldsRegistry.get(customFieldUid);
    const CustomFieldIcon = customField?.icon;
    if (CustomFieldIcon) {
      Compo = /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { marginRight: 3, width: 7, height: 6, children: /* @__PURE__ */ jsxRuntime.jsx(CustomFieldIcon, {}) });
    }
  }
  if (!iconByTypes[type]) {
    return null;
  }
  return Compo;
};
const createPossibleMainFieldsForModelsAndComponents = (array) => {
  return array.reduce((acc, current) => {
    const attributes = current?.attributes ?? {};
    const possibleMainFields = Object.keys(attributes).filter((attr) => {
      return ![
        "boolean",
        "component",
        "dynamiczone",
        "json",
        "media",
        "password",
        "relation",
        "text",
        "richtext",
        "blocks"
      ].includes(attributes?.[attr]?.type ?? "");
    });
    acc[current.uid] = possibleMainFields;
    return acc;
  }, {});
};
const getInputProps = (fieldName) => {
  let type;
  switch (fieldName) {
    case "description":
    case "label":
    case "placeholder":
      type = "text";
      break;
    case "mainField":
      type = "select";
      break;
    case "editable":
      type = "bool";
      break;
    default:
      type = "";
  }
  const labelId = fieldName === "mainField" ? getTranslation("containers.SettingPage.editSettings.entry.title") : getTranslation(`form.Input.${fieldName}`);
  return { type, label: { id: labelId } };
};
const GenericInput = ({ type, options: options2, onChange, value, name: name2, ...inputProps }) => {
  const { formatMessage } = reactIntl.useIntl();
  switch (type) {
    case "text": {
      return /* @__PURE__ */ jsxRuntime.jsx(designSystem.TextInput, { onChange, value, name: name2, ...inputProps });
    }
    case "bool": {
      return /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.ToggleInput,
        {
          onChange: (e) => {
            onChange({ target: { name: name2, value: e.target.checked } });
          },
          checked: value,
          name: name2,
          onLabel: formatMessage({
            id: "app.components.ToggleCheckbox.on-label",
            defaultMessage: "On"
          }),
          offLabel: formatMessage({
            id: "app.components.ToggleCheckbox.off-label",
            defaultMessage: "Off"
          }),
          ...inputProps
        }
      );
    }
    case "select": {
      return /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.Select,
        {
          value,
          name: name2,
          onChange: (value2) => onChange({ target: { name: name2, value: value2 } }),
          ...inputProps,
          children: options2.map((option) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Option, { value: option, children: option }, option))
        }
      );
    }
    default:
      return null;
  }
};
GenericInput.defaultProps = {
  options: void 0
};
GenericInput.propTypes = {
  type: PropTypes__default.default.string.isRequired,
  options: PropTypes__default.default.arrayOf(PropTypes__default.default.string),
  onChange: PropTypes__default.default.func.isRequired,
  value: PropTypes__default.default.oneOfType([PropTypes__default.default.string, PropTypes__default.default.bool]).isRequired,
  name: PropTypes__default.default.string.isRequired
};
const FIELD_SIZES = [
  [4, "33%"],
  [6, "50%"],
  [8, "66%"],
  [12, "100%"]
];
const ModalForm = ({ onMetaChange, onSizeChange }) => {
  const { formatMessage } = reactIntl.useIntl();
  const { modifiedData, selectedField, attributes, fieldForm } = useLayoutDnd();
  const schemas = reactRedux.useSelector(selectSchemas);
  const fieldSizes = useTypedSelector((state) => state["content-manager_app"].fieldSizes);
  const formToDisplay = React.useMemo(() => {
    if (!selectedField) {
      return [];
    }
    const associatedMetas = get__default.default(modifiedData, ["metadatas", selectedField, "edit"], {});
    return Object.keys(associatedMetas).filter((meta) => meta !== "visible");
  }, [selectedField, modifiedData]);
  const componentsAndModelsPossibleMainFields = React.useMemo(() => {
    return createPossibleMainFieldsForModelsAndComponents(schemas);
  }, [schemas]);
  const getSelectedItemSelectOptions = React.useCallback(
    (formType) => {
      if (formType !== "relation" && formType !== "component") {
        return [];
      }
      const targetKey = formType === "component" ? "component" : "targetModel";
      const key = get__default.default(modifiedData, ["attributes", selectedField, targetKey], "");
      return get__default.default(componentsAndModelsPossibleMainFields, [key], []);
    },
    [selectedField, componentsAndModelsPossibleMainFields, modifiedData]
  );
  const metaFields = formToDisplay.map((meta) => {
    const formType = get__default.default(attributes, [selectedField, "type"]);
    if (["component", "dynamiczone"].includes(formType) && !["label", "description"].includes(meta)) {
      return null;
    }
    if (formType === "component" && meta !== "label") {
      return null;
    }
    if (["media", "json", "boolean"].includes(formType) && meta === "placeholder") {
      return null;
    }
    if (meta === "step") {
      return null;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, children: /* @__PURE__ */ jsxRuntime.jsx(
      GenericInput,
      {
        type: getInputProps(meta).type,
        hint: meta === "mainField" ? formatMessage({
          id: getTranslation(
            "containers.SettingPage.editSettings.relation-field.description"
          )
        }) : "",
        label: formatMessage({
          id: get__default.default(getInputProps(meta), "label.id", "app.utils.defaultMessage")
        }),
        name: meta,
        onChange: onMetaChange,
        value: get__default.default(fieldForm, ["metadata", meta], ""),
        options: getSelectedItemSelectOptions(formType)
      }
    ) }, meta);
  });
  const { type, customField } = attributes[selectedField];
  const { isResizable } = fieldSizes[customField] ?? fieldSizes[type];
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    metaFields,
    isResizable && /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, children: /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Select,
      {
        value: fieldForm?.size,
        name: "size",
        onChange: (value) => {
          onSizeChange({ name: selectedField, value });
        },
        label: formatMessage({
          id: getTranslation("containers.SettingPage.editSettings.size.label"),
          defaultMessage: "Size"
        }),
        children: FIELD_SIZES.map(([value, label]) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Option, { value, children: label }, value))
      }
    ) }, "size")
  ] });
};
ModalForm.propTypes = {
  onMetaChange: PropTypes__default.default.func.isRequired,
  onSizeChange: PropTypes__default.default.func.isRequired
};
const HeaderContainer$1 = styled__default.default(designSystem.Flex)`
  svg {
    width: ${32 / 16}rem;
    height: ${24 / 16}rem;
    margin-right: ${({ theme }) => theme.spaces[3]};
  }
`;
const FormModal = ({ onToggle, onMetaChange, onSizeChange, onSubmit, type, customFieldUid }) => {
  const { selectedField } = useLayoutDnd();
  const { formatMessage } = reactIntl.useIntl();
  const getAttrType = () => {
    if (type === "timestamp") {
      return "date";
    }
    if (["decimal", "float", "integer", "biginter"].includes(type)) {
      return "number";
    }
    return type;
  };
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.ModalLayout, { onClose: onToggle, labelledBy: "title", children: /* @__PURE__ */ jsxRuntime.jsxs("form", { onSubmit, children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.ModalHeader, { children: /* @__PURE__ */ jsxRuntime.jsxs(HeaderContainer$1, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(FieldTypeIcon, { type: getAttrType(), customFieldUid }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title", children: formatMessage(
        {
          id: getTranslation("containers.ListSettingsView.modal-form.edit-label"),
          defaultMessage: "Edit {fieldName}"
        },
        { fieldName: upperFirst__default.default(selectedField) }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.ModalBody, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid, { gap: 4, children: /* @__PURE__ */ jsxRuntime.jsx(ModalForm, { onMetaChange, onSizeChange }) }) }),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.ModalFooter,
      {
        startActions: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { onClick: onToggle, variant: "tertiary", children: formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" }) }),
        endActions: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { type: "submit", children: formatMessage({ id: "global.finish", defaultMessage: "Finish" }) })
      }
    )
  ] }) });
};
FormModal.defaultProps = {
  customFieldUid: null
};
FormModal.propTypes = {
  customFieldUid: PropTypes__default.default.string,
  onSubmit: PropTypes__default.default.func.isRequired,
  onToggle: PropTypes__default.default.func.isRequired,
  onMetaChange: PropTypes__default.default.func.isRequired,
  onSizeChange: PropTypes__default.default.func.isRequired,
  type: PropTypes__default.default.string.isRequired
};
const getRowSize = (arr) => arr.reduce((sum, value) => sum + value.size, 0);
const createLayout = (arr) => {
  return arr.reduce((acc, current, index) => {
    const row = { rowId: index, rowContent: current };
    return acc.concat(row);
  }, []);
};
const formatLayout = (arr) => {
  return arr.reduce((acc, current) => {
    let toPush = [];
    const currentRow = current.rowContent.reduce((acc2, curr) => {
      const acc2Size = getRowSize(acc2);
      if (curr.name === "_TEMP_") {
        return acc2;
      }
      if (acc2Size + curr.size <= 12) {
        acc2.push(curr);
      } else {
        toPush.push(curr);
      }
      return acc2;
    }, []);
    const rowId = acc.length === 0 ? 0 : Math.max.apply(
      Math,
      acc.map((o) => o.rowId)
    ) + 1;
    const currentRowSize = getRowSize(currentRow);
    if (currentRowSize < 12) {
      currentRow.push({ name: "_TEMP_", size: 12 - currentRowSize });
    }
    acc.push({ rowId, rowContent: currentRow });
    if (toPush.length > 0) {
      const toPushSize = getRowSize(toPush);
      if (toPushSize < 12) {
        toPush.push({ name: "_TEMP_", size: 12 - toPushSize });
      }
      acc.push({ rowId: rowId + 1, rowContent: toPush });
      toPush = [];
    }
    return acc;
  }, []).filter((row) => row.rowContent.length > 0).filter((row) => {
    if (row.rowContent.length === 1) {
      return row.rowContent[0].name !== "_TEMP_";
    }
    return true;
  });
};
const unformatLayout = (arr) => {
  return arr.reduce((acc, current) => {
    const currentRow = current.rowContent.filter((content) => content.name !== "_TEMP_");
    return acc.concat([currentRow]);
  }, []);
};
const getFieldSize = (name2, layouts = []) => {
  return layouts.reduce((acc, { rowContent }) => {
    const size = rowContent.find((row) => row.name === name2)?.size ?? null;
    if (size) {
      acc = size;
    }
    return acc;
  }, null);
};
const setFieldSize = (name2, size, layouts = []) => {
  return layouts.map((row) => {
    row.rowContent = row.rowContent.map((column) => {
      if (column.name === name2) {
        return {
          ...column,
          size
        };
      }
      return column;
    });
    return row;
  });
};
const init = (initialState2, mainLayout, components) => {
  let initialData = cloneDeep__default.default(mainLayout);
  set__default.default(initialData, ["layouts", "edit"], formatLayout(createLayout(mainLayout.layouts.edit)));
  return {
    ...initialState2,
    initialData,
    modifiedData: initialData,
    componentLayouts: components
  };
};
const arrayMoveItem = (arr, from, to) => {
  if (Array.isArray(arr) && from >= 0 && to >= 0 && from <= arr.length - 1 && to <= arr.length - 1) {
    const newArray = cloneDeep__default.default(arr);
    const item = newArray.splice(from, 1);
    newArray.splice(to, 0, item[0]);
    return newArray;
  }
  return arr;
};
const DEFAULT_FIELD_SIZE = 6;
const initialState$6 = {
  fieldForm: {},
  componentLayouts: {},
  metaToEdit: "",
  initialData: {},
  metaForm: {},
  modifiedData: {}
};
const reducer$6 = (state = initialState$6, action) => (
  // eslint-disable-next-line consistent-return
  produce__default.default(state, (draftState) => {
    const layoutPathEdit = ["modifiedData", "layouts", "edit"];
    switch (action.type) {
      case "MOVE_ROW": {
        const editFieldLayoutValue = get__default.default(state, layoutPathEdit, []);
        const { fromIndex, toIndex } = action;
        set__default.default(draftState, layoutPathEdit, arrayMoveItem(editFieldLayoutValue, fromIndex, toIndex));
        break;
      }
      case "ON_ADD_FIELD": {
        const newState = cloneDeep__default.default(state);
        const attribute = get__default.default(newState, ["modifiedData", "attributes", action.name], {});
        const size = action.fieldSizes[attribute?.customField]?.default ?? action.fieldSizes[attribute?.type]?.default ?? DEFAULT_FIELD_SIZE;
        const listSize = get__default.default(newState, layoutPathEdit, []).length;
        const actualRowContentPath = [...layoutPathEdit, listSize - 1, "rowContent"];
        const rowContentToSet = get__default.default(newState, actualRowContentPath, []);
        let newList = get__default.default(newState, layoutPathEdit, []);
        if (Array.isArray(rowContentToSet)) {
          set__default.default(
            newList,
            [listSize > 0 ? listSize - 1 : 0, "rowContent"],
            [...rowContentToSet, { name: action.name, size }]
          );
        } else {
          set__default.default(
            newList,
            [listSize > 0 ? listSize - 1 : 0, "rowContent"],
            [{ name: action.name, size }]
          );
        }
        const formattedList = formatLayout(newList);
        set__default.default(draftState, layoutPathEdit, formattedList);
        break;
      }
      case "ON_CHANGE": {
        set__default.default(draftState, ["modifiedData", ...action.keys], action.value);
        break;
      }
      case "ON_CHANGE_META": {
        set__default.default(draftState, ["metaForm", "metadata", ...action.keys], action.value);
        break;
      }
      case "ON_CHANGE_SIZE": {
        set__default.default(draftState, ["metaForm", "size"], action.value);
        break;
      }
      case "ON_RESET": {
        draftState.modifiedData = state.initialData;
        break;
      }
      case "REMOVE_FIELD": {
        const row = get__default.default(state, [...layoutPathEdit, action.rowIndex, "rowContent"], []);
        let newState = cloneDeep__default.default(state);
        if (row.length === 1 || row.length === 2 && get__default.default(row, [1, "name"], "") === "_TEMP_") {
          const currentRowFieldList = get__default.default(state, layoutPathEdit, []);
          set__default.default(
            newState,
            layoutPathEdit,
            currentRowFieldList.filter((_, index) => action.rowIndex !== index)
          );
        } else {
          set__default.default(
            newState,
            [...layoutPathEdit, action.rowIndex, "rowContent"],
            row.filter((_, index) => index !== action.fieldIndex)
          );
        }
        const updatedList = formatLayout(get__default.default(newState, layoutPathEdit, []));
        set__default.default(draftState, layoutPathEdit, updatedList);
        break;
      }
      case "REORDER_DIFF_ROW": {
        const actualRowContent = get__default.default(
          state,
          [...layoutPathEdit, action.dragRowIndex, "rowContent"],
          []
        );
        const targetRowContent = get__default.default(
          state,
          [...layoutPathEdit, action.hoverRowIndex, "rowContent"],
          []
        );
        const itemToInsert = get__default.default(
          state,
          [...layoutPathEdit, action.dragRowIndex, "rowContent", action.dragIndex],
          {}
        );
        const rowContent = [...targetRowContent, itemToInsert];
        let newState = cloneDeep__default.default(state);
        set__default.default(
          newState,
          [...layoutPathEdit, action.dragRowIndex, "rowContent"],
          actualRowContent.filter((_, index) => action.dragIndex !== index)
        );
        set__default.default(
          newState,
          [...layoutPathEdit, action.hoverRowIndex, "rowContent"],
          arrayMoveItem(rowContent, rowContent.length - 1, action.hoverIndex)
        );
        const updatedList = formatLayout(get__default.default(newState, layoutPathEdit, []));
        set__default.default(draftState, layoutPathEdit, updatedList);
        break;
      }
      case "REORDER_ROW": {
        const newState = cloneDeep__default.default(state);
        const rowContent = get__default.default(
          newState,
          [...layoutPathEdit, action.dragRowIndex, "rowContent"],
          []
        );
        set__default.default(
          newState,
          [...layoutPathEdit, action.dragRowIndex, "rowContent"],
          arrayMoveItem(rowContent, action.dragIndex, action.hoverIndex)
        );
        const updatedList = formatLayout(get__default.default(newState, layoutPathEdit, []));
        set__default.default(draftState, layoutPathEdit, updatedList);
        break;
      }
      case "SET_FIELD_TO_EDIT": {
        draftState.metaToEdit = action.name;
        draftState.metaForm = {
          metadata: get__default.default(state, ["modifiedData", "metadatas", action.name, "edit"], {}),
          size: getFieldSize(action.name, state.modifiedData?.layouts?.edit) ?? DEFAULT_FIELD_SIZE
        };
        break;
      }
      case "SUBMIT_META_FORM": {
        set__default.default(
          draftState,
          ["modifiedData", "metadatas", state.metaToEdit, "edit"],
          state.metaForm.metadata
        );
        const layoutsCopy = cloneDeep__default.default(get__default.default(state, layoutPathEdit, []));
        const nextLayoutValue = setFieldSize(state.metaToEdit, state.metaForm.size, layoutsCopy);
        if (nextLayoutValue.length > 0) {
          set__default.default(draftState, layoutPathEdit, formatLayout(nextLayoutValue));
        }
        break;
      }
      case "SUBMIT_SUCCEEDED": {
        draftState.initialData = state.modifiedData;
        break;
      }
      case "UNSET_FIELD_TO_EDIT": {
        draftState.metaToEdit = "";
        draftState.metaForm = {};
        break;
      }
      default:
        return draftState;
    }
  })
);
const EditSettingsView = ({ mainLayout, components, isContentTypeView, slug, updateLayout }) => {
  const [reducerState, dispatch] = React.useReducer(
    reducer$6,
    initialState$6,
    () => init(initialState$6, mainLayout, components)
  );
  const [isDraggingSibling, setIsDraggingSibling] = React.useState(false);
  const { trackUsage } = helperPlugin.useTracking();
  const toggleNotification = helperPlugin.useNotification();
  const { goBack } = reactRouterDom.useHistory();
  const [isModalFormOpen, setIsModalFormOpen] = React.useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = React.useState(false);
  const { componentLayouts, initialData, modifiedData, metaToEdit, metaForm } = reducerState;
  const { formatMessage } = reactIntl.useIntl();
  const modelName = mainLayout.info.displayName;
  const attributes = modifiedData?.attributes ?? {};
  const fieldSizes = useTypedSelector((state) => state["content-manager_app"].fieldSizes);
  const { put } = helperPlugin.useFetchClient();
  const entryTitleOptions = Object.keys(attributes).filter((attr) => {
    const type = attributes?.[attr]?.type ?? "";
    return ![
      "dynamiczone",
      "json",
      "text",
      "relation",
      "component",
      "boolean",
      "media",
      "password",
      "richtext",
      "timestamp",
      "blocks"
    ].includes(type) && !!type;
  });
  const editLayout = modifiedData.layouts.edit;
  const displayedFields = editLayout.flatMap((layout) => layout.rowContent);
  const editLayoutFields = Object.keys(modifiedData.attributes).filter((attr) => (modifiedData?.metadatas?.[attr]?.edit?.visible ?? false) === true).filter((attr) => displayedFields.findIndex((el) => el.name === attr) === -1).sort();
  const handleChange = ({ target: { name: name2, value } }) => {
    dispatch({
      type: "ON_CHANGE",
      keys: name2.split("."),
      value
    });
  };
  const handleToggleModal = () => {
    setIsModalFormOpen((prev) => !prev);
  };
  const toggleConfirmDialog = () => {
    setIsConfirmDialogOpen((prev) => !prev);
  };
  const handleMetaChange = ({ target: { name: name2, value } }) => {
    dispatch({
      type: "ON_CHANGE_META",
      keys: name2.split("."),
      value
    });
  };
  const handleSizeChange = ({ name: name2, value }) => {
    dispatch({
      type: "ON_CHANGE_SIZE",
      name: name2,
      value
    });
  };
  const handleMetaSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SUBMIT_META_FORM"
    });
    handleToggleModal();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleConfirmDialog();
  };
  const submitMutation = reactQuery.useMutation(
    (body) => {
      return put(
        isContentTypeView ? `/content-manager/content-types/${slug}/configuration` : `/content-manager/components/${slug}/configuration`,
        body
      );
    },
    {
      onSuccess({ data }) {
        if (updateLayout) {
          updateLayout(data.data);
        }
        dispatch({
          type: "SUBMIT_SUCCEEDED"
        });
        toggleConfirmDialog();
        trackUsage("didEditEditSettings");
      },
      onError() {
        toggleNotification({ type: "warning", message: { id: "notification.error" } });
      }
    }
  );
  const { isLoading: isSubmittingForm } = submitMutation;
  const handleConfirm = () => {
    const { layouts, metadatas, settings } = cloneDeep__default.default(modifiedData);
    submitMutation.mutate({
      layouts: {
        ...layouts,
        edit: unformatLayout(layouts.edit)
      },
      metadatas,
      settings
    });
  };
  const handleMoveRelation = (fromIndex, toIndex) => {
    dispatch({
      type: "MOVE_RELATION",
      fromIndex,
      toIndex
    });
  };
  const handleMoveField = (fromIndex, toIndex) => {
    dispatch({
      type: "MOVE_FIELD",
      fromIndex,
      toIndex
    });
  };
  const moveItem = (dragIndex, hoverIndex, dragRowIndex, hoverRowIndex) => {
    if (dragRowIndex === hoverRowIndex) {
      dispatch({
        type: "REORDER_ROW",
        dragRowIndex,
        dragIndex,
        hoverIndex
      });
    } else {
      dispatch({
        type: "REORDER_DIFF_ROW",
        dragIndex,
        hoverIndex,
        dragRowIndex,
        hoverRowIndex
      });
    }
  };
  const moveRow = (fromIndex, toIndex) => {
    dispatch({
      type: "MOVE_ROW",
      fromIndex,
      toIndex
    });
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    LayoutDndProvider,
    {
      isContentTypeView,
      attributes,
      modifiedData,
      slug,
      componentLayouts,
      selectedField: metaToEdit,
      fieldForm: metaForm,
      onMoveRelation: handleMoveRelation,
      onMoveField: handleMoveField,
      moveRow,
      moveItem,
      setEditFieldToSelect: (name2) => {
        dispatch({
          type: "SET_FIELD_TO_EDIT",
          name: name2
        });
        handleToggleModal();
      },
      isDraggingSibling,
      setIsDraggingSibling,
      children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
        /* @__PURE__ */ jsxRuntime.jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.HeaderLayout,
            {
              title: formatMessage(
                {
                  id: getTranslation("components.SettingsViewWrapper.pluginHeader.title"),
                  defaultMessage: `Configure the view - ${upperFirst__default.default(modelName)}`
                },
                { name: upperFirst__default.default(modelName) }
              ),
              subtitle: formatMessage({
                id: getTranslation(
                  "components.SettingsViewWrapper.pluginHeader.description.edit-settings"
                ),
                defaultMessage: "Customize how the edit view will look like."
              }),
              navigationAction: /* @__PURE__ */ jsxRuntime.jsx(
                helperPlugin.Link,
                {
                  startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.ArrowLeft, {}),
                  onClick: (e) => {
                    e.preventDefault();
                    goBack();
                  },
                  to: "/",
                  children: formatMessage({
                    id: "global.back",
                    defaultMessage: "Back"
                  })
                }
              ),
              primaryAction: /* @__PURE__ */ jsxRuntime.jsx(
                designSystem.Button,
                {
                  disabled: isEqual__default.default(initialData, modifiedData),
                  startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Check, {}),
                  type: "submit",
                  children: formatMessage({ id: "global.save", defaultMessage: "Save" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.ContentLayout, { children: /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.Box,
            {
              background: "neutral0",
              hasRadius: true,
              shadow: "filterShadow",
              paddingTop: 6,
              paddingBottom: 6,
              paddingLeft: 7,
              paddingRight: 7,
              children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 4, children: [
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "delta", as: "h2", children: formatMessage({
                  id: getTranslation("containers.SettingPage.settings"),
                  defaultMessage: "Settings"
                }) }),
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, s: 12, children: /* @__PURE__ */ jsxRuntime.jsx(
                  designSystem.Select,
                  {
                    label: formatMessage({
                      id: getTranslation("containers.SettingPage.editSettings.entry.title"),
                      defaultMessage: "Entry title"
                    }),
                    hint: formatMessage({
                      id: getTranslation(
                        "containers.SettingPage.editSettings.entry.title.description"
                      ),
                      defaultMessage: "Set the display field of your entry"
                    }),
                    onChange: (value) => {
                      handleChange({
                        target: {
                          name: "settings.mainField",
                          value: value === "" ? null : value
                        }
                      });
                    },
                    value: modifiedData.settings.mainField,
                    children: entryTitleOptions.map((attribute) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Option, { value: attribute, children: attribute }, attribute))
                  }
                ) }) }),
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 2, paddingBottom: 2, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Divider, {}) }),
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "delta", as: "h3", children: formatMessage({
                  id: getTranslation("containers.SettingPage.view"),
                  defaultMessage: "View"
                }) }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  DisplayedFields,
                  {
                    attributes,
                    editLayout,
                    fields: editLayoutFields,
                    onAddField: (field) => {
                      dispatch({
                        type: "ON_ADD_FIELD",
                        name: field,
                        fieldSizes
                      });
                    },
                    onRemoveField: (rowId, index) => {
                      dispatch({
                        type: "REMOVE_FIELD",
                        rowIndex: rowId,
                        fieldIndex: index
                      });
                    }
                  }
                )
              ] })
            }
          ) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            helperPlugin.ConfirmDialog,
            {
              bodyText: {
                id: getTranslation("popUpWarning.warning.updateAllSettings"),
                defaultMessage: "This will modify all your settings"
              },
              iconRightButton: /* @__PURE__ */ jsxRuntime.jsx(Icons.Check, {}),
              isConfirmButtonLoading: isSubmittingForm,
              isOpen: isConfirmDialogOpen,
              onToggleDialog: toggleConfirmDialog,
              onConfirm: handleConfirm,
              variantRightButton: "success-light"
            }
          )
        ] }),
        isModalFormOpen && /* @__PURE__ */ jsxRuntime.jsx(
          FormModal,
          {
            onSubmit: handleMetaSubmit,
            onToggle: handleToggleModal,
            onMetaChange: handleMetaChange,
            onSizeChange: handleSizeChange,
            type: attributes?.[metaToEdit]?.type ?? "",
            customFieldUid: attributes?.[metaToEdit]?.customField ?? ""
          }
        )
      ] })
    }
  );
};
EditSettingsView.defaultProps = {
  isContentTypeView: false,
  updateLayout: null
};
EditSettingsView.propTypes = {
  components: PropTypes__default.default.object.isRequired,
  isContentTypeView: PropTypes__default.default.bool,
  mainLayout: PropTypes__default.default.shape({
    attributes: PropTypes__default.default.object.isRequired,
    info: PropTypes__default.default.object.isRequired,
    layouts: PropTypes__default.default.shape({
      list: PropTypes__default.default.array.isRequired,
      edit: PropTypes__default.default.array.isRequired
    }).isRequired,
    metadatas: PropTypes__default.default.object.isRequired,
    options: PropTypes__default.default.object.isRequired
  }).isRequired,
  slug: PropTypes__default.default.string.isRequired,
  updateLayout: PropTypes__default.default.func
};
const useOnce = (effect) => React__namespace.useEffect(effect, emptyDeps);
const emptyDeps = [];
const isObject = (obj) => {
  return typeof obj === "object" && obj !== null && Array.isArray(obj) === false;
};
const useFindRedirectionLink = (slug) => {
  const [{ rawQuery }] = helperPlugin.useQueryParams();
  const collectionTypesMenuLinks = useTypedSelector(
    (state) => state["content-manager_app"].collectionTypeLinks
  );
  const redirectionLink = getRedirectionLink(collectionTypesMenuLinks, slug, rawQuery);
  return redirectionLink;
};
const mergeParams = (initialParams, params) => {
  return Object.keys(initialParams).reduce((acc, current) => {
    const initialValue = initialParams[current];
    const nextValue = params[current] ?? initialValue;
    if (isObject(initialValue)) {
      return { ...acc, [current]: mergeParams(initialValue, nextValue) };
    }
    acc[current] = nextValue;
    return acc;
  }, {});
};
const getRedirectionLink = (links, slug, rawQuery) => {
  const matchingLink = links.find(({ to: to2 }) => to2.includes(slug));
  if (!matchingLink) {
    return "/";
  }
  const { to, search } = matchingLink;
  const searchQueryParams = qs.parse(search ?? "");
  const currentQueryParams = qs.parse(rawQuery.substring(1));
  const mergedParams = mergeParams(searchQueryParams, currentQueryParams);
  const link = `${to}?${qs.stringify(mergedParams, { encode: false })}`;
  return link;
};
const GET_DATA$1 = "ContentManager/CrudReducer/GET_DATA";
const GET_DATA_SUCCEEDED$1 = "ContentManager/CrudReducer/GET_DATA_SUCCEEDED";
const INIT_FORM = "ContentManager/CrudReducer/INIT_FORM";
const RESET_PROPS$2 = "ContentManager/CrudReducer/RESET_PROPS";
const SET_DATA_STRUCTURES = "ContentManager/CrudReducer/SET_DATA_STRUCTURES";
const SET_STATUS = "ContentManager/CrudReducer/SET_STATUS";
const SUBMIT_SUCCEEDED = "ContentManager/CrudReducer/SUBMIT_SUCCEEDED";
const CLEAR_SET_MODIFIED_DATA_ONLY = "ContentManager/CrudReducer/CLEAR_SET_MODIFIED_DATA_ONLY";
const getData$1 = () => {
  return {
    type: GET_DATA$1
  };
};
const getDataSucceeded$1 = (data) => ({
  type: GET_DATA_SUCCEEDED$1,
  data
});
const initForm = (rawQuery, isSingleType = false) => ({
  type: INIT_FORM,
  rawQuery,
  isSingleType
});
const resetProps$2 = () => ({ type: RESET_PROPS$2 });
const setDataStructures = (componentsDataStructure, contentTypeDataStructure) => ({
  type: SET_DATA_STRUCTURES,
  componentsDataStructure,
  contentTypeDataStructure
});
const setStatus = (status) => ({
  type: SET_STATUS,
  status
});
const submitSucceeded = (data) => ({
  type: SUBMIT_SUCCEEDED,
  data
});
const clearSetModifiedDataOnly = () => ({
  type: CLEAR_SET_MODIFIED_DATA_ONLY
});
const buildValidGetParams = (query = {}) => {
  const {
    plugins: _,
    _q: searchQuery,
    ...validQueryParams
  } = {
    ...query,
    ...Object.values(query?.plugins ?? {}).reduce(
      (acc, current) => Object.assign(acc, current),
      {}
    )
  };
  if (searchQuery) {
    validQueryParams._q = encodeURIComponent(searchQuery);
  }
  return validQueryParams;
};
const createDefaultDataStructure = (attributes, allComponentsSchema = {}) => {
  return Object.keys(attributes).reduce(
    (acc, current) => {
      const attribute = attributes[current] ?? {};
      const { type, required } = attribute;
      if ("default" in attribute) {
        acc[current] = attribute.default;
      }
      if (type === "component") {
        const currentComponentSchema = allComponentsSchema[attribute.component]?.attributes ?? {};
        const currentComponentDefaultForm = createDefaultDataStructure(
          currentComponentSchema,
          allComponentsSchema
        );
        if (required === true) {
          acc[current] = attribute.repeatable === true ? [] : currentComponentDefaultForm;
        }
        if (attribute.min && attribute.repeatable === true && required) {
          acc[current] = [];
          for (let i = 0; i < attribute.min; i += 1) {
            acc[current].push(currentComponentDefaultForm);
          }
        }
      }
      if (type === "dynamiczone") {
        if (required === true) {
          acc[current] = [];
        }
      }
      return acc;
    },
    {}
  );
};
const removePasswordFieldsFromData = (data, contentTypeSchema, componentSchema) => {
  const recursiveCleanData = (datum, schema) => {
    return Object.keys(datum).reduce(
      (acc, current) => {
        const attribute = schema.attributes[current];
        const value = datum[current];
        if (!attribute) {
          acc[current] = value;
          return acc;
        }
        if (attribute.type === "dynamiczone" && Array.isArray(value)) {
          acc[current] = value.map(
            (componentValue) => {
              const subCleanedData = recursiveCleanData(
                componentValue,
                componentSchema[componentValue.__component]
              );
              return subCleanedData;
            }
          );
          return acc;
        }
        if (attribute.type === "component") {
          if (attribute.repeatable) {
            acc[current] = value && Array.isArray(value) ? value.map((compoData) => {
              const subCleanedData = recursiveCleanData(
                compoData,
                componentSchema[attribute.component]
              );
              return subCleanedData;
            }) : value;
          } else {
            acc[current] = value ? recursiveCleanData(value, componentSchema[attribute.component]) : value;
          }
          return acc;
        }
        if (attribute.type !== "password") {
          acc[current] = value;
        }
        return acc;
      },
      {}
    );
  };
  return recursiveCleanData(data, contentTypeSchema);
};
const ContentTypeFormWrapper = ({
  children,
  slug,
  id = "",
  origin,
  collectionType
}) => {
  const allLayoutData = useTypedSelector(
    (state) => state["content-manager_editViewLayoutManager"].currentLayout
  );
  const queryClient2 = reactQuery.useQueryClient();
  const toggleNotification = helperPlugin.useNotification();
  const { setCurrentStep } = helperPlugin.useGuidedTour();
  const { trackUsage } = helperPlugin.useTracking();
  const { push, replace } = reactRouterDom.useHistory();
  const [{ query, rawQuery }] = helperPlugin.useQueryParams();
  const dispatch = useTypedDispatch();
  const { componentsDataStructure, contentTypeDataStructure, data, isLoading, status } = useTypedSelector((state) => state["content-manager_editViewCrudReducer"]);
  const redirectionLink = useFindRedirectionLink(slug);
  const { formatAPIError } = helperPlugin.useAPIErrorHandler(getTranslation);
  const isMounted = React__namespace.useRef(true);
  const fetchClient = helperPlugin.useFetchClient();
  const { put, post, del } = fetchClient;
  const isSingleType = collectionType === "single-types";
  const isCreatingEntry = !isSingleType && !id;
  const requestURL = isCreatingEntry && !origin ? null : `/content-manager/${collectionType}/${slug}/${origin || id}`;
  const cleanReceivedData = React__namespace.useCallback(
    (data2) => {
      const cleaned = removePasswordFieldsFromData(
        data2,
        allLayoutData.contentType,
        allLayoutData.components
      );
      return helperPlugin.formatContentTypeData(cleaned, allLayoutData.contentType, allLayoutData.components);
    },
    [allLayoutData]
  );
  React__namespace.useEffect(() => {
    const componentsDataStructure2 = Object.keys(allLayoutData.components).reduce((acc, current) => {
      const defaultComponentForm = createDefaultDataStructure(
        allLayoutData.components[current].attributes,
        allLayoutData.components
      );
      acc[current] = helperPlugin.formatContentTypeData(
        defaultComponentForm,
        // @ts-expect-error – the helper-plugin doesn't (and can't) know about the types we have in the admin. TODO: fix this.
        allLayoutData.components[current],
        allLayoutData.components
      );
      return acc;
    }, {});
    const contentTypeDataStructure2 = createDefaultDataStructure(
      allLayoutData.contentType.attributes,
      allLayoutData.components
    );
    const contentTypeDataStructureFormatted = helperPlugin.formatContentTypeData(
      contentTypeDataStructure2,
      allLayoutData.contentType,
      allLayoutData.components
    );
    dispatch(setDataStructures(componentsDataStructure2, contentTypeDataStructureFormatted));
  }, [allLayoutData, dispatch]);
  React__namespace.useEffect(() => {
    return () => {
      dispatch(resetProps$2());
    };
  }, [dispatch]);
  const validParams = React__namespace.useMemo(() => buildValidGetParams(query), [query]);
  React__namespace.useEffect(() => {
    const CancelToken = axios__default.default.CancelToken;
    const source = CancelToken.source();
    const fetchData = async (source2) => {
      if (!requestURL) {
        return;
      }
      dispatch(getData$1());
      try {
        const { data: data2 } = await fetchClient.get(requestURL, {
          cancelToken: source2.token,
          params: validParams
        });
        dispatch(getDataSucceeded$1(cleanReceivedData(data2)));
      } catch (err) {
        if (axios__default.default.isCancel(err)) {
          return;
        }
        const resStatus = get__default.default(err, "response.status", null);
        if (resStatus === 404 && !isSingleType) {
          push(redirectionLink);
          return;
        } else if (resStatus === 404 && isSingleType) {
          dispatch(initForm(rawQuery, true));
        }
        if (resStatus === 403) {
          toggleNotification({
            type: "info",
            message: { id: getTranslation("permissions.not-allowed.update") }
          });
          push(redirectionLink);
        }
      }
    };
    const init2 = async () => {
      await dispatch(getData$1());
      dispatch(initForm(rawQuery));
    };
    if (!isMounted.current) {
      return () => {
      };
    }
    if (requestURL) {
      fetchData(source);
    } else {
      init2();
    }
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [
    fetchClient,
    cleanReceivedData,
    push,
    requestURL,
    dispatch,
    rawQuery,
    redirectionLink,
    toggleNotification,
    isSingleType,
    validParams
  ]);
  const displayErrors = React__namespace.useCallback(
    (err) => {
      toggleNotification({ type: "warning", message: formatAPIError(err) });
    },
    [toggleNotification, formatAPIError]
  );
  const onDelete = React__namespace.useCallback(
    async (trackerProperty) => {
      try {
        trackUsage("willDeleteEntry", trackerProperty);
        const locale = query?.plugins?.i18n?.locale;
        const params = isSingleType && locale ? { locale } : {};
        const { data: data2 } = await del(
          `/content-manager/${collectionType}/${slug}/${id}`,
          { params }
        );
        toggleNotification({
          type: "success",
          message: { id: getTranslation("success.record.delete") }
        });
        trackUsage("didDeleteEntry", trackerProperty);
        if (isSingleType) {
          dispatch(initForm(rawQuery, true));
        } else {
          replace(redirectionLink);
        }
        return Promise.resolve(data2);
      } catch (err) {
        trackUsage("didNotDeleteEntry", { error: err, ...trackerProperty });
        return Promise.reject(err);
      }
    },
    [
      trackUsage,
      del,
      collectionType,
      slug,
      id,
      toggleNotification,
      isSingleType,
      dispatch,
      rawQuery,
      replace,
      redirectionLink
    ]
  );
  const onPost = React__namespace.useCallback(
    async (body, trackerProperty) => {
      const isCloning = typeof origin === "string";
      try {
        dispatch(setStatus("submit-pending"));
        const { id: _id, ...restBody } = body;
        const { data: data2 } = await (isSingleType ? put : post)(
          isCloning ? `/content-manager/${collectionType}/${slug}/clone/${origin}` : `/content-manager/${collectionType}/${slug}`,
          isCloning ? restBody : body,
          {
            params: validParams
          }
        );
        trackUsage("didCreateEntry", trackerProperty);
        toggleNotification({
          type: "success",
          message: { id: getTranslation("success.record.save") }
        });
        setCurrentStep("contentManager.success");
        queryClient2.invalidateQueries(["relation"]);
        dispatch(submitSucceeded(cleanReceivedData(data2)));
        dispatch(setStatus("resolved"));
        if (!isSingleType) {
          replace(`/content-manager/${collectionType}/${slug}/${data2.id}${rawQuery}`);
        }
        return Promise.resolve(data2);
      } catch (err) {
        if (err instanceof axios.AxiosError) {
          displayErrors(err);
        }
        trackUsage("didNotCreateEntry", { error: err, ...trackerProperty });
        dispatch(setStatus("resolved"));
        return Promise.reject(err);
      }
    },
    [
      origin,
      dispatch,
      collectionType,
      put,
      post,
      slug,
      validParams,
      trackUsage,
      toggleNotification,
      setCurrentStep,
      queryClient2,
      cleanReceivedData,
      isSingleType,
      replace,
      rawQuery,
      displayErrors
    ]
  );
  const onDraftRelationCheck = React__namespace.useCallback(async () => {
    try {
      trackUsage("willCheckDraftRelations");
      dispatch(setStatus("draft-relation-check-pending"));
      const {
        data: { data: data2 }
      } = await fetchClient.get(
        isSingleType ? `/content-manager/${collectionType}/${slug}/actions/countDraftRelations` : `/content-manager/${collectionType}/${slug}/${id}/actions/countDraftRelations`
      );
      trackUsage("didCheckDraftRelations");
      dispatch(setStatus("resolved"));
      return data2;
    } catch (err) {
      if (err instanceof axios.AxiosError) {
        displayErrors(err);
      }
      dispatch(setStatus("resolved"));
      return Promise.reject(err);
    }
  }, [trackUsage, dispatch, fetchClient, isSingleType, collectionType, slug, id, displayErrors]);
  const onPublish = React__namespace.useCallback(async () => {
    try {
      trackUsage("willPublishEntry");
      dispatch(setStatus("publish-pending"));
      const { data: data2 } = await post(
        isSingleType ? `/content-manager/${collectionType}/${slug}/actions/publish` : `/content-manager/${collectionType}/${slug}/${id}/actions/publish`,
        void 0,
        {
          params: validParams
        }
      );
      trackUsage("didPublishEntry");
      dispatch(submitSucceeded(cleanReceivedData(data2)));
      dispatch(setStatus("resolved"));
      toggleNotification({
        type: "success",
        message: { id: getTranslation("success.record.publish") }
      });
      return Promise.resolve(data2);
    } catch (err) {
      if (err instanceof axios.AxiosError) {
        displayErrors(err);
      }
      dispatch(setStatus("resolved"));
      return Promise.reject(err);
    }
  }, [
    trackUsage,
    dispatch,
    post,
    isSingleType,
    collectionType,
    slug,
    id,
    validParams,
    cleanReceivedData,
    toggleNotification,
    displayErrors
  ]);
  const onPut = React__namespace.useCallback(
    async (body, trackerProperty) => {
      try {
        trackUsage("willEditEntry", trackerProperty);
        dispatch(setStatus("submit-pending"));
        const { data: data2 } = await put(`/content-manager/${collectionType}/${slug}/${id}`, body, {
          params: validParams
        });
        trackUsage("didEditEntry", trackerProperty);
        toggleNotification({
          type: "success",
          message: { id: getTranslation("success.record.save") }
        });
        queryClient2.invalidateQueries(["relation"]);
        dispatch(submitSucceeded(cleanReceivedData(data2)));
        dispatch(setStatus("resolved"));
        return Promise.resolve(data2);
      } catch (err) {
        trackUsage("didNotEditEntry", { error: err, ...trackerProperty });
        if (err instanceof axios.AxiosError) {
          displayErrors(err);
        }
        dispatch(setStatus("resolved"));
        return Promise.reject(err);
      }
    },
    [
      trackUsage,
      dispatch,
      put,
      collectionType,
      slug,
      id,
      validParams,
      toggleNotification,
      queryClient2,
      cleanReceivedData,
      displayErrors
    ]
  );
  const onUnpublish = React__namespace.useCallback(async () => {
    dispatch(setStatus("unpublish-pending"));
    try {
      trackUsage("willUnpublishEntry");
      const { data: data2 } = await post(
        isSingleType ? `/content-manager/${collectionType}/${slug}/actions/unpublish` : `/content-manager/${collectionType}/${slug}/${id}/actions/unpublish`,
        void 0,
        {
          params: validParams
        }
      );
      trackUsage("didUnpublishEntry");
      toggleNotification({
        type: "success",
        message: { id: getTranslation("success.record.unpublish") }
      });
      dispatch(submitSucceeded(cleanReceivedData(data2)));
      dispatch(setStatus("resolved"));
    } catch (err) {
      dispatch(setStatus("resolved"));
      if (err instanceof axios.AxiosError) {
        displayErrors(err);
      }
      return Promise.reject(err);
    }
  }, [
    dispatch,
    trackUsage,
    post,
    isSingleType,
    collectionType,
    slug,
    id,
    validParams,
    toggleNotification,
    cleanReceivedData,
    displayErrors
  ]);
  return children({
    componentsDataStructure,
    contentTypeDataStructure,
    data,
    isCreatingEntry,
    isLoadingForData: isLoading,
    onDelete,
    onPost,
    onPublish,
    onDraftRelationCheck,
    onPut,
    onUnpublish,
    status,
    redirectionLink
  });
};
const useContentTypeLayout = () => {
  const currentLayout = useTypedSelector(
    (state) => state["content-manager_editViewLayoutManager"].currentLayout
  );
  const getComponentLayout = React.useCallback(
    (componentUid) => {
      return currentLayout?.components?.[componentUid] ?? {};
    },
    [currentLayout]
  );
  return { ...currentLayout, getComponentLayout };
};
const AddComponentButton = ({
  hasError,
  isDisabled,
  isOpen,
  children,
  onClick
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    StyledButton,
    {
      type: "button",
      onClick,
      disabled: isDisabled,
      background: "neutral0",
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 4,
      paddingRight: 4,
      style: { cursor: isDisabled ? "not-allowed" : "pointer" },
      children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { as: "span", gap: 2, children: [
        /* @__PURE__ */ jsxRuntime.jsx(StyledAddIcon, { "aria-hidden": true, $isOpen: isOpen, $hasError: hasError && !isOpen }),
        /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.Typography,
          {
            variant: "pi",
            fontWeight: "bold",
            textColor: hasError && !isOpen ? "danger600" : "neutral500",
            children
          }
        )
      ] })
    }
  );
};
const StyledAddIcon = styled__default.default(Icons.PlusCircle)`
  height: ${({ theme }) => theme.spaces[6]};
  width: ${({ theme }) => theme.spaces[6]};
  transform: ${({ $isOpen }) => $isOpen ? "rotate(45deg)" : "rotate(0deg)"};

  > circle {
    fill: ${({ theme, $hasError }) => $hasError ? theme.colors.danger200 : theme.colors.neutral150};
  }
  > path {
    fill: ${({ theme, $hasError }) => $hasError ? theme.colors.danger600 : theme.colors.neutral600};
  }
`;
const StyledButton = styled__default.default(designSystem.BaseButton)`
  border-radius: 26px;
  border-color: ${({ theme }) => theme.colors.neutral150};
  box-shadow: ${({ theme }) => theme.shadows.filterShadow};

  &:hover {
    ${designSystem.Typography} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    ${StyledAddIcon} {
      > circle {
        fill: ${({ theme }) => theme.colors.primary600};
      }
      > path {
        fill: ${({ theme }) => theme.colors.neutral100};
      }
    }
  }
  &:active {
    ${designSystem.Typography} {
      color: ${({ theme }) => theme.colors.primary600};
    }
    ${StyledAddIcon} {
      > circle {
        fill: ${({ theme }) => theme.colors.primary600};
      }
      > path {
        fill: ${({ theme }) => theme.colors.neutral100};
      }
    }
  }
`;
const ComponentCategory = ({
  category,
  components = [],
  variant = "primary",
  isOpen,
  onAddComponent,
  onToggle
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const handleToggle = () => {
    onToggle(category);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Accordion, { expanded: isOpen, onToggle: handleToggle, size: "S", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.AccordionToggle,
      {
        variant,
        title: formatMessage({ id: category, defaultMessage: category }),
        togglePosition: "left"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.AccordionContent, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, paddingBottom: 4, paddingLeft: 3, paddingRight: 3, children: /* @__PURE__ */ jsxRuntime.jsx(Grid, { children: components.map(({ componentUid, info: { displayName, icon } }) => /* @__PURE__ */ jsxRuntime.jsx(
      ComponentBox,
      {
        as: "button",
        type: "button",
        background: "neutral100",
        justifyContent: "center",
        onClick: onAddComponent(componentUid),
        hasRadius: true,
        height: helperPlugin.pxToRem(84),
        shrink: 0,
        borderColor: "neutral200",
        children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", gap: 1, alignItems: "center", justifyContent: "center", children: [
          /* @__PURE__ */ jsxRuntime.jsx(ComponentIcon, { icon }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", fontWeight: "bold", textColor: "neutral600", children: formatMessage({ id: displayName, defaultMessage: displayName }) })
        ] })
      },
      componentUid
    )) }) }) })
  ] });
};
const Grid = styled__default.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${140 / 16}rem);
  grid-gap: ${({ theme }) => theme.spaces[1]};
`;
const ComponentBox = styled__default.default(designSystem.Flex)`
  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary200};
    background: ${({ theme }) => theme.colors.primary100};

    ${designSystem.Typography} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    /* > Flex > ComponentIcon */
    > div > div:first-child {
      background: ${({ theme }) => theme.colors.primary200};
      color: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const ComponentPicker = ({
  dynamicComponentsByCategory = {},
  isOpen,
  onClickAddComponent
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const [categoryToOpen, setCategoryToOpen] = React__namespace.useState("");
  React__namespace.useEffect(() => {
    const categoryKeys = Object.keys(dynamicComponentsByCategory);
    if (isOpen && categoryKeys.length > 0) {
      setCategoryToOpen(categoryKeys[0]);
    }
  }, [isOpen, dynamicComponentsByCategory]);
  const handleAddComponentToDz = (componentUid) => () => {
    onClickAddComponent(componentUid);
    setCategoryToOpen("");
  };
  const handleClickToggle = (categoryName) => {
    setCategoryToOpen((currentCat) => currentCat === categoryName ? "" : categoryName);
  };
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    designSystem.Box,
    {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 5,
      paddingRight: 5,
      background: "neutral0",
      shadow: "tableShadow",
      borderColor: "neutral150",
      hasRadius: true,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", textColor: "neutral600", children: formatMessage({
          id: getTranslation("components.DynamicZone.ComponentPicker-label"),
          defaultMessage: "Pick one component"
        }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 2, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.KeyboardNavigable, { attributeName: "data-strapi-accordion-toggle", children: Object.entries(dynamicComponentsByCategory).map(([category, components], index) => /* @__PURE__ */ jsxRuntime.jsx(
          ComponentCategory,
          {
            category,
            components,
            onAddComponent: handleAddComponentToDz,
            isOpen: category === categoryToOpen,
            onToggle: handleClickToggle,
            variant: index % 2 === 1 ? "primary" : "secondary"
          },
          category
        )) }) })
      ]
    }
  );
};
const ComponentInitializer = ({ error, isReadOnly, onClick }) => {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Box,
      {
        as: "button",
        background: "neutral100",
        borderColor: error ? "danger600" : "neutral200",
        disabled: isReadOnly,
        hasRadius: true,
        onClick,
        paddingTop: 9,
        paddingBottom: 9,
        type: "button",
        children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", gap: 2, children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", style: { cursor: isReadOnly ? "not-allowed" : "inherit" }, children: /* @__PURE__ */ jsxRuntime.jsx(CircleIcon, {}) }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "primary600", variant: "pi", fontWeight: "bold", children: formatMessage({
            id: getTranslation("components.empty-repeatable"),
            defaultMessage: "No entry yet. Click on the button below to add one."
          }) }) })
        ] })
      }
    ),
    error?.id && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "danger600", variant: "pi", children: formatMessage(error, { ...error.values }) })
  ] });
};
const CircleIcon = styled__default.default(Icons.PlusCircle)`
  width: ${helperPlugin.pxToRem(24)};
  height: ${helperPlugin.pxToRem(24)};
  > circle {
    fill: ${({ theme }) => theme.colors.primary200};
  }
  > path {
    fill: ${({ theme }) => theme.colors.primary600};
  }
`;
const componentStore = /* @__PURE__ */ new Map();
const useLazyComponents = (componentUids = []) => {
  const [lazyComponentStore, setLazyComponentStore] = React.useState(Object.fromEntries(componentStore));
  const newUids = componentUids.filter((uid) => !componentStore.get(uid));
  const [loading, setLoading] = React.useState(() => !!newUids.length);
  const customFieldsRegistry = helperPlugin.useCustomFields();
  React.useEffect(() => {
    const setStore = (store) => {
      setLazyComponentStore(store);
      setLoading(false);
    };
    const lazyLoadComponents = async (uids, components) => {
      const modules = await Promise.all(components);
      uids.forEach((uid, index) => {
        componentStore.set(uid, modules[index].default);
      });
      setStore(Object.fromEntries(componentStore));
    };
    if (newUids.length > 0) {
      setLoading(true);
      const componentPromises = newUids.reduce((arrayOfPromises, uid) => {
        const customField = customFieldsRegistry.get(uid);
        if (customField) {
          arrayOfPromises.push(customField.components.Input());
        }
        return arrayOfPromises;
      }, []);
      if (componentPromises.length > 0) {
        lazyLoadComponents(newUids, componentPromises);
      }
    }
  }, [newUids, customFieldsRegistry]);
  const cleanup = React.useCallback(() => {
    componentStore.clear();
    setLazyComponentStore({});
  }, []);
  return { isLazyLoading: loading, lazyComponentStore, cleanup };
};
const Hint = ({ id, error, name: name2, hint = "" }) => {
  if (hint.length === 0 || error) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "p", variant: "pi", id: `${id || name2}-hint`, textColor: "neutral600", children: hint });
};
const baseHandleConvert = (editor, attributesToSet) => {
  const [_, lastNodePath] = slate.Editor.last(editor, []);
  slate.Transforms.unwrapNodes(editor, {
    match: (node) => !slate.Editor.isEditor(node) && node.type === "list",
    split: true,
    at: editor.selection ?? lastNodePath
  });
  const [, updatedLastNodePath] = slate.Editor.last(editor, []);
  const entry = slate.Editor.above(editor, {
    match: (node) => !slate.Editor.isEditor(node) && node.type !== "text" && node.type !== "link",
    at: editor.selection ?? updatedLastNodePath
  });
  if (!entry || slate.Editor.isEditor(entry[0])) {
    return;
  }
  const [element, elementPath] = entry;
  slate.Transforms.setNodes(
    editor,
    {
      ...getAttributesToClear(element),
      ...attributesToSet
    },
    { at: elementPath }
  );
  return elementPath;
};
const getAttributesToClear = (element) => {
  const { children: _children, type: _type, ...extra } = element;
  const attributesToClear = Object.keys(extra).reduce(
    (currentAttributes, key) => ({ ...currentAttributes, [key]: null }),
    {}
  );
  return attributesToClear;
};
const isText$2 = (node) => {
  return slate.Node.isNode(node) && !slate.Editor.isEditor(node) && node.type === "text";
};
const pressEnterTwiceToExit = (editor) => {
  const nodeEntry = slate.Editor.above(editor, {
    match: (node2) => !slate.Editor.isEditor(node2) && !["link", "text"].includes(node2.type)
  });
  if (!nodeEntry || !editor.selection) {
    return;
  }
  const [node, nodePath] = nodeEntry;
  const isNodeEnd = slate.Editor.isEnd(editor, editor.selection.anchor, nodePath);
  const lastTextNode = node.children.at(-1);
  const isEmptyLine = isText$2(lastTextNode) && lastTextNode.text.endsWith("\n");
  if (isNodeEnd && isEmptyLine) {
    slate.Transforms.delete(editor, { distance: 1, unit: "character", reverse: true });
    slate.Transforms.insertNodes(editor, {
      type: "paragraph",
      children: [{ type: "text", text: "" }]
    });
    return;
  }
  slate.Transforms.insertText(editor, "\n");
  if (isNodeEnd) {
    ["bold", "italic", "underline", "strikethrough", "code"].forEach((modifier) => {
      slate.Editor.removeMark(editor, modifier);
    });
  }
};
const CodeBlock = styled__default.default.pre.attrs({ role: "code" })`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.neutral100};
  max-width: 100%;
  overflow: auto;
  padding: ${({ theme }) => `${theme.spaces[3]} ${theme.spaces[4]}`};
  flex-shrink: 1;
  & > code {
    font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas,
      monospace;
    color: ${({ theme }) => theme.colors.neutral800};
    overflow: auto;
    max-width: 100%;
  }
`;
const codeBlocks = {
  code: {
    renderElement: (props) => /* @__PURE__ */ jsxRuntime.jsx(CodeBlock, { ...props.attributes, children: /* @__PURE__ */ jsxRuntime.jsx("code", { children: props.children }) }),
    icon: Icons.Code,
    label: {
      id: "components.Blocks.blocks.code",
      defaultMessage: "Code block"
    },
    matchNode: (node) => node.type === "code",
    isInBlocksSelector: true,
    handleConvert(editor) {
      baseHandleConvert(editor, { type: "code" });
    },
    handleEnterKey(editor) {
      pressEnterTwiceToExit(editor);
    },
    snippets: ["```"],
    dragHandleTopMargin: "10px"
  }
};
const H1 = styled__default.default(designSystem.Typography).attrs({ as: "h1" })`
  font-size: ${42 / 16}rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;
const H2 = styled__default.default(designSystem.Typography).attrs({ as: "h2" })`
  font-size: ${35 / 16}rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;
const H3 = styled__default.default(designSystem.Typography).attrs({ as: "h3" })`
  font-size: ${29 / 16}rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;
const H4 = styled__default.default(designSystem.Typography).attrs({ as: "h4" })`
  font-size: ${24 / 16}rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;
const H5 = styled__default.default(designSystem.Typography).attrs({ as: "h5" })`
  font-size: ${20 / 16}rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;
const H6 = styled__default.default(designSystem.Typography).attrs({ as: "h6" })`
  font-size: 1rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;
const handleConvertToHeading = (editor, level) => {
  baseHandleConvert(editor, { type: "heading", level });
};
const headingBlocks = {
  "heading-one": {
    renderElement: (props) => /* @__PURE__ */ jsxRuntime.jsx(H1, { ...props.attributes, children: props.children }),
    icon: Icons.HeadingOne,
    label: {
      id: "components.Blocks.blocks.heading1",
      defaultMessage: "Heading 1"
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 1),
    matchNode: (node) => node.type === "heading" && node.level === 1,
    isInBlocksSelector: true,
    snippets: ["#"],
    dragHandleTopMargin: "14px"
  },
  "heading-two": {
    renderElement: (props) => /* @__PURE__ */ jsxRuntime.jsx(H2, { ...props.attributes, children: props.children }),
    icon: Icons.HeadingTwo,
    label: {
      id: "components.Blocks.blocks.heading2",
      defaultMessage: "Heading 2"
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 2),
    matchNode: (node) => node.type === "heading" && node.level === 2,
    isInBlocksSelector: true,
    snippets: ["##"],
    dragHandleTopMargin: "10px"
  },
  "heading-three": {
    renderElement: (props) => /* @__PURE__ */ jsxRuntime.jsx(H3, { ...props.attributes, children: props.children }),
    icon: Icons.HeadingThree,
    label: {
      id: "components.Blocks.blocks.heading3",
      defaultMessage: "Heading 3"
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 3),
    matchNode: (node) => node.type === "heading" && node.level === 3,
    isInBlocksSelector: true,
    snippets: ["###"],
    dragHandleTopMargin: "7px"
  },
  "heading-four": {
    renderElement: (props) => /* @__PURE__ */ jsxRuntime.jsx(H4, { ...props.attributes, children: props.children }),
    icon: Icons.HeadingFour,
    label: {
      id: "components.Blocks.blocks.heading4",
      defaultMessage: "Heading 4"
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 4),
    matchNode: (node) => node.type === "heading" && node.level === 4,
    isInBlocksSelector: true,
    snippets: ["####"],
    dragHandleTopMargin: "4px"
  },
  "heading-five": {
    renderElement: (props) => /* @__PURE__ */ jsxRuntime.jsx(H5, { ...props.attributes, children: props.children }),
    icon: Icons.HeadingFive,
    label: {
      id: "components.Blocks.blocks.heading5",
      defaultMessage: "Heading 5"
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 5),
    matchNode: (node) => node.type === "heading" && node.level === 5,
    isInBlocksSelector: true,
    snippets: ["#####"]
  },
  "heading-six": {
    renderElement: (props) => /* @__PURE__ */ jsxRuntime.jsx(H6, { ...props.attributes, children: props.children }),
    icon: Icons.HeadingSix,
    label: {
      id: "components.Blocks.blocks.heading6",
      defaultMessage: "Heading 6"
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 6),
    matchNode: (node) => node.type === "heading" && node.level === 6,
    isInBlocksSelector: true,
    snippets: ["######"],
    dragHandleTopMargin: "-2px"
  }
};
const ImageWrapper = styled__default.default(designSystem.Flex)`
  transition-property: box-shadow;
  transition-duration: 0.2s;
  ${(props) => props.isFocused && styled.css`
      box-shadow: ${props.theme.colors.primary600} 0px 0px 0px 3px;
    `}

  & > img {
    height: auto;
    // The max-height is decided with the design team, the 56px is the height of the toolbar
    max-height: calc(512px - 56px);
    max-width: 100%;
    object-fit: contain;
  }
`;
const IMAGE_SCHEMA_FIELDS = [
  "name",
  "alternativeText",
  "url",
  "caption",
  "width",
  "height",
  "formats",
  "hash",
  "ext",
  "mime",
  "size",
  "previewUrl",
  "provider",
  "provider_metadata",
  "createdAt",
  "updatedAt"
];
const pick = (object, keys) => {
  const entries = keys.map((key) => [key, object[key]]);
  return Object.fromEntries(entries);
};
const isImage = (element) => {
  return element.type === "image";
};
const Image = ({ attributes, children, element }) => {
  const editorIsFocused = slateReact.useFocused();
  const imageIsSelected = slateReact.useSelected();
  if (!isImage(element)) {
    return null;
  }
  const { url, alternativeText, width, height } = element.image;
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { ...attributes, children: [
    children,
    /* @__PURE__ */ jsxRuntime.jsx(
      ImageWrapper,
      {
        background: "neutral100",
        contentEditable: false,
        justifyContent: "center",
        isFocused: editorIsFocused && imageIsSelected,
        hasRadius: true,
        children: /* @__PURE__ */ jsxRuntime.jsx("img", { src: url, alt: alternativeText, width, height })
      }
    )
  ] });
};
const ImageDialog = () => {
  const [isOpen, setIsOpen] = React__namespace.useState(true);
  const { editor } = useBlocksEditorContext("ImageDialog");
  const { components } = helperPlugin.useLibrary();
  if (!components || !isOpen)
    return null;
  const MediaLibraryDialog = components["media-library"];
  const insertImages = (images) => {
    slate.Transforms.unwrapNodes(editor, {
      match: (node) => !slate.Editor.isEditor(node) && node.type === "list",
      split: true
    });
    const nodeEntryBeingReplaced = slate.Editor.above(editor, {
      match(node) {
        if (slate.Editor.isEditor(node))
          return false;
        const isInlineNode = ["text", "link"].includes(node.type);
        return !isInlineNode;
      }
    });
    if (!nodeEntryBeingReplaced)
      return;
    const [, pathToInsert] = nodeEntryBeingReplaced;
    slate.Transforms.removeNodes(editor);
    const nodesToInsert = images.map((image) => {
      const imageNode = {
        type: "image",
        image,
        children: [{ type: "text", text: "" }]
      };
      return imageNode;
    });
    slate.Transforms.insertNodes(editor, nodesToInsert, { at: pathToInsert });
    slate.Transforms.select(editor, pathToInsert);
  };
  const handleSelectAssets = (images) => {
    const formattedImages = images.map((image) => {
      const expectedImage = pick(image, IMAGE_SCHEMA_FIELDS);
      const nodeImage = {
        ...expectedImage,
        alternativeText: expectedImage.alternativeText || expectedImage.name,
        url: helperPlugin.prefixFileUrlWithBackendUrl(image.url)
      };
      return nodeImage;
    });
    insertImages(formattedImages);
    setIsOpen(false);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    MediaLibraryDialog,
    {
      allowedTypes: ["images"],
      onClose: () => setIsOpen(false),
      onSelectAssets: handleSelectAssets
    }
  );
};
const imageBlocks = {
  image: {
    renderElement: (props) => /* @__PURE__ */ jsxRuntime.jsx(Image, { ...props }),
    icon: Icons.Picture,
    label: {
      id: "components.Blocks.blocks.image",
      defaultMessage: "Image"
    },
    matchNode: (node) => node.type === "image",
    isInBlocksSelector: true,
    handleBackspaceKey(editor) {
      if (editor.children.length === 1) {
        slate.Transforms.setNodes(editor, {
          type: "paragraph",
          // @ts-expect-error we're only setting image as null so that Slate deletes it
          image: null,
          children: [{ type: "text", text: "" }]
        });
      } else {
        slate.Transforms.removeNodes(editor);
      }
    },
    handleEnterKey(editor) {
      slate.Transforms.insertNodes(editor, {
        type: "paragraph",
        children: [{ type: "text", text: "" }]
      });
    },
    handleConvert: () => {
      return () => /* @__PURE__ */ jsxRuntime.jsx(ImageDialog, {});
    },
    snippets: ["!["]
  }
};
const removeLink = (editor) => {
  slate.Transforms.unwrapNodes(editor, {
    match: (node) => !slate.Editor.isEditor(node) && slate.Element.isElement(node) && node.type === "link"
  });
};
const insertLink = (editor, { url }) => {
  if (editor.selection) {
    const linkNodes = Array.from(
      slate.Editor.nodes(editor, {
        at: editor.selection,
        match: (node) => !slate.Editor.isEditor(node) && node.type === "link"
      })
    );
    linkNodes.forEach(([, path]) => {
      slate.Transforms.unwrapNodes(editor, { at: path });
    });
    if (slate.Range.isCollapsed(editor.selection)) {
      const link = {
        type: "link",
        url: url ?? "",
        children: [{ type: "text", text: url }]
      };
      slate.Transforms.insertNodes(editor, link);
    } else {
      slate.Transforms.wrapNodes(editor, { type: "link", url: url ?? "" }, {
        split: true
      });
    }
  }
};
const editLink = (editor, link) => {
  const { url, text } = link;
  if (!editor.selection) {
    return;
  }
  const linkEntry = slate.Editor.above(editor, {
    match: (node) => !slate.Editor.isEditor(node) && node.type === "link"
  });
  if (linkEntry) {
    const [, linkPath] = linkEntry;
    slate.Transforms.setNodes(editor, { url }, { at: linkPath });
    if (text !== "" && text !== slate.Editor.string(editor, linkPath)) {
      const linkNodeChildrens = Array.from(slate.Node.children(editor, linkPath, { reverse: true }));
      linkNodeChildrens.forEach(([, childPath]) => {
        slate.Transforms.removeNodes(editor, { at: childPath });
      });
      slate.Transforms.insertNodes(editor, [{ type: "text", text }], { at: linkPath.concat(0) });
    }
  }
};
const getEntries = (object) => Object.entries(object);
const getKeys = (object) => Object.keys(object);
const isLinkNode = (element) => {
  return element.type === "link";
};
const isListNode$1 = (element) => {
  return element.type === "list";
};
const StyledBaseLink = styled__default.default(designSystem.BaseLink)`
  text-decoration: none;
`;
const RemoveButton = styled__default.default(designSystem.Button)`
  visibility: ${(props) => props.visible ? "visible" : "hidden"};
`;
const LinkContent = React__namespace.forwardRef(
  ({ link, children, attributes }, forwardedRef) => {
    const { formatMessage } = reactIntl.useIntl();
    const { editor } = useBlocksEditorContext("Link");
    const path = slateReact.ReactEditor.findPath(editor, link);
    const [popoverOpen, setPopoverOpen] = React__namespace.useState(
      editor.lastInsertedLinkPath ? slate.Path.equals(path, editor.lastInsertedLinkPath) : false
    );
    const linkRef = React__namespace.useRef(null);
    const elementText = link.children.map((child) => child.text).join("");
    const [linkText, setLinkText] = React__namespace.useState(elementText);
    const [linkUrl, setLinkUrl] = React__namespace.useState(link.url);
    const linkInputRef = React__namespace.useRef(null);
    const [showRemoveButton, setShowRemoveButton] = React__namespace.useState(false);
    const [isSaveDisabled, setIsSaveDisabled] = React__namespace.useState(false);
    const handleOpenEditPopover = (e) => {
      e.preventDefault();
      setPopoverOpen(true);
      setShowRemoveButton(true);
    };
    const onLinkChange = (e) => {
      setIsSaveDisabled(false);
      setLinkUrl(e.target.value);
      try {
        new URL(
          e.target.value?.startsWith("/") ? `https://strapi.io${e.target.value}` : e.target.value
        );
      } catch (error) {
        setIsSaveDisabled(true);
      }
    };
    const handleSave = (e) => {
      e.stopPropagation();
      if (editor.selection && slate.Range.isCollapsed(editor.selection)) {
        const [, parentPath] = slate.Editor.parent(editor, editor.selection.focus?.path);
        slate.Transforms.select(editor, parentPath);
      }
      editLink(editor, { url: linkUrl, text: linkText });
      setPopoverOpen(false);
      editor.lastInsertedLinkPath = null;
    };
    const handleDismiss = () => {
      setPopoverOpen(false);
      if (link.url === "") {
        removeLink(editor);
      }
      slateReact.ReactEditor.focus(editor);
    };
    const inputNotDirty = !linkText || !linkUrl || link.url && link.url === linkUrl && elementText && elementText === linkText;
    const composedRefs = composeRefs(linkRef, forwardedRef);
    React__namespace.useEffect(() => {
      if (popoverOpen)
        linkInputRef.current?.focus();
    }, [popoverOpen]);
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        StyledBaseLink,
        {
          ...attributes,
          ref: composedRefs,
          href: link.url,
          onClick: handleOpenEditPopover,
          color: "primary600",
          children
        }
      ),
      popoverOpen && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Popover, { source: linkRef, onDismiss: handleDismiss, padding: 4, contentEditable: false, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { as: "form", onSubmit: handleSave, direction: "column", gap: 4, children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field, { width: "368px", children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", gap: 1, alignItems: "stretch", children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.FieldLabel, { children: formatMessage({
            id: "components.Blocks.popover.text",
            defaultMessage: "Text"
          }) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.FieldInput,
            {
              name: "text",
              placeholder: formatMessage({
                id: "components.Blocks.popover.text.placeholder",
                defaultMessage: "Enter link text"
              }),
              value: linkText,
              onChange: (e) => {
                setLinkText(e.target.value);
              }
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field, { width: "368px", children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", gap: 1, alignItems: "stretch", children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.FieldLabel, { children: formatMessage({
            id: "components.Blocks.popover.link",
            defaultMessage: "Link"
          }) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.FieldInput,
            {
              ref: linkInputRef,
              name: "url",
              placeholder: formatMessage({
                id: "components.Blocks.popover.link.placeholder",
                defaultMessage: "Paste link"
              }),
              value: linkUrl,
              onChange: onLinkChange
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { justifyContent: "space-between", width: "100%", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            RemoveButton,
            {
              variant: "danger-light",
              onClick: () => removeLink(editor),
              visible: showRemoveButton,
              children: formatMessage({
                id: "components.Blocks.popover.remove",
                defaultMessage: "Remove"
              })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { variant: "tertiary", onClick: handleDismiss, children: formatMessage({
              id: "components.Blocks.popover.cancel",
              defaultMessage: "Cancel"
            }) }),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { type: "submit", disabled: Boolean(inputNotDirty) || isSaveDisabled, children: formatMessage({
              id: "components.Blocks.popover.save",
              defaultMessage: "Save"
            }) })
          ] })
        ] })
      ] }) })
    ] });
  }
);
const Link = React__namespace.forwardRef((props, forwardedRef) => {
  if (!isLinkNode(props.element)) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(LinkContent, { ...props, link: props.element, ref: forwardedRef });
});
const linkBlocks = {
  link: {
    renderElement: (props) => /* @__PURE__ */ jsxRuntime.jsx(Link, { element: props.element, attributes: props.attributes, children: props.children }),
    // No handleConvert here, links are created via the link button in the toolbar
    matchNode: (node) => node.type === "link",
    isInBlocksSelector: false
  }
};
const listStyle = styled.css`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[2]};
  margin-inline-start: ${({ theme }) => theme.spaces[0]};
  margin-inline-end: ${({ theme }) => theme.spaces[0]};
  padding-inline-start: ${({ theme }) => theme.spaces[2]};

  ol,
  ul {
    margin-block-start: ${({ theme }) => theme.spaces[0]};
    margin-block-end: ${({ theme }) => theme.spaces[0]};
  }

  li {
    margin-inline-start: ${({ theme }) => theme.spaces[3]};
  }
`;
const Orderedlist = styled__default.default.ol`
  list-style-type: ${(props) => props.listStyleType};
  ${listStyle}
`;
const Unorderedlist = styled__default.default.ul`
  list-style-type: ${(props) => props.listStyleType};
  ${listStyle}
`;
const orderedStyles = ["decimal", "lower-alpha", "upper-roman"];
const unorderedStyles = ["disc", "circle", "square"];
const List = ({ attributes, children, element }) => {
  if (!isListNode$1(element)) {
    return null;
  }
  const listStyles = element.format === "ordered" ? orderedStyles : unorderedStyles;
  const nextIndex = (element.indentLevel || 0) % listStyles.length;
  const listStyleType = listStyles[nextIndex];
  if (element.format === "ordered") {
    return /* @__PURE__ */ jsxRuntime.jsx(Orderedlist, { listStyleType, ...attributes, children });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(Unorderedlist, { listStyleType, ...attributes, children });
};
const replaceListWithEmptyBlock = (editor, currentListPath) => {
  slate.Transforms.removeNodes(editor, { at: currentListPath });
  if (currentListPath[0] === 0) {
    slate.Transforms.insertNodes(
      editor,
      {
        type: "paragraph",
        children: [{ type: "text", text: "" }]
      },
      { at: currentListPath }
    );
    slate.Transforms.select(editor, currentListPath);
  }
};
const isText$1 = (node) => {
  return slate.Node.isNode(node) && !slate.Editor.isEditor(node) && node.type === "text";
};
const handleBackspaceKeyOnList = (editor, event) => {
  if (!editor.selection)
    return;
  const [currentListItem, currentListItemPath] = slate.Editor.parent(editor, editor.selection.anchor);
  const [currentList, currentListPath] = slate.Editor.parent(editor, currentListItemPath);
  const isListEmpty = currentList.children.length === 1 && isText$1(currentListItem.children[0]) && currentListItem.children[0].text === "";
  const isListItemEmpty = currentListItem.children.length === 1 && isText$1(currentListItem.children[0]) && currentListItem.children[0].text === "";
  const isFocusAtTheBeginningOfAChild = editor.selection.focus.offset === 0 && editor.selection.focus.path.at(-2) === 0;
  if (isListEmpty) {
    const parentListEntry = slate.Editor.above(editor, {
      at: currentListPath,
      match: (node) => !slate.Editor.isEditor(node) && node.type === "list"
    });
    if (!parentListEntry) {
      event.preventDefault();
      replaceListWithEmptyBlock(editor, currentListPath);
    }
  } else if (isFocusAtTheBeginningOfAChild) {
    slate.Transforms.liftNodes(editor, {
      match: (node) => !slate.Editor.isEditor(node) && node.type === "list-item"
    });
    slate.Transforms.setNodes(editor, { type: "paragraph" });
  } else if (isListItemEmpty) {
    const previousEntry = slate.Editor.previous(editor, {
      at: currentListItemPath
    });
    const nextEntry = slate.Editor.next(editor, {
      at: currentListItemPath
    });
    if (previousEntry && nextEntry) {
      event.preventDefault();
      slate.Transforms.removeNodes(editor, {
        at: currentListItemPath
      });
      const [previousList] = previousEntry;
      const [nextList] = nextEntry;
      if (!slate.Editor.isEditor(previousList) && !isText$1(previousList) && isListNode$1(previousList) && !slate.Editor.isEditor(nextList) && !isText$1(nextList) && isListNode$1(nextList)) {
        if (previousList.type === "list" && nextList.type === "list" && previousList.format === nextList.format && previousList.indentLevel === nextList.indentLevel) {
          slate.Transforms.mergeNodes(editor, {
            at: currentListItemPath
          });
        }
      }
    }
  }
};
const handleEnterKeyOnList = (editor) => {
  const currentListItemEntry = slate.Editor.above(editor, {
    match: (node) => !slate.Editor.isEditor(node) && node.type === "list-item"
  });
  if (!currentListItemEntry || !editor.selection) {
    return;
  }
  const [currentListItem, currentListItemPath] = currentListItemEntry;
  const [currentList, currentListPath] = slate.Editor.parent(editor, currentListItemPath);
  const isListEmpty = currentList.children.length === 1 && isText$1(currentListItem.children[0]) && currentListItem.children[0].text === "";
  const isListItemEmpty = currentListItem.children.length === 1 && isText$1(currentListItem.children[0]) && currentListItem.children[0].text === "";
  const isFocusAtTheBeginningOfAChild = editor.selection.focus.offset === 0 && editor.selection.focus.path.at(-1) === 0;
  if (isListEmpty) {
    replaceListWithEmptyBlock(editor, currentListPath);
  } else if (isFocusAtTheBeginningOfAChild && !isListItemEmpty) {
    const currentNode = slate.Editor.above(editor, { at: editor.selection.anchor });
    slate.Transforms.insertNodes(editor, { type: "list-item", children: [{ type: "text", text: "" }] });
    if (currentNode) {
      const path = currentNode[1];
      const updatedPath = [...path.slice(0, -1), path[path.length - 1] + 1];
      slate.Transforms.select(editor, {
        anchor: { path: updatedPath.concat(0), offset: 0 },
        focus: { path: updatedPath.concat(0), offset: 0 }
      });
    }
  } else if (isListItemEmpty) {
    if (!slate.Editor.isEditor(currentList) && isListNode$1(currentList) && currentList?.indentLevel && currentList.indentLevel > 0) {
      const previousIndentLevel = currentList.indentLevel - 1;
      const parentListNodeEntry = slate.Editor.above(editor, {
        match: (node) => !slate.Editor.isEditor(node) && node.type === "list" && (node.indentLevel || 0) === previousIndentLevel
      });
      if (parentListNodeEntry) {
        const modifiedPath = currentListItemPath.slice(0, -1);
        if (modifiedPath.length > 0) {
          modifiedPath[modifiedPath.length - 1] += 1;
        }
        slate.Transforms.moveNodes(editor, {
          at: currentListItemPath,
          to: modifiedPath
        });
        return;
      }
    }
    slate.Transforms.removeNodes(editor, { at: currentListItemPath });
    const createdParagraphPath = slate.Path.next(currentListPath);
    slate.Transforms.insertNodes(
      editor,
      {
        type: "paragraph",
        children: [{ type: "text", text: "" }]
      },
      { at: createdParagraphPath }
    );
    slate.Transforms.select(editor, createdParagraphPath);
  } else {
    const isNodeEnd = slate.Editor.isEnd(editor, editor.selection.anchor, currentListItemPath);
    if (isNodeEnd) {
      slate.Transforms.insertNodes(editor, { type: "list-item", children: [{ type: "text", text: "" }] });
    } else {
      slate.Transforms.splitNodes(editor);
    }
  }
};
const handleConvertToList = (editor, format) => {
  const convertedPath = baseHandleConvert(editor, { type: "list-item" });
  if (!convertedPath)
    return;
  slate.Transforms.wrapNodes(editor, { type: "list", format, children: [] }, { at: convertedPath });
};
const handleTabOnList = (editor) => {
  const currentListItemEntry = slate.Editor.above(editor, {
    match: (node) => !slate.Editor.isEditor(node) && node.type === "list-item"
  });
  if (!currentListItemEntry || !editor.selection) {
    return;
  }
  const [currentListItem, currentListItemPath] = currentListItemEntry;
  const [currentList] = slate.Editor.parent(editor, currentListItemPath);
  if (currentListItem === currentList.children[0])
    return;
  const currentListItemIndex = currentList.children.findIndex((item) => item === currentListItem);
  const previousNode = currentList.children[currentListItemIndex - 1];
  if (previousNode.type === "list") {
    const nodePath = slateReact.ReactEditor.findPath(editor, previousNode);
    const insertAtPath = previousNode.children.length;
    slate.Transforms.moveNodes(editor, {
      at: currentListItemPath,
      to: nodePath.concat(insertAtPath)
    });
    return;
  }
  if (!slate.Editor.isEditor(currentList) && isListNode$1(currentList)) {
    slate.Transforms.wrapNodes(editor, {
      type: "list",
      format: currentList.format,
      indentLevel: (currentList.indentLevel || 0) + 1,
      children: []
    });
  }
};
const listBlocks = {
  "list-ordered": {
    renderElement: (props) => /* @__PURE__ */ jsxRuntime.jsx(List, { ...props }),
    label: {
      id: "components.Blocks.blocks.orderedList",
      defaultMessage: "Numbered list"
    },
    icon: Icons.NumberList,
    matchNode: (node) => node.type === "list" && node.format === "ordered",
    isInBlocksSelector: true,
    handleConvert: (editor) => handleConvertToList(editor, "ordered"),
    handleEnterKey: handleEnterKeyOnList,
    handleBackspaceKey: handleBackspaceKeyOnList,
    handleTab: handleTabOnList,
    snippets: ["1."]
  },
  "list-unordered": {
    renderElement: (props) => /* @__PURE__ */ jsxRuntime.jsx(List, { ...props }),
    label: {
      id: "components.Blocks.blocks.unorderedList",
      defaultMessage: "Bulleted list"
    },
    icon: Icons.BulletList,
    matchNode: (node) => node.type === "list" && node.format === "unordered",
    isInBlocksSelector: true,
    handleConvert: (editor) => handleConvertToList(editor, "unordered"),
    handleEnterKey: handleEnterKeyOnList,
    handleBackspaceKey: handleBackspaceKeyOnList,
    handleTab: handleTabOnList,
    snippets: ["-", "*", "+"]
  },
  "list-item": {
    renderElement: (props) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "li", ...props.attributes, children: props.children }),
    // No handleConvert, list items are created when converting to the parent list
    matchNode: (node) => node.type === "list-item",
    isInBlocksSelector: false,
    dragHandleTopMargin: "-2px"
  }
};
const paragraphBlocks = {
  paragraph: {
    renderElement: (props) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "p", variant: "omega", ...props.attributes, children: props.children }),
    icon: Icons.Paragraph,
    label: {
      id: "components.Blocks.blocks.text",
      defaultMessage: "Text"
    },
    matchNode: (node) => node.type === "paragraph",
    isInBlocksSelector: true,
    dragHandleTopMargin: "-2px",
    handleConvert(editor) {
      baseHandleConvert(editor, { type: "paragraph" });
    },
    handleEnterKey(editor) {
      if (!editor.selection) {
        return;
      }
      const anchorPathInitialPosition = editor.selection.anchor.path;
      slate.Transforms.splitNodes(editor, {
        // Makes sure we always create a new node,
        // even if there's nothing to the right of the cursor in the node.
        always: true
      });
      const parentBlockEntry = slate.Editor.above(editor, {
        match: (node) => !slate.Editor.isEditor(node) && node.type !== "text"
      });
      if (!parentBlockEntry) {
        return;
      }
      const [, parentBlockPath] = parentBlockEntry;
      const isNodeEnd = slate.Editor.isEnd(editor, editor.selection.anchor, parentBlockPath);
      const [fragmentedNode] = slate.Editor.parent(editor, editor.selection.anchor.path);
      slate.Transforms.removeNodes(editor);
      const hasNextNode = editor.children.length - anchorPathInitialPosition[0] > 1;
      slate.Transforms.insertNodes(
        editor,
        {
          type: "paragraph",
          // Don't carry over the modifiers from the previous node if there was no text after the cursor
          children: isNodeEnd ? [{ type: "text", text: "" }] : fragmentedNode.children
        },
        {
          at: hasNextNode ? [anchorPathInitialPosition[0] + 1] : [editor.children.length]
        }
      );
      slate.Transforms.select(editor, editor.start([anchorPathInitialPosition[0] + 1]));
    }
  }
};
const Blockquote = styled__default.default.blockquote.attrs({ role: "blockquote" })`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  border-left: ${({ theme }) => `${theme.spaces[1]} solid ${theme.colors.neutral200}`};
  padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[4]};
  color: ${({ theme }) => theme.colors.neutral600};
`;
const quoteBlocks = {
  quote: {
    renderElement: (props) => (
      // The div is needed to make sure the padding bottom from BlocksContent is applied properly
      // when the quote is the last block in the editor
      /* @__PURE__ */ jsxRuntime.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsx(Blockquote, { ...props.attributes, children: props.children }) })
    ),
    icon: Icons.Quote,
    label: {
      id: "components.Blocks.blocks.quote",
      defaultMessage: "Quote"
    },
    matchNode: (node) => node.type === "quote",
    isInBlocksSelector: true,
    handleConvert(editor) {
      baseHandleConvert(editor, { type: "quote" });
    },
    handleEnterKey(editor) {
      pressEnterTwiceToExit(editor);
    },
    snippets: [">"],
    dragHandleTopMargin: "6px"
  }
};
const ToolbarWrapper = styled__default.default(designSystem.Flex)`
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`;
const Separator = styled__default.default(Toolbar__namespace.Separator)`
  background: ${({ theme }) => theme.colors.neutral150};
  width: 1px;
  height: ${helperPlugin.pxToRem(24)};
`;
const FlexButton = styled__default.default(designSystem.Flex)`
  // Inherit the not-allowed cursor from ToolbarWrapper when disabled
  &[aria-disabled] {
    cursor: inherit;
  }

  &[aria-disabled='false'] {
    cursor: pointer;

    // Only apply hover styles if the button is enabled
    &:hover {
      background: ${({ theme }) => theme.colors.primary100};
    }
  }
`;
const SelectWrapper = styled__default.default(designSystem.Box)`
  // Styling changes to SingleSelect component don't work, so adding wrapper to target SingleSelect
  div[role='combobox'] {
    border: none;
    cursor: pointer;
    min-height: unset;
    padding-top: 6px;
    padding-bottom: 6px;

    &[aria-disabled='false']:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.primary100};
    }

    &[aria-disabled] {
      background: transparent;
      cursor: inherit;

      // Select text and icons should also have disabled color
      span {
        color: ${({ theme }) => theme.colors.neutral600};
      }
    }
  }
`;
function useConversionModal() {
  const [modalElement, setModalComponent] = React__namespace.useState(null);
  const handleConversionResult = (renderModal) => {
    if (renderModal) {
      setModalComponent(React__namespace.cloneElement(renderModal(), { key: Date.now() }));
    }
  };
  return { modalElement, handleConversionResult };
}
const ToolbarButton = ({
  icon,
  name: name2,
  label,
  isActive,
  disabled,
  handleClick
}) => {
  const { editor } = useBlocksEditorContext("ToolbarButton");
  const { formatMessage } = reactIntl.useIntl();
  const labelMessage = formatMessage(label);
  const enabledColor = isActive ? "primary600" : "neutral600";
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tooltip, { description: labelMessage, children: /* @__PURE__ */ jsxRuntime.jsx(
    Toolbar__namespace.ToggleItem,
    {
      value: name2,
      "data-state": isActive ? "on" : "off",
      onMouseDown: (e) => {
        e.preventDefault();
        handleClick();
        slateReact.ReactEditor.focus(editor);
      },
      "aria-disabled": disabled,
      disabled,
      "aria-label": labelMessage,
      asChild: true,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        FlexButton,
        {
          as: "button",
          background: isActive ? "primary100" : "",
          alignItems: "center",
          justifyContent: "center",
          width: 7,
          height: 7,
          hasRadius: true,
          children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Icon, { width: 3, height: 3, as: icon, color: disabled ? "neutral300" : enabledColor })
        }
      )
    }
  ) });
};
const BlocksDropdown = () => {
  const { editor, blocks, disabled } = useBlocksEditorContext("BlocksDropdown");
  const { formatMessage } = reactIntl.useIntl();
  const { modalElement, handleConversionResult } = useConversionModal();
  const blockKeysToInclude = getEntries(blocks).reduce((currentKeys, entry) => {
    const [key, block] = entry;
    return block.isInBlocksSelector ? [...currentKeys, key] : currentKeys;
  }, []);
  const [blockSelected, setBlockSelected] = React__namespace.useState("paragraph");
  const handleSelect = (optionKey) => {
    if (!isSelectorBlockKey(optionKey)) {
      return;
    }
    const editorIsEmpty = editor.children.length === 1 && slate.Editor.isEmpty(editor, editor.children[0]);
    if (!editor.selection && !editorIsEmpty) {
      slate.Transforms.insertNodes(
        editor,
        {
          type: "quote",
          children: [{ type: "text", text: "" }]
        },
        {
          select: true
          // Since there's no selection, Slate will automatically insert the node at the end
        }
      );
    } else if (!editor.selection && editorIsEmpty) {
      slate.Transforms.select(editor, slate.Editor.start(editor, [0, 0]));
    }
    const currentListEntry = slate.Editor.above(editor, {
      match: (node) => !slate.Editor.isEditor(node) && node.type === "list"
    });
    if (currentListEntry && ["list-ordered", "list-unordered"].includes(optionKey)) {
      const [currentList, currentListPath] = currentListEntry;
      const format = optionKey === "list-ordered" ? "ordered" : "unordered";
      if (!slate.Editor.isEditor(currentList) && isListNode(currentList)) {
        if (currentList.format !== format) {
          slate.Transforms.setNodes(editor, { format }, { at: currentListPath });
        }
      }
      return;
    }
    const maybeRenderModal = blocks[optionKey].handleConvert?.(editor);
    handleConversionResult(maybeRenderModal);
    setBlockSelected(optionKey);
    slateReact.ReactEditor.focus(editor);
  };
  const preventSelectFocus = (e) => e.preventDefault();
  React__namespace.useEffect(() => {
    if (editor.selection) {
      let selectedNode;
      const currentListEntry = slate.Editor.above(editor, {
        match: (node) => !slate.Editor.isEditor(node) && node.type === "list",
        at: editor.selection.anchor
      });
      if (currentListEntry) {
        const [currentList] = currentListEntry;
        selectedNode = currentList;
      } else {
        const [anchorNode] = slate.Editor.parent(editor, editor.selection.anchor, {
          edge: "start",
          depth: 2
        });
        if (anchorNode.type === "list-item") {
          slate.Transforms.setNodes(editor, { type: "paragraph" });
          selectedNode = { ...anchorNode, type: "paragraph" };
        } else {
          selectedNode = anchorNode;
        }
      }
      const anchorBlockKey = getKeys(blocks).find(
        (blockKey) => !slate.Editor.isEditor(selectedNode) && blocks[blockKey].matchNode(selectedNode)
      );
      if (anchorBlockKey && anchorBlockKey !== blockSelected) {
        setBlockSelected(anchorBlockKey);
      }
    }
  }, [editor.selection, editor, blocks, blockSelected]);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(SelectWrapper, { children: /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.SingleSelect,
      {
        startIcon: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Icon, { as: blocks[blockSelected].icon }),
        onChange: handleSelect,
        placeholder: formatMessage(blocks[blockSelected].label),
        value: blockSelected,
        onCloseAutoFocus: preventSelectFocus,
        "aria-label": formatMessage({
          id: "components.Blocks.blocks.selectBlock",
          defaultMessage: "Select a block"
        }),
        disabled,
        children: blockKeysToInclude.map((key) => /* @__PURE__ */ jsxRuntime.jsx(
          BlockOption,
          {
            value: key,
            label: blocks[key].label,
            icon: blocks[key].icon,
            blockSelected
          },
          key
        ))
      }
    ) }),
    modalElement
  ] });
};
const BlockOption = ({ value, icon, label, blockSelected }) => {
  const { formatMessage } = reactIntl.useIntl();
  const isSelected = value === blockSelected;
  return /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.SingleSelectOption,
    {
      startIcon: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Icon, { as: icon, color: isSelected ? "primary600" : "neutral600" }),
      value,
      children: formatMessage(label)
    }
  );
};
const isListNode = (node) => {
  return slate.Node.isNode(node) && !slate.Editor.isEditor(node) && node.type === "list";
};
const ListButton = ({ block, format }) => {
  const { editor, disabled, blocks } = useBlocksEditorContext("ListButton");
  const isListActive = () => {
    if (!editor.selection)
      return false;
    const currentListEntry = slate.Editor.above(editor, {
      match: (node) => !slate.Editor.isEditor(node) && node.type === "list",
      at: editor.selection.anchor
    });
    if (currentListEntry) {
      const [currentList] = currentListEntry;
      if (!slate.Editor.isEditor(currentList) && isListNode(currentList) && currentList.format === format)
        return true;
    }
    return false;
  };
  const toggleList = (format2) => {
    let currentListEntry;
    if (editor.selection) {
      currentListEntry = slate.Editor.above(editor, {
        match: (node) => !slate.Editor.isEditor(node) && node.type === "list"
      });
    } else {
      const [_, lastNodePath] = slate.Editor.last(editor, []);
      currentListEntry = slate.Editor.above(editor, {
        match: (node) => !slate.Editor.isEditor(node) && node.type === "list",
        at: lastNodePath
      });
    }
    if (!currentListEntry) {
      blocks[`list-${format2}`].handleConvert(editor);
      return;
    }
    const [currentList, currentListPath] = currentListEntry;
    if (!slate.Editor.isEditor(currentList) && isListNode(currentList)) {
      if (currentList.format !== format2) {
        slate.Transforms.setNodes(editor, { format: format2 }, { at: currentListPath });
      } else {
        blocks["paragraph"].handleConvert(editor);
      }
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToolbarButton,
    {
      icon: block.icon,
      name: format,
      label: block.label,
      isActive: isListActive(),
      disabled,
      handleClick: () => toggleList(format)
    }
  );
};
const LinkButton = ({ disabled }) => {
  const { editor } = useBlocksEditorContext("LinkButton");
  const isLinkActive = () => {
    const { selection } = editor;
    if (!selection)
      return false;
    const [match] = Array.from(
      slate.Editor.nodes(editor, {
        at: slate.Editor.unhangRange(editor, selection),
        match: (node) => slate.Element.isElement(node) && node.type === "link"
      })
    );
    return Boolean(match);
  };
  const isLinkDisabled = () => {
    if (disabled) {
      return true;
    }
    if (!editor.selection) {
      return false;
    }
    const anchorNodeEntry = slate.Editor.above(editor, {
      at: editor.selection.anchor,
      match: (node) => !slate.Editor.isEditor(node) && node.type !== "text"
    });
    const focusNodeEntry = slate.Editor.above(editor, {
      at: editor.selection.focus,
      match: (node) => !slate.Editor.isEditor(node) && node.type !== "text"
    });
    if (!anchorNodeEntry || !focusNodeEntry) {
      return false;
    }
    return anchorNodeEntry[0] !== focusNodeEntry[0];
  };
  const addLink = () => {
    editor.shouldSaveLinkPath = true;
    insertLink(editor, { url: "" });
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToolbarButton,
    {
      icon: Icons.Link,
      name: "link",
      label: {
        id: "components.Blocks.link",
        defaultMessage: "Link"
      },
      isActive: isLinkActive(),
      handleClick: addLink,
      disabled: isLinkDisabled()
    }
  );
};
const BlocksToolbar = () => {
  const { editor, blocks, modifiers: modifiers2, disabled } = useBlocksEditorContext("BlocksToolbar");
  const checkButtonDisabled = () => {
    if (disabled) {
      return true;
    }
    if (!editor.selection) {
      return false;
    }
    const selectedNode = editor.children[editor.selection.anchor.path[0]];
    if (["image", "code"].includes(selectedNode.type)) {
      return true;
    }
    return false;
  };
  const isButtonDisabled = checkButtonDisabled();
  return /* @__PURE__ */ jsxRuntime.jsx(Toolbar__namespace.Root, { "aria-disabled": disabled, asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(ToolbarWrapper, { gap: 2, padding: 2, children: [
    /* @__PURE__ */ jsxRuntime.jsx(BlocksDropdown, {}),
    /* @__PURE__ */ jsxRuntime.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntime.jsx(Toolbar__namespace.ToggleGroup, { type: "multiple", asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 1, children: [
      Object.entries(modifiers2).map(([name2, modifier]) => /* @__PURE__ */ jsxRuntime.jsx(
        ToolbarButton,
        {
          name: name2,
          icon: modifier.icon,
          label: modifier.label,
          isActive: modifier.checkIsActive(editor),
          handleClick: () => modifier.handleToggle(editor),
          disabled: isButtonDisabled
        },
        name2
      )),
      /* @__PURE__ */ jsxRuntime.jsx(LinkButton, { disabled: isButtonDisabled })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntime.jsx(Toolbar__namespace.ToggleGroup, { type: "single", asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 1, children: [
      /* @__PURE__ */ jsxRuntime.jsx(ListButton, { block: blocks["list-unordered"], format: "unordered" }),
      /* @__PURE__ */ jsxRuntime.jsx(ListButton, { block: blocks["list-ordered"], format: "ordered" })
    ] }) })
  ] }) });
};
const StyledEditable = styled__default.default(slateReact.Editable)`
  // The outline style is set on the wrapper with :focus-within
  outline: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[3]};
  height: 100%;
  // For fullscreen align input in the center with fixed width
  width: ${(props) => props.isExpandedMode ? "512px" : "100%"};
  margin: auto;

  > *:last-child {
    padding-bottom: ${({ theme }) => theme.spaces[3]};
  }
`;
const Wrapper$1 = styled__default.default(designSystem.Box)`
  position: ${({ isOverDropTarget }) => isOverDropTarget && "relative"};
`;
const DropPlaceholder = styled__default.default(designSystem.Box)`
  position: absolute;
  right: 0;

  // Show drop placeholder 8px above or below the drop target
  ${({ dragDirection, theme, placeholderMargin }) => styled.css`
    top: ${dragDirection === DIRECTIONS.UPWARD && `-${theme.spaces[placeholderMargin]}`};
    bottom: ${dragDirection === DIRECTIONS.DOWNWARD && `-${theme.spaces[placeholderMargin]}`};
  `}
`;
const DragItem = styled__default.default(designSystem.Flex)`
  // Style each block rendered using renderElement()
  & > [data-slate-node='element'] {
    width: 100%;
    opacity: inherit;
  }

  // Set the visibility of drag button
  [role='button'] {
    visibility: ${(props) => props.dragVisibility};
    opacity: inherit;
  }
  &[aria-disabled='true'] {
    user-drag: none;
  }
`;
const DragIconButton = styled__default.default(designSystem.IconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: ${({ theme }) => theme.spaces[4]};
  height: ${({ theme }) => theme.spaces[6]};
  visibility: hidden;
  cursor: grab;
  opacity: inherit;
  margin-top: ${(props) => props.dragHandleTopMargin ?? 0};

  &:hover {
    background: ${({ theme }) => theme.colors.neutral200};
  }
  &:active {
    cursor: grabbing;
  }
  &[aria-disabled='true'] {
    cursor: not-allowed;
    background: transparent;
  }
  svg {
    height: auto;
    width: ${({ theme }) => theme.spaces[3]};

    path {
      fill: ${({ theme }) => theme.colors.neutral700};
    }
  }
`;
const DragAndDropElement = ({
  children,
  index,
  setDragDirection,
  dragDirection,
  dragHandleTopMargin
}) => {
  const { editor, disabled, name: name2, setLiveText } = useBlocksEditorContext("drag-and-drop");
  const { formatMessage } = reactIntl.useIntl();
  const [dragVisibility, setDragVisibility] = React__namespace.useState("hidden");
  const handleMoveBlock = React__namespace.useCallback(
    (newIndex, currentIndex) => {
      slate.Transforms.moveNodes(editor, {
        at: currentIndex,
        to: newIndex
      });
      const currentIndexPosition = [currentIndex[0] + 1, ...currentIndex.slice(1)];
      const newIndexPosition = [newIndex[0] + 1, ...newIndex.slice(1)];
      setLiveText(
        formatMessage(
          {
            id: getTranslation("components.Blocks.dnd.reorder"),
            defaultMessage: "{item}, moved. New position in the editor: {position}."
          },
          {
            item: `${name2}.${currentIndexPosition.join(",")}`,
            position: `${newIndexPosition.join(",")} of ${editor.children.length}`
          }
        )
      );
    },
    [editor, formatMessage, name2, setLiveText]
  );
  const [{ handlerId, isDragging, isOverDropTarget, direction }, blockRef, dropRef, dragRef] = useDragAndDrop(!disabled, {
    type: `${ItemTypes.BLOCKS}_${name2}`,
    index,
    item: {
      index,
      displayedValue: children
    },
    onDropItem(currentIndex, newIndex) {
      if (newIndex)
        handleMoveBlock(newIndex, currentIndex);
    }
  });
  const composedBoxRefs = composeRefs(blockRef, dropRef);
  React__namespace.useEffect(() => {
    if (direction) {
      setDragDirection(direction);
    }
  }, [direction, setDragDirection]);
  React__namespace.useEffect(() => {
    setDragVisibility("hidden");
  }, [editor.selection]);
  return /* @__PURE__ */ jsxRuntime.jsxs(Wrapper$1, { ref: (ref) => composedBoxRefs(ref), isOverDropTarget, children: [
    isOverDropTarget && /* @__PURE__ */ jsxRuntime.jsx(
      DropPlaceholder,
      {
        borderStyle: "solid",
        borderColor: "secondary200",
        borderWidth: "2px",
        width: "calc(100% - 24px)",
        marginLeft: "auto",
        dragDirection,
        placeholderMargin: children.props.as && children.props.as === "li" ? 1 : 2
      }
    ),
    isDragging ? /* @__PURE__ */ jsxRuntime.jsx(CloneDragItem, { dragHandleTopMargin, children }) : /* @__PURE__ */ jsxRuntime.jsxs(
      DragItem,
      {
        ref: dragRef,
        "data-handler-id": handlerId,
        gap: 2,
        paddingLeft: 2,
        alignItems: "start",
        onDragStart: (event) => {
          const target = event.target;
          const currentTarget = event.currentTarget;
          if (target.getAttribute("role") !== "button") {
            event.preventDefault();
          } else {
            currentTarget.style.opacity = "0.5";
          }
        },
        onDragEnd: (event) => {
          const currentTarget = event.currentTarget;
          currentTarget.style.opacity = "1";
        },
        onMouseMove: () => setDragVisibility("visible"),
        onSelect: () => setDragVisibility("visible"),
        onMouseLeave: () => setDragVisibility("hidden"),
        "aria-disabled": disabled,
        dragVisibility,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            DragIconButton,
            {
              forwardedAs: "div",
              role: "button",
              tabIndex: 0,
              "aria-label": formatMessage({
                id: getTranslation("components.DragHandle-label"),
                defaultMessage: "Drag"
              }),
              onClick: (e) => e.stopPropagation(),
              "aria-disabled": disabled,
              disabled,
              draggable: true,
              dragHandleTopMargin,
              children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Drag, { color: "neutral600" })
            }
          ),
          children
        ]
      }
    )
  ] });
};
const CloneDragItem = ({ children, dragHandleTopMargin }) => {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsxs(DragItem, { gap: 2, paddingLeft: 2, alignItems: "start", dragVisibility: "visible", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      DragIconButton,
      {
        forwardedAs: "div",
        role: "button",
        "aria-label": formatMessage({
          id: getTranslation("components.DragHandle-label"),
          defaultMessage: "Drag"
        }),
        dragHandleTopMargin,
        children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Drag, { color: "neutral600" })
      }
    ),
    children
  ] });
};
const baseRenderLeaf = (props, modifiers2) => {
  const wrappedChildren = getEntries(modifiers2).reduce((currentChildren, modifierEntry) => {
    const [name2, modifier] = modifierEntry;
    if (props.leaf[name2]) {
      return modifier.renderLeaf(currentChildren);
    }
    return currentChildren;
  }, props.children);
  return /* @__PURE__ */ jsxRuntime.jsx("span", { ...props.attributes, children: wrappedChildren });
};
const baseRenderElement = ({
  props,
  blocks,
  editor,
  setDragDirection,
  dragDirection
}) => {
  const { element } = props;
  const blockMatch = Object.values(blocks).find((block2) => block2.matchNode(element));
  const block = blockMatch || blocks.paragraph;
  const nodePath = slateReact.ReactEditor.findPath(editor, element);
  if (isLinkNode(element) || isListNode$1(element) && element.indentLevel && element.indentLevel > 0 || element.type === "list-item") {
    return block.renderElement(props);
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    DragAndDropElement,
    {
      index: nodePath,
      setDragDirection,
      dragDirection,
      dragHandleTopMargin: block.dragHandleTopMargin,
      children: block.renderElement(props)
    }
  );
};
const BlocksContent = ({ placeholder, ariaLabelId }) => {
  const { editor, disabled, blocks, modifiers: modifiers2, setLiveText, isExpandedMode } = useBlocksEditorContext("BlocksContent");
  const blocksRef = React__namespace.useRef(null);
  const { formatMessage } = reactIntl.useIntl();
  const [dragDirection, setDragDirection] = React__namespace.useState(null);
  const { modalElement, handleConversionResult } = useConversionModal();
  const renderLeaf = React__namespace.useCallback(
    (props) => baseRenderLeaf(props, modifiers2),
    [modifiers2]
  );
  const handleMoveBlocks = (editor2, event) => {
    if (!editor2.selection)
      return;
    const start = slate.Range.start(editor2.selection);
    const currentIndex = [start.path[0]];
    let newIndexPosition = 0;
    if (event.key === "ArrowUp") {
      newIndexPosition = currentIndex[0] > 0 ? currentIndex[0] - 1 : currentIndex[0];
    } else {
      newIndexPosition = currentIndex[0] < editor2.children.length - 1 ? currentIndex[0] + 1 : currentIndex[0];
    }
    const newIndex = [newIndexPosition];
    if (newIndexPosition !== currentIndex[0]) {
      slate.Transforms.moveNodes(editor2, {
        at: currentIndex,
        to: newIndex
      });
      setLiveText(
        formatMessage(
          {
            id: getTranslation("components.Blocks.dnd.reorder"),
            defaultMessage: "{item}, moved. New position in the editor: {position}."
          },
          {
            item: `${name}.${currentIndex[0] + 1}`,
            position: `${newIndex[0] + 1} of ${editor2.children.length}`
          }
        )
      );
      event.preventDefault();
    }
  };
  const renderElement = React__namespace.useCallback(
    (props) => baseRenderElement({ props, blocks, editor, dragDirection, setDragDirection }),
    [blocks, editor, dragDirection, setDragDirection]
  );
  const checkSnippet = (event) => {
    if (!editor.selection) {
      return;
    }
    const [textNode, textNodePath] = slate.Editor.node(editor, editor.selection.anchor.path);
    if (slate.Editor.isEditor(textNode) || textNode.type !== "text") {
      return;
    }
    if (textNodePath.at(-1) !== 0) {
      return;
    }
    const blockMatchingSnippet = Object.values(blocks).find((block) => {
      return block.snippets?.includes(textNode.text);
    });
    if (blockMatchingSnippet?.handleConvert) {
      event.preventDefault();
      slate.Transforms.delete(editor, {
        distance: textNode.text.length,
        unit: "character",
        reverse: true
      });
      const maybeRenderModal = blockMatchingSnippet.handleConvert(editor);
      handleConversionResult(maybeRenderModal);
    }
  };
  const handleEnter = (event) => {
    if (!editor.selection) {
      return;
    }
    const selectedNode = editor.children[editor.selection.anchor.path[0]];
    const selectedBlock = Object.values(blocks).find((block) => block.matchNode(selectedNode));
    if (!selectedBlock) {
      return;
    }
    if (event.shiftKey && selectedNode.type !== "image") {
      slate.Transforms.insertText(editor, "\n");
      return;
    }
    if (selectedBlock.handleEnterKey) {
      selectedBlock.handleEnterKey(editor);
    } else {
      blocks.paragraph.handleEnterKey(editor);
    }
  };
  const handleBackspaceEvent = (event) => {
    if (!editor.selection) {
      return;
    }
    const selectedNode = editor.children[editor.selection.anchor.path[0]];
    const selectedBlock = Object.values(blocks).find((block) => block.matchNode(selectedNode));
    if (!selectedBlock) {
      return;
    }
    if (selectedBlock.handleBackspaceKey) {
      selectedBlock.handleBackspaceKey(editor, event);
    }
  };
  const handleTab = (event) => {
    if (!editor.selection) {
      return;
    }
    const selectedNode = editor.children[editor.selection.anchor.path[0]];
    const selectedBlock = Object.values(blocks).find((block) => block.matchNode(selectedNode));
    if (!selectedBlock) {
      return;
    }
    if (selectedBlock.handleTab) {
      event.preventDefault();
      selectedBlock.handleTab(editor);
    }
  };
  const handleKeyboardShortcuts = (event) => {
    const isCtrlOrCmd = event.metaKey || event.ctrlKey;
    if (isCtrlOrCmd) {
      Object.values(modifiers2).forEach((value) => {
        if (value.isValidEventKey(event)) {
          value.handleToggle(editor);
          return;
        }
      });
      if (event.shiftKey && ["ArrowUp", "ArrowDown"].includes(event.key)) {
        handleMoveBlocks(editor, event);
      }
    }
  };
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "Enter":
        event.preventDefault();
        return handleEnter(event);
      case "Backspace":
        return handleBackspaceEvent(event);
      case "Tab":
        return handleTab(event);
      case "Escape":
        return slateReact.ReactEditor.blur(editor);
    }
    handleKeyboardShortcuts(event);
    if (event.key === " ") {
      checkSnippet(event);
    }
  };
  const handleScrollSelectionIntoView = () => {
    if (!editor.selection)
      return;
    const domRange = slateReact.ReactEditor.toDOMRange(editor, editor.selection);
    const domRect = domRange.getBoundingClientRect();
    const blocksInput = blocksRef.current;
    if (!blocksInput) {
      return;
    }
    const editorRect = blocksInput.getBoundingClientRect();
    if (domRect.top < editorRect.top || domRect.bottom > editorRect.bottom) {
      blocksInput.scrollBy({
        top: 28,
        // 20px is the line-height + 8px line gap
        behavior: "smooth"
      });
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    designSystem.Box,
    {
      ref: blocksRef,
      grow: 1,
      width: "100%",
      overflow: "auto",
      fontSize: 2,
      background: "neutral0",
      color: "neutral800",
      lineHeight: 6,
      paddingRight: 4,
      paddingTop: 6,
      paddingBottom: 3,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          StyledEditable,
          {
            "aria-labelledby": ariaLabelId,
            readOnly: disabled,
            placeholder,
            isExpandedMode,
            renderElement,
            renderLeaf,
            onKeyDown: handleKeyDown,
            scrollSelectionIntoView: handleScrollSelectionIntoView,
            onDrop: () => {
              return true;
            },
            onDragStart: () => {
              return true;
            }
          }
        ),
        modalElement
      ]
    }
  );
};
const CollapseIconButton = styled__default.default(designSystem.IconButton)`
  position: absolute;
  bottom: ${helperPlugin.pxToRem(12)};
  right: ${helperPlugin.pxToRem(12)};
`;
const ExpandWrapper$1 = styled__default.default(designSystem.Flex)`
  // Background with 20% opacity
  background: ${({ theme }) => `${theme.colors.neutral800}1F`};
`;
const EditorLayout$1 = ({
  children,
  error,
  disabled,
  onCollapse,
  ariaDescriptionId
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const { isExpandedMode } = useBlocksEditorContext("editorLayout");
  helperPlugin.useLockScroll({ lockScroll: isExpandedMode });
  if (isExpandedMode) {
    return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Portal, { role: "dialog", "aria-modal": false, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.FocusTrap, { onEscape: onCollapse, children: /* @__PURE__ */ jsxRuntime.jsx(
      ExpandWrapper$1,
      {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 4,
        justifyContent: "center",
        onClick: onCollapse,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.Box,
          {
            background: "neutral0",
            hasRadius: true,
            shadow: "popupShadow",
            overflow: "hidden",
            width: "90%",
            height: "90%",
            onClick: (e) => e.stopPropagation(),
            "aria-describedby": ariaDescriptionId,
            position: "relative",
            children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { height: "100%", alignItems: "flex-start", direction: "column", children: [
              children,
              /* @__PURE__ */ jsxRuntime.jsx(
                CollapseIconButton,
                {
                  "aria-label": formatMessage({
                    id: getTranslation("components.Blocks.collapse"),
                    defaultMessage: "Collapse"
                  }),
                  onClick: onCollapse,
                  children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Collapse, {})
                }
              )
            ] })
          }
        )
      }
    ) }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.InputWrapper,
    {
      direction: "column",
      alignItems: "flex-start",
      height: "512px",
      disabled,
      hasError: Boolean(error),
      style: { overflow: "hidden" },
      "aria-describedby": ariaDescriptionId,
      position: "relative",
      children
    }
  );
};
const stylesToInherit = styled.css`
  font-size: inherit;
  color: inherit;
  line-height: inherit;
`;
const BoldText = styled__default.default(designSystem.Typography).attrs({ fontWeight: "bold" })`
  ${stylesToInherit}
`;
const ItalicText = styled__default.default(designSystem.Typography)`
  font-style: italic;
  ${stylesToInherit}
`;
const UnderlineText = styled__default.default(designSystem.Typography).attrs({ textDecoration: "underline" })`
  ${stylesToInherit}
`;
const StrikeThroughText = styled__default.default(designSystem.Typography).attrs({ textDecoration: "line-through" })`
  ${stylesToInherit}
`;
const InlineCode = styled__default.default.code`
  background-color: ${({ theme }) => theme.colors.neutral150};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => `0 ${theme.spaces[2]}`};
  font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas,
    monospace;
  color: inherit;
`;
const baseCheckIsActive = (editor, name2) => {
  const marks = slate.Editor.marks(editor);
  if (!marks)
    return false;
  return Boolean(marks[name2]);
};
const baseHandleToggle = (editor, name2) => {
  const marks = slate.Editor.marks(editor);
  if (!editor.selection) {
    const endOfEditor = slate.Editor.end(editor, []);
    slate.Transforms.select(editor, endOfEditor);
  }
  if (marks?.[name2]) {
    slate.Editor.removeMark(editor, name2);
  } else {
    slate.Editor.addMark(editor, name2, true);
  }
};
const modifiers = {
  bold: {
    icon: Icons.Bold,
    isValidEventKey: (event) => event.key === "b",
    label: { id: "components.Blocks.modifiers.bold", defaultMessage: "Bold" },
    checkIsActive: (editor) => baseCheckIsActive(editor, "bold"),
    handleToggle: (editor) => baseHandleToggle(editor, "bold"),
    renderLeaf: (children) => /* @__PURE__ */ jsxRuntime.jsx(BoldText, { children })
  },
  italic: {
    icon: Icons.Italic,
    isValidEventKey: (event) => event.key === "i",
    label: { id: "components.Blocks.modifiers.italic", defaultMessage: "Italic" },
    checkIsActive: (editor) => baseCheckIsActive(editor, "italic"),
    handleToggle: (editor) => baseHandleToggle(editor, "italic"),
    renderLeaf: (children) => /* @__PURE__ */ jsxRuntime.jsx(ItalicText, { children })
  },
  underline: {
    icon: Icons.Underline,
    isValidEventKey: (event) => event.key === "u",
    label: { id: "components.Blocks.modifiers.underline", defaultMessage: "Underline" },
    checkIsActive: (editor) => baseCheckIsActive(editor, "underline"),
    handleToggle: (editor) => baseHandleToggle(editor, "underline"),
    renderLeaf: (children) => /* @__PURE__ */ jsxRuntime.jsx(UnderlineText, { children })
  },
  strikethrough: {
    icon: Icons.StrikeThrough,
    isValidEventKey: (event) => event.key === "S" && event.shiftKey,
    label: { id: "components.Blocks.modifiers.strikethrough", defaultMessage: "Strikethrough" },
    checkIsActive: (editor) => baseCheckIsActive(editor, "strikethrough"),
    handleToggle: (editor) => baseHandleToggle(editor, "strikethrough"),
    renderLeaf: (children) => /* @__PURE__ */ jsxRuntime.jsx(StrikeThroughText, { children })
  },
  code: {
    icon: Icons.Code,
    isValidEventKey: (event) => event.key === "e",
    label: { id: "components.Blocks.modifiers.code", defaultMessage: "Inline code" },
    checkIsActive: (editor) => baseCheckIsActive(editor, "code"),
    handleToggle: (editor) => baseHandleToggle(editor, "code"),
    renderLeaf: (children) => /* @__PURE__ */ jsxRuntime.jsx(InlineCode, { children })
  }
};
const withImages = (editor) => {
  const { isVoid } = editor;
  editor.isVoid = (element) => {
    return element.type === "image" ? true : isVoid(element);
  };
  return editor;
};
const withLinks = (editor) => {
  const { isInline, apply, insertText: insertText2, insertData } = editor;
  editor.isInline = (element) => {
    return element.type === "link" ? true : isInline(element);
  };
  editor.lastInsertedLinkPath = null;
  editor.apply = (operation) => {
    if (operation.type === "insert_node") {
      if (!slate.Editor.isEditor(operation.node) && operation.node.type === "link" && editor.shouldSaveLinkPath) {
        editor.lastInsertedLinkPath = operation.path;
      }
    } else if (operation.type === "move_node") {
      if (slate.Path.hasPrevious(operation.path) && editor.lastInsertedLinkPath && editor.shouldSaveLinkPath) {
        editor.lastInsertedLinkPath = slate.Path.transform(editor.lastInsertedLinkPath, operation);
      }
    }
    apply(operation);
  };
  editor.insertText = (text) => {
    if (editor.selection && slate.Range.isCollapsed(editor.selection) && text === " ") {
      const linksInSelection = Array.from(
        slate.Editor.nodes(editor, {
          at: editor.selection,
          match: (node) => !slate.Editor.isEditor(node) && node.type === "link"
        })
      );
      const selectionIsInLink = editor.selection && linksInSelection.length > 0;
      const selectionIsAtEndOfLink = selectionIsInLink && slate.Point.equals(editor.selection.anchor, slate.Editor.end(editor, linksInSelection[0][1]));
      if (selectionIsAtEndOfLink) {
        slate.Transforms.insertNodes(
          editor,
          { text: " ", type: "text" },
          { at: slate.Path.next(linksInSelection[0][1]), select: true }
        );
        return;
      }
    }
    insertText2(text);
  };
  editor.insertData = (data) => {
    const pastedText = data.getData("text/plain");
    if (pastedText) {
      try {
        new URL(pastedText);
        editor.shouldSaveLinkPath = false;
        insertLink(editor, { url: pastedText });
        return;
      } catch (error) {
      }
    }
    insertData(data);
  };
  return editor;
};
const isText = (node) => {
  return slate.Node.isNode(node) && !slate.Editor.isEditor(node) && node.type === "text";
};
const withStrapiSchema = (editor) => {
  const { normalizeNode } = editor;
  editor.normalizeNode = (entry) => {
    const [node, path] = entry;
    if (!slate.Element.isElement(node) && !isText(node)) {
      slate.Transforms.setNodes(editor, { type: "text" }, { at: path });
      return;
    }
    normalizeNode(entry);
  };
  return editor;
};
const selectorBlockKeys = [
  "paragraph",
  "heading-one",
  "heading-two",
  "heading-three",
  "heading-four",
  "heading-five",
  "heading-six",
  "list-ordered",
  "list-unordered",
  "image",
  "quote",
  "code"
];
const isSelectorBlockKey = (key) => {
  return typeof key === "string" && selectorBlockKeys.includes(key);
};
const [BlocksEditorProvider, usePartialBlocksEditorContext] = reactContext.createContext("BlocksEditor");
function useBlocksEditorContext(consumerName) {
  const context = usePartialBlocksEditorContext(consumerName);
  const editor = slateReact.useSlate();
  return {
    ...context,
    editor
  };
}
const EditorDivider = styled__default.default(designSystem.Divider)`
  background: ${({ theme }) => theme.colors.neutral200};
`;
const ExpandIconButton = styled__default.default(designSystem.IconButton)`
  position: absolute;
  bottom: ${helperPlugin.pxToRem(12)};
  right: ${helperPlugin.pxToRem(12)};
`;
function useResetKey(value) {
  const slateUpdatesCount = React__namespace.useRef(0);
  const valueUpdatesCount = React__namespace.useRef(0);
  const [key, setKey] = React__namespace.useState(0);
  React__namespace.useEffect(() => {
    valueUpdatesCount.current += 1;
    if (valueUpdatesCount.current !== slateUpdatesCount.current) {
      setKey((previousKey) => previousKey + 1);
      slateUpdatesCount.current = valueUpdatesCount.current;
    }
  }, [value]);
  return { key, incrementSlateUpdatesCount: () => slateUpdatesCount.current += 1 };
}
const pipe = (...fns) => (value) => fns.reduce((prev, fn) => fn(prev), value);
const BlocksEditor = React__namespace.forwardRef(
  ({ disabled = false, name: name2, onChange, value, error, ...contentProps }, forwardedRef) => {
    const { formatMessage } = reactIntl.useIntl();
    const [editor] = React__namespace.useState(
      () => pipe(slateHistory.withHistory, withImages, withStrapiSchema, slateReact.withReact, withLinks)(slate.createEditor())
    );
    const [liveText, setLiveText] = React__namespace.useState("");
    const ariaDescriptionId = React__namespace.useId();
    const [isExpandedMode, setIsExpandedMode] = React__namespace.useState(false);
    const handleToggleExpand = () => {
      setIsExpandedMode((prev) => !prev);
    };
    React__namespace.useImperativeHandle(
      forwardedRef,
      () => ({
        focus() {
          slateReact.ReactEditor.focus(editor);
        }
      }),
      [editor]
    );
    const { key, incrementSlateUpdatesCount } = useResetKey(value);
    const handleSlateChange = (state) => {
      const isAstChange = editor.operations.some((op) => op.type !== "set_selection");
      if (isAstChange) {
        incrementSlateUpdatesCount();
        onChange({
          // Casting is needed because Slate's onChange type doesn't take into consideration
          // that we set Editor['children'] to Attribute.BlocksValue in custom.d.ts
          target: { name: name2, value: state, type: "blocks" }
        });
      }
    };
    const blocks = {
      ...paragraphBlocks,
      ...headingBlocks,
      ...listBlocks,
      ...linkBlocks,
      ...imageBlocks,
      ...quoteBlocks,
      ...codeBlocks
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.VisuallyHidden, { id: ariaDescriptionId, children: formatMessage({
        id: getTranslation("components.Blocks.dnd.instruction"),
        defaultMessage: `To reorder blocks, press Command or Control along with Shift and the Up or Down arrow keys`
      }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.VisuallyHidden, { "aria-live": "assertive", children: liveText }),
      /* @__PURE__ */ jsxRuntime.jsx(
        slateReact.Slate,
        {
          editor,
          initialValue: value || [{ type: "paragraph", children: [{ type: "text", text: "" }] }],
          onChange: handleSlateChange,
          children: /* @__PURE__ */ jsxRuntime.jsx(
            BlocksEditorProvider,
            {
              blocks,
              modifiers,
              disabled,
              name: name2,
              setLiveText,
              isExpandedMode,
              children: /* @__PURE__ */ jsxRuntime.jsxs(
                EditorLayout$1,
                {
                  error,
                  disabled,
                  onCollapse: handleToggleExpand,
                  ariaDescriptionId,
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(BlocksToolbar, {}),
                    /* @__PURE__ */ jsxRuntime.jsx(EditorDivider, { width: "100%" }),
                    /* @__PURE__ */ jsxRuntime.jsx(BlocksContent, { ...contentProps }),
                    !isExpandedMode && /* @__PURE__ */ jsxRuntime.jsx(
                      ExpandIconButton,
                      {
                        "aria-label": formatMessage({
                          id: getTranslation("components.Blocks.expand"),
                          defaultMessage: "Expand"
                        }),
                        onClick: handleToggleExpand,
                        children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Expand, {})
                      }
                    )
                  ]
                }
              )
            }
          )
        },
        key
      )
    ] });
  }
);
const LabelAction$2 = styled__default.default(designSystem.Box)`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;
const BlocksInput = React__namespace.forwardRef(
  ({
    intlLabel,
    labelAction,
    name: name2,
    required = false,
    error = "",
    hint,
    placeholder,
    ...editorProps
  }, forwardedRef) => {
    const { formatMessage } = reactIntl.useIntl();
    const uniqueId = React__namespace.useId();
    const label = intlLabel.id ? formatMessage(intlLabel) : name2;
    const formattedPlaceholder = placeholder && formatMessage({ id: placeholder.id, defaultMessage: placeholder.defaultMessage });
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 1, children: [
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 1, children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            designSystem.Typography,
            {
              variant: "pi",
              fontWeight: "bold",
              textColor: "neutral800",
              as: "label",
              id: uniqueId,
              children: [
                label,
                required && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "danger600", lineHeight: "0px", children: "*" })
              ]
            }
          ),
          labelAction && /* @__PURE__ */ jsxRuntime.jsx(LabelAction$2, { paddingLeft: 1, children: labelAction })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          BlocksEditor,
          {
            name: name2,
            error,
            ref: forwardedRef,
            ...editorProps,
            ariaLabelId: uniqueId,
            placeholder: formattedPlaceholder
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(Hint, { hint, name: name2, error })
      ] }),
      error && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 1, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", textColor: "danger600", "data-strapi-field-error": true, children: error }) })
    ] });
  }
);
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React__namespace.useState(value);
  React__namespace.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
const UID_REGEX = /^[A-Za-z0-9-_.~]*$/;
const InputUID = React__namespace.forwardRef(
  ({
    contentTypeUID,
    hint,
    disabled,
    error,
    intlLabel,
    labelAction,
    name: name2,
    onChange,
    value = "",
    placeholder,
    required
  }, forwardedRef) => {
    const [availability, setAvailability] = React__namespace.useState();
    const [showRegenerate, setShowRegenerate] = React__namespace.useState(false);
    const debouncedValue = useDebounce(value, 300);
    const { modifiedData, initialData } = helperPlugin.useCMEditViewDataManager();
    const toggleNotification = helperPlugin.useNotification();
    const { formatAPIError } = helperPlugin.useAPIErrorHandler();
    const { formatMessage } = reactIntl.useIntl();
    const { post } = helperPlugin.useFetchClient();
    const label = intlLabel.id ? formatMessage(
      { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
      { ...intlLabel.values }
    ) : name2;
    const formattedPlaceholder = placeholder ? formatMessage(
      { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
      { ...placeholder.values }
    ) : "";
    const { data: defaultGeneratedUID, isLoading: isGeneratingDefaultUID } = reactQuery.useQuery({
      queryKey: ["uid", { contentTypeUID, field: name2, data: modifiedData }],
      async queryFn({ queryKey }) {
        const [, body] = queryKey;
        const {
          data: { data }
        } = await post("/content-manager/uid/generate", body);
        return data;
      },
      onError(err) {
        if (err instanceof axios.AxiosError) {
          toggleNotification({
            type: "warning",
            message: formatAPIError(err)
          });
        }
      },
      enabled: !value && required
    });
    React__namespace.useEffect(() => {
      if (defaultGeneratedUID) {
        onChange({ target: { name: name2, value: defaultGeneratedUID, type: "text" } }, true);
      }
    }, [defaultGeneratedUID, name2, onChange]);
    const { mutate: generateUID, isLoading: isGeneratingUID } = reactQuery.useMutation({
      async mutationFn(body) {
        const {
          data: { data }
        } = await post("/content-manager/uid/generate", body);
        return data;
      },
      onSuccess(data) {
        onChange({ target: { name: name2, value: data, type: "text" } });
      },
      onError(err) {
        if (err instanceof axios.AxiosError) {
          toggleNotification({
            type: "warning",
            message: formatAPIError(err)
          });
        }
      }
    });
    const { data: availabilityData, isLoading: isCheckingAvailability } = reactQuery.useQuery({
      queryKey: [
        "uid",
        { contentTypeUID, field: name2, value: debouncedValue ? debouncedValue.trim() : "" }
      ],
      async queryFn({ queryKey }) {
        const [, body] = queryKey;
        const { data } = await post("/content-manager/uid/check-availability", body);
        return data;
      },
      enabled: Boolean(
        debouncedValue !== initialData[name2] && debouncedValue && UID_REGEX.test(debouncedValue.trim())
      ),
      onError(err) {
        if (err instanceof axios.AxiosError) {
          toggleNotification({
            type: "warning",
            message: formatAPIError(err)
          });
        }
      }
    });
    React__namespace.useEffect(() => {
      setAvailability(availabilityData);
      let timer;
      if (availabilityData?.isAvailable) {
        timer = window.setTimeout(() => {
          setAvailability(void 0);
        }, 4e3);
      }
      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
    }, [availabilityData]);
    const isLoading = isGeneratingDefaultUID || isGeneratingUID || isCheckingAvailability;
    return /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.TextInput,
      {
        ref: forwardedRef,
        disabled,
        error,
        endAction: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { position: "relative", gap: 1, children: [
          availability && !showRegenerate && /* @__PURE__ */ jsxRuntime.jsxs(
            TextValidation,
            {
              alignItems: "center",
              gap: 1,
              justifyContent: "flex-end",
              available: !!availability?.isAvailable,
              "data-not-here-outer": true,
              position: "absolute",
              pointerEvents: "none",
              right: 6,
              width: "100px",
              children: [
                availability?.isAvailable ? /* @__PURE__ */ jsxRuntime.jsx(Icons.CheckCircle, {}) : /* @__PURE__ */ jsxRuntime.jsx(Icons.ExclamationMarkCircle, {}),
                /* @__PURE__ */ jsxRuntime.jsx(
                  designSystem.Typography,
                  {
                    textColor: availability.isAvailable ? "success600" : "danger600",
                    variant: "pi",
                    children: formatMessage(
                      availability.isAvailable ? {
                        id: "content-manager.components.uid.available",
                        defaultMessage: "Available"
                      } : {
                        id: "content-manager.components.uid.unavailable",
                        defaultMessage: "Unavailable"
                      }
                    )
                  }
                )
              ]
            }
          ),
          !disabled && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            showRegenerate && /* @__PURE__ */ jsxRuntime.jsx(TextValidation, { alignItems: "center", justifyContent: "flex-end", gap: 1, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "primary600", variant: "pi", children: formatMessage({
              id: "content-manager.components.uid.regenerate",
              defaultMessage: "Regenerate"
            }) }) }),
            /* @__PURE__ */ jsxRuntime.jsx(
              FieldActionWrapper,
              {
                onClick: () => generateUID({ contentTypeUID, field: name2, data: modifiedData }),
                label: formatMessage({
                  id: "content-manager.components.uid.regenerate",
                  defaultMessage: "Regenerate"
                }),
                onMouseEnter: () => setShowRegenerate(true),
                onMouseLeave: () => setShowRegenerate(false),
                children: isLoading ? /* @__PURE__ */ jsxRuntime.jsx(LoadingWrapper, { "data-testid": "loading-wrapper", children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Loader, {}) }) : /* @__PURE__ */ jsxRuntime.jsx(Icons.Refresh, {})
              }
            )
          ] })
        ] }),
        hint,
        label,
        labelAction,
        name: name2,
        onChange,
        placeholder: formattedPlaceholder,
        value,
        required
      }
    );
  }
);
const FieldActionWrapper = styled__default.default(designSystem.FieldAction)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const TextValidation = styled__default.default(designSystem.Flex)`
  svg {
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;

    path {
      fill: ${({ theme, available }) => available ? theme.colors.success600 : theme.colors.danger600};
    }
  }
`;
const rotation = styled.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const LoadingWrapper = styled__default.default(designSystem.Flex)`
  animation: ${rotation} 2s infinite linear;
`;
const md = new Markdown__default.default({
  html: true,
  // Enable HTML tags in source
  xhtmlOut: false,
  breaks: true,
  langPrefix: "language-",
  linkify: true,
  typographer: true,
  // Code from: https://github.com/markdown-it/markdown-it/blob/master/support/demo_template/index.js#L83
  highlight(str, lang) {
    if (lang && lang !== "auto" && highlight_js.getLanguage(lang)) {
      return '<pre class="hljs language-' + md.utils.escapeHtml(lang.toLowerCase()) + '"><code>' + highlight_js.highlight(lang, str, true).value + "</code></pre>";
    }
    if (lang === "auto") {
      const result = highlight_js.highlightAuto(str);
      return '<pre class="hljs language-' + md.utils.escapeHtml(result.language) + '"><code>' + result.value + "</code></pre>";
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>";
  }
}).use(abbr__default.default).use(container__default.default, "warning").use(container__default.default, "tip").use(deflist__default.default).use(emoji__default.default).use(footnote__default.default).use(ins__default.default).use(mark__default.default).use(sub__default.default).use(sup__default.default);
md.renderer.rules.footnote_ref = (tokens, idx, options2, env, slf) => {
  const caption = slf.rules.footnote_caption?.(tokens, idx, options2, env, slf);
  return '<sup class="footnote-ref"><span>' + caption + "</span></sup>";
};
md.renderer.rules.footnote_anchor = () => {
  return ' <span class="footnote-backref">↩︎</span>';
};
const PreviewWysiwyg = ({ data = "" }) => {
  const html = React__namespace.useMemo(
    () => sanitizeHtml__default.default(md.render(data.replaceAll("\\n", "\n") || ""), {
      ...sanitizeHtml__default.default.defaults,
      allowedTags: false,
      allowedAttributes: {
        "*": ["href", "align", "alt", "center", "width", "height", "type", "controls", "target"],
        img: ["src", "alt"],
        source: ["src", "type"]
      }
    }),
    [data]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(Wrapper, { children: /* @__PURE__ */ jsxRuntime.jsx("div", { dangerouslySetInnerHTML: { __html: html } }) });
};
const Wrapper = styled__default.default.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: ${({ theme }) => `${theme.spaces[3]} ${theme.spaces[4]}`};
  font-size: ${14 / 16}rem;
  background-color: ${({ theme }) => theme.colors.neutral0};
  color: ${({ theme }) => theme.colors.neutral800};
  line-height: ${({ theme }) => theme.lineHeights[6]};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: ${({ theme }) => theme.spaces[2]};
    margin-block-end: ${({ theme }) => theme.spaces[2]};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spaces[2]};
  }

  h1 {
    font-size: ${36 / 16}rem;
    font-weight: 600;
  }

  h2 {
    font-size: ${30 / 16}rem;
    font-weight: 500;
  }

  h3 {
    font-size: ${24 / 16}rem;
    font-weight: 500;
  }

  h4 {
    font-size: ${20 / 16}rem;
    font-weight: 500;
  }

  strong {
    font-weight: 800;
  }

  em {
    font-style: italic;
  }

  blockquote {
    margin-top: ${({ theme }) => theme.spaces[8]};
    margin-bottom: ${({ theme }) => theme.spaces[7]};
    font-size: ${14 / 16}rem;
    font-weight: 400;
    border-left: 4px solid ${({ theme }) => theme.colors.neutral150};
    font-style: italic;
    padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[5]};
  }

  img {
    max-width: 100%;
  }

  table {
    thead {
      background: ${({ theme }) => theme.colors.neutral150};

      th {
        padding: ${({ theme }) => theme.spaces[4]};
      }
    }
    tr {
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
    }
    th,
    td {
      padding: ${({ theme }) => theme.spaces[4]};
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
      border-bottom: 0;
      border-top: 0;
    }
  }

  pre,
  code {
    font-size: ${14 / 16}rem;
    border-radius: 4px;
    /* 
      Hard coded since the color is the same between themes,
      theme.colors.neutral800 changes between themes.

      Matches the color of the JSON Input component.
    */
    background-color: #32324d;
    max-width: 100%;
    overflow: auto;
    padding: ${({ theme }) => theme.spaces[2]};
  }

  /* Inline code */
  p,
  pre,
  td {
    > code {
      color: #839496;
    }
  }

  ol {
    list-style-type: decimal;
    margin-block-start: ${({ theme }) => theme.spaces[4]};
    margin-block-end: ${({ theme }) => theme.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({ theme }) => theme.spaces[4]};

    ol,
    ul {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }

  ul {
    list-style-type: disc;
    margin-block-start: ${({ theme }) => theme.spaces[4]};
    margin-block-end: ${({ theme }) => theme.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({ theme }) => theme.spaces[4]};

    ul,
    ol {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }
`;
var listRE = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/, emptyListRE = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/, unorderedListRE = /[*+-]\s/;
function newlineAndIndentContinueMarkdownList(cm) {
  if (cm.getOption("disableInput"))
    return CodeMirror__default.default.Pass;
  var ranges = cm.listSelections(), replacements = [];
  for (var i = 0; i < ranges.length; i++) {
    var pos = ranges[i].head;
    var eolState = cm.getStateAfter(pos.line);
    var inList = eolState.list !== false;
    var inQuote = eolState.quote !== 0;
    var line = cm.getLine(pos.line), match = listRE.exec(line);
    var cursorBeforeBullet = /^\s*$/.test(line.slice(0, pos.ch));
    if (!ranges[i].empty() || !inList && !inQuote || !match || cursorBeforeBullet) {
      cm.execCommand("newlineAndIndent");
      return;
    }
    if (emptyListRE.test(line)) {
      var endOfQuote = inQuote && />\s*$/.test(line);
      var endOfList = !/>\s*$/.test(line);
      if (endOfQuote || endOfList)
        cm.replaceRange(
          "",
          {
            line: pos.line,
            ch: 0
          },
          {
            line: pos.line,
            ch: pos.ch + 1
          }
        );
      replacements[i] = "\n";
    } else {
      var indent = match[1], after = match[5];
      var numbered = !(unorderedListRE.test(match[2]) || match[2].indexOf(">") >= 0);
      var bullet = numbered ? parseInt(match[3], 10) + 1 + match[4] : match[2].replace("x", " ");
      replacements[i] = "\n" + indent + bullet + after;
      if (numbered)
        incrementRemainingMarkdownListNumbers(cm, pos);
    }
  }
  cm.replaceSelections(replacements);
}
function incrementRemainingMarkdownListNumbers(cm, pos) {
  var startLine = pos.line, lookAhead = 0, skipCount = 0;
  var startItem = listRE.exec(cm.getLine(startLine)), startIndent = startItem[1];
  do {
    lookAhead += 1;
    var nextLineNumber = startLine + lookAhead;
    var nextLine = cm.getLine(nextLineNumber);
    var nextItem = listRE.exec(nextLine);
    if (nextItem) {
      var nextIndent = nextItem[1];
      var newNumber = parseInt(startItem[3], 10) + lookAhead - skipCount;
      var nextNumber = parseInt(nextItem[3], 10), itemNumber = nextNumber;
      if (startIndent === nextIndent && !isNaN(nextNumber)) {
        if (newNumber === nextNumber)
          itemNumber = nextNumber + 1;
        if (newNumber > nextNumber)
          itemNumber = newNumber + 1;
        cm.replaceRange(
          nextLine.replace(listRE, nextIndent + itemNumber + nextItem[4] + nextItem[5]),
          {
            line: nextLineNumber,
            ch: 0
          },
          {
            line: nextLineNumber,
            ch: nextLine.length
          }
        );
      } else {
        if (startIndent.length > nextIndent.length)
          return;
        if (startIndent.length < nextIndent.length && lookAhead === 1)
          return;
        skipCount += 1;
      }
    }
  } while (nextItem);
}
const Editor = React__namespace.forwardRef(
  ({
    disabled,
    editorRef,
    error,
    isPreviewMode,
    isExpandMode,
    name: name2,
    onChange,
    placeholder,
    textareaRef,
    value
  }, forwardedRef) => {
    const onChangeRef = React__namespace.useRef(onChange);
    React__namespace.useEffect(() => {
      if (editorRef.current) {
        editorRef.current.toTextArea();
      }
      editorRef.current = CodeMirror__default.default.fromTextArea(textareaRef.current, {
        lineWrapping: true,
        extraKeys: {
          Enter: "newlineAndIndentContinueMarkdownList",
          Tab: false,
          "Shift-Tab": false
        },
        readOnly: false,
        smartIndent: false,
        placeholder,
        spellcheck: true,
        inputStyle: "contenteditable"
      });
      CodeMirror__default.default.commands.newlineAndIndentContinueMarkdownList = newlineAndIndentContinueMarkdownList;
      editorRef.current.on("change", (doc) => {
        onChangeRef.current({ target: { name: name2, value: doc.getValue(), type: "wysiwyg" } });
      });
    }, [editorRef, textareaRef, name2, placeholder]);
    React__namespace.useEffect(() => {
      if (value && !editorRef.current.hasFocus()) {
        editorRef.current.setValue(value);
      }
    }, [editorRef, value]);
    React__namespace.useEffect(() => {
      if (isPreviewMode || disabled) {
        editorRef.current.setOption("readOnly", "nocursor");
      } else {
        editorRef.current.setOption("readOnly", false);
      }
    }, [disabled, isPreviewMode, editorRef]);
    React__namespace.useEffect(() => {
      if (error) {
        editorRef.current.setOption("screenReaderLabel", error);
      } else {
        editorRef.current.setOption("screenReaderLabel", "Editor");
      }
    }, [editorRef, error]);
    React__namespace.useImperativeHandle(
      forwardedRef,
      () => ({
        focus() {
          editorRef.current.getInputField().focus();
        },
        scrollIntoView(args) {
          editorRef.current.getInputField().scrollIntoView(args);
        }
      }),
      [editorRef]
    );
    return /* @__PURE__ */ jsxRuntime.jsxs(EditorAndPreviewWrapper, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(EditorStylesContainer, { isExpandMode, disabled: disabled || isPreviewMode, children: /* @__PURE__ */ jsxRuntime.jsx("textarea", { ref: textareaRef }) }),
      isPreviewMode && /* @__PURE__ */ jsxRuntime.jsx(PreviewWysiwyg, { data: value })
    ] });
  }
);
const EditorAndPreviewWrapper = styled__default.default.div`
  position: relative;
  height: calc(100% - 48px);
`;
const EditorStylesContainer = styled__default.default.div`
  cursor: ${({ disabled }) => disabled ? "not-allowed !important" : "auto"};
  height: 100%;
  /* BASICS */
  .CodeMirror-placeholder {
    color: ${({ theme }) => theme.colors.neutral600} !important;
  }

  .CodeMirror {
    /* Set height, width, borders, and global font properties here */
    font-size: ${14 / 16}rem;
    height: ${({ isExpandMode }) => isExpandMode ? "100%" : "410px"}; //  512px(total height) - 48px (header) - 52px(footer) - 2px border
    color: ${({ theme }) => theme.colors.neutral800};
    direction: ltr;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* PADDING */

  .CodeMirror-lines {
    padding: ${({ theme }) => `${theme.spaces[3]} ${theme.spaces[4]}`};
    /* Vertical padding around content */
  }

  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    /* The little square between H and V scrollbars */
    background-color: ${({ theme }) => `${theme.colors.neutral0}`};
  }

  /* GUTTER */

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker {
    color: black;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }

  /* CURSOR */

  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    /* z-index: 1; */
  }

  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }

  /* Can style cursor different in overwrite (non-insert) mode */
  .CodeMirror-overwrite .CodeMirror-cursor {
  }

  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }

  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  /* DEFAULT THEME */

  .cm-header,
  .cm-strong {
    font-weight: bold;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .CodeMirror-composing {
    border-bottom: 2px solid;
  }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }

  /* STOP */

  /* The rest of this file contains styles related to the mechanics of
    the editor. You probably shouldn't touch them. */

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => `${theme.colors.neutral0}`};
  }

  .CodeMirror-scroll {
    overflow: scroll !important; /* Things will break if this is overridden */
    /* 50px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: none; /* Prevent dragging from highlighting the element */
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent;
  }

  /* The fake, visible scrollbars. Used to force redraw during scrolling
    before actual scrolling happens, thus preventing shaking and
    flickering artifacts. */
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 1;
    display: none;
    outline: none;
  }

  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px; /* prevents collapsing before first draw */
  }
  /* Reset some styles that the rest of the page might have set */
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: 1.5;
    color: inherit;
    /* z-index: 2; */
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }

  .CodeMirror pre.CodeMirror-line-like {
    z-index: 2;
  }

  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    /* z-index: 2; */
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-widget {
  }

  .CodeMirror-rtl pre {
    direction: rtl;
  }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
    border-color: ${({ theme }) => `${theme.colors.neutral800}`};
  }
  .CodeMirror-measure pre {
    position: static;
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    + div {
      z-index: 0 !important;
    }
  }

  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected {
    background: ${({ theme }) => theme.colors.neutral200};
    /* z-index: -10; */
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }

  /* Used to force a border model for a node */
  .cm-force-border {
    padding-right: 0.1px;
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after {
    content: '';
  }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext {
    background: none;
  }

  span {
    color: ${({ theme }) => theme.colors.neutral800} !important;
  }
`;
const EditorLayout = ({
  children,
  isExpandMode,
  error,
  previewContent = "",
  onCollapse
}) => {
  const { formatMessage } = reactIntl.useIntl();
  helperPlugin.useLockScroll({ lockScroll: isExpandMode });
  if (isExpandMode) {
    return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Portal, { role: "dialog", "aria-modal": false, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.FocusTrap, { onEscape: onCollapse, children: /* @__PURE__ */ jsxRuntime.jsx(
      ExpandWrapper,
      {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 4,
        justifyContent: "center",
        onClick: onCollapse,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.Box,
          {
            background: "neutral0",
            hasRadius: true,
            shadow: "popupShadow",
            overflow: "hidden",
            width: "90%",
            height: "90%",
            onClick: (e) => e.stopPropagation(),
            children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { height: "100%", alignItems: "flex-start", children: [
              /* @__PURE__ */ jsxRuntime.jsx(BoxWithBorder, { flex: "1", height: "100%", children }),
              /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { alignItems: "start", direction: "column", flex: 1, height: "100%", width: "100%", children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  designSystem.Flex,
                  {
                    height: helperPlugin.pxToRem(48),
                    background: "neutral100",
                    justifyContent: "flex-end",
                    shrink: 0,
                    width: "100%",
                    children: /* @__PURE__ */ jsxRuntime.jsxs(ExpandButton$1, { onClick: onCollapse, children: [
                      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: formatMessage({
                        id: "components.Wysiwyg.collapse",
                        defaultMessage: "Collapse"
                      }) }),
                      /* @__PURE__ */ jsxRuntime.jsx(Icons.Collapse, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { position: "relative", height: "100%", width: "100%", children: /* @__PURE__ */ jsxRuntime.jsx(PreviewWysiwyg, { data: previewContent }) })
              ] })
            ] })
          }
        )
      }
    ) }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.Box,
    {
      borderColor: error ? "danger600" : "neutral200",
      borderStyle: "solid",
      borderWidth: "1px",
      hasRadius: true,
      children
    }
  );
};
const ExpandWrapper = styled__default.default(designSystem.Flex)`
  background: ${({ theme }) => `${theme.colors.neutral800}${Math.floor(0.2 * 255).toString(16).padStart(2, "0")}`};
`;
const BoxWithBorder = styled__default.default(designSystem.Box)`
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
`;
const ExpandButton$1 = styled__default.default(designSystem.BaseButton)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({ theme }) => `${theme.spaces[2]}`};

    path {
      fill: ${({ theme }) => theme.colors.neutral700};
      width: ${12 / 16}rem;
      height: ${12 / 16}rem;
    }
  }
`;
const replaceText = (markdownName, textToChange) => {
  let editedText;
  switch (markdownName) {
    case "Strikethrough":
      editedText = `~~${textToChange}~~`;
      break;
    case "Bold":
      editedText = `**${textToChange}**`;
      break;
    case "Italic":
      editedText = `_${textToChange}_`;
      break;
    case "Underline":
      editedText = `<u>${textToChange}</u>`;
      break;
    case "Code":
      editedText = `\`\`\`
${textToChange}
\`\`\``;
      break;
    case "Link":
      editedText = `[${textToChange}](link)`;
      break;
    case "Quote":
      editedText = `>${textToChange}`;
      break;
    default:
      editedText = textToChange;
  }
  return editedText;
};
const insertText = (markdownName) => {
  let editedText;
  const selection = { start: markdownName.length, end: 0 };
  switch (markdownName) {
    case "Strikethrough":
      editedText = `~~${markdownName}~~`;
      selection.end = 2;
      break;
    case "Bold":
      editedText = `**${markdownName}**`;
      selection.end = 2;
      break;
    case "Italic":
      editedText = `_${markdownName}_`;
      selection.end = 1;
      break;
    case "alt":
      editedText = `[${markdownName}]()`;
      selection.end = 3;
      break;
    case "Underline":
      editedText = `<u>${markdownName}</u>`;
      selection.end = 4;
      break;
    case "Code":
      editedText = `\`\`\`
${markdownName}
\`\`\``;
      selection.end = 3;
      break;
    case "Link":
      editedText = `[${markdownName}](link)`;
      selection.end = 7;
      break;
    case "Quote":
      editedText = `>${markdownName}`;
      selection.end = 0;
      break;
    default:
      editedText = "";
  }
  return { editedText, selection };
};
const insertListOrTitle = (markdown) => {
  let textToInsert;
  switch (markdown) {
    case "BulletList":
      textToInsert = "- ";
      break;
    case "NumberList":
      textToInsert = "1. ";
      break;
    case "h1":
      textToInsert = "# ";
      break;
    case "h2":
      textToInsert = "## ";
      break;
    case "h3":
      textToInsert = "### ";
      break;
    case "h4":
      textToInsert = "#### ";
      break;
    case "h5":
      textToInsert = "##### ";
      break;
    case "h6":
      textToInsert = "###### ";
      break;
    default:
      return "";
  }
  return textToInsert;
};
const markdownHandler = (editor, markdownType) => {
  const textToEdit = editor.current.getSelection();
  let textToInsert;
  if (textToEdit) {
    const editedText = replaceText(markdownType, textToEdit);
    editor.current.replaceSelection(editedText);
    editor.current.focus();
  } else {
    textToInsert = insertText(markdownType);
    editor.current.replaceSelection(textToInsert.editedText);
    editor.current.focus();
    const { line, ch } = editor.current.getCursor();
    const endSelection = ch - textToInsert.selection.end;
    const startSelection = ch - textToInsert.selection.end - textToInsert.selection.start;
    editor.current.setSelection({ line, ch: startSelection }, { line, ch: endSelection });
  }
};
const listHandler = (editor, listType) => {
  const doc = editor.current.getDoc();
  const insertion = listType === "BulletList" ? "- " : "1. ";
  if (doc.somethingSelected()) {
    const selections = doc.listSelections();
    let remove = null;
    editor.current.operation(function() {
      selections.forEach(function(selection) {
        const pos = [selection.head.line, selection.anchor.line].sort();
        if (remove == null) {
          remove = doc.getLine(pos[0]).startsWith(insertion);
        }
        for (let i = pos[0]; i <= pos[1]; i++) {
          if (remove) {
            if (doc.getLine(i).startsWith(insertion)) {
              doc.replaceRange("", { line: i, ch: 0 }, { line: i, ch: insertion.length });
            }
          } else {
            const lineInsertion = listType === "BulletList" ? "- " : `${i + 1}. `;
            doc.replaceRange(lineInsertion, { line: i, ch: 0 });
          }
        }
      });
    });
  } else {
    const { line: currentLine } = doc.getCursor();
    const listToInsert = insertListOrTitle(listType);
    const lineContent = editor.current.getLine(currentLine);
    const textToInsert = listToInsert + lineContent;
    editor.current.setSelection(
      { line: currentLine, ch: 0 },
      { line: currentLine, ch: lineContent.length }
    );
    editor.current.replaceSelection(textToInsert);
  }
  editor.current.focus();
};
const titleHandler = (editor, titleType) => {
  const { line: currentLine } = editor.current.getCursor();
  const titleToInsert = insertListOrTitle(titleType);
  const lineContent = editor.current.getLine(currentLine);
  const lineWithNoTitle = lineContent.replace(/#{1,6}\s/g, "").trim();
  const textToInsert = titleToInsert + lineWithNoTitle;
  editor.current.setSelection(
    { line: currentLine, ch: 0 },
    { line: currentLine, ch: lineContent.length }
  );
  editor.current.replaceSelection(textToInsert);
  setTimeout(() => {
    const newLastLineLength = editor.current.getLine(currentLine).length;
    editor.current.focus();
    editor.current.setCursor({ line: currentLine, ch: newLastLineLength });
  }, 0);
};
const insertFile = (editor, files) => {
  let { line } = editor.current.getCursor();
  const { ch } = editor.current.getCursor();
  files.forEach((file, i) => {
    let contentLength = editor.current.getLine(line).length;
    editor.current.setCursor({ line, ch: contentLength });
    if (i > 0 || i === 0 && ch !== 0) {
      contentLength = editor.current.getLine(line).length;
      editor.current.setCursor({ line, ch: contentLength });
      line++;
      editor.current.replaceSelection("\n");
    }
    if (file.mime.includes("image")) {
      editor.current.replaceSelection(`![${file.alt}](${file.url})`);
    } else {
      editor.current.replaceSelection(`[${file.alt}](${file.url})`);
    }
  });
  setTimeout(() => editor.current.focus(), 0);
};
const insertWithTextToEdit = (editor, markdownType, line, contentLength, textToEdit) => {
  const textToInsert = replaceText(markdownType, textToEdit);
  const contentToMove = editor.current.getRange(
    { line: line + 1, ch: 0 },
    { line: Infinity, ch: Infinity }
  );
  editor.current.replaceRange("", { line: line + 1, ch: 0 }, { line: Infinity, ch: Infinity });
  editor.current.replaceSelection("");
  editor.current.setCursor({ line, ch: contentLength });
  editor.current.replaceSelection("\n");
  editor.current.replaceSelection(textToInsert);
  if (markdownType === "Code") {
    const { line: newLine } = editor.current.getCursor();
    editor.current.setCursor({ line: newLine - 1, ch: textToEdit.length });
  }
  editor.current.replaceRange(
    contentToMove,
    { line: line + 4, ch: 0 },
    { line: Infinity, ch: Infinity }
  );
  editor.current.focus();
};
const insertWithoutTextToEdit = (editor, markdownType, line, contentLength) => {
  const textToInsert = insertText(markdownType);
  const contentToMove = editor.current.getRange(
    { line: line + 1, ch: 0 },
    { line: Infinity, ch: Infinity }
  );
  editor.current.replaceRange("", { line: line + 1, ch: 0 }, { line: Infinity, ch: Infinity });
  editor.current.setCursor({ line, ch: contentLength });
  editor.current.replaceSelection("\n");
  editor.current.replaceSelection(textToInsert.editedText);
  if (markdownType === "Code") {
    line += 2;
    editor.current.setSelection({ line, ch: 0 }, { line, ch: 4 });
  } else {
    line += 1;
    const { ch } = editor.current.getCursor();
    const endSelection = ch - textToInsert.selection.end;
    const startSelection = ch - textToInsert.selection.end - textToInsert.selection.start;
    editor.current.setSelection({ line, ch: startSelection }, { line, ch: endSelection });
  }
  editor.current.replaceRange(
    contentToMove,
    { line: line + 2, ch: 0 },
    { line: Infinity, ch: Infinity }
  );
  editor.current.focus();
};
const quoteAndCodeHandler = (editor, markdownType) => {
  const textToEdit = editor.current.getSelection();
  const { line } = editor.current.getCursor();
  const contentLength = editor.current.getLine(line).length;
  if (textToEdit) {
    insertWithTextToEdit(editor, markdownType, line, contentLength, textToEdit);
  } else {
    insertWithoutTextToEdit(editor, markdownType, line, contentLength);
  }
};
const CustomIconButton$1 = styled__default.default(designSystem.IconButton)`
  padding: ${({ theme }) => theme.spaces[2]};
  /* Trick to prevent the outline from overflowing because of the general outline-offset */
  outline-offset: -2px !important;

  svg {
    width: ${18 / 16}rem;
    height: ${18 / 16}rem;
  }
`;
const CustomLinkIconButton = styled__default.default(CustomIconButton$1)`
  svg {
    width: ${8 / 16}rem;
    height: ${8 / 16}rem;
  }
`;
const MainButtons = styled__default.default(designSystem.IconButtonGroup)`
  margin-left: ${({ theme }) => theme.spaces[4]};
`;
const MoreButton = styled__default.default(designSystem.IconButton)`
  margin: ${({ theme }) => `0 ${theme.spaces[2]}`};
  padding: ${({ theme }) => theme.spaces[2]};

  svg {
    width: ${18 / 16}rem;
    height: ${18 / 16}rem;
  }
`;
const IconButtonGroupMargin = styled__default.default(designSystem.IconButtonGroup)`
  margin-right: ${({ theme }) => `${theme.spaces[2]}`};
`;
const ExpandButton = styled__default.default(designSystem.BaseButton)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({ theme }) => `${theme.spaces[2]}`};
    path {
      fill: ${({ theme }) => theme.colors.neutral700};
      width: ${12 / 16}rem;
      height: ${12 / 16}rem;
    }
  }
`;
const WysiwygFooter = ({ onToggleExpand }) => {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { padding: 2, background: "neutral100", borderRadius: `0 0 ${4 / 16}rem ${4 / 16}rem`, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "flex-end", alignItems: "flex-end", children: /* @__PURE__ */ jsxRuntime.jsxs(ExpandButton, { id: "expand", onClick: onToggleExpand, children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: formatMessage({
      id: "components.WysiwygBottomControls.fullscreen",
      defaultMessage: "Expand"
    }) }),
    /* @__PURE__ */ jsxRuntime.jsx(Icons.Expand, {})
  ] }) }) });
};
const WysiwygNav = ({
  disabled,
  editorRef,
  isExpandMode,
  isPreviewMode,
  onActionClick,
  onToggleMediaLib,
  onTogglePreviewMode
}) => {
  const [visiblePopover, setVisiblePopover] = React__namespace.useState(false);
  const { formatMessage } = reactIntl.useIntl();
  const selectPlaceholder = formatMessage({
    id: "components.Wysiwyg.selectOptions.title",
    defaultMessage: "Add a title"
  });
  const buttonMoreRef = React__namespace.useRef(null);
  const handleTogglePopover = () => {
    setVisiblePopover((prev) => !prev);
  };
  if (disabled || isPreviewMode) {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      designSystem.Flex,
      {
        padding: 2,
        background: "neutral100",
        justifyContent: "space-between",
        borderRadius: `${4 / 16}rem ${4 / 16}rem 0 0`,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(StyledFlex, { children: [
            /* @__PURE__ */ jsxRuntime.jsxs(designSystem.SingleSelect, { disabled: true, placeholder: selectPlaceholder, size: "S", label: selectPlaceholder, children: [
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "h1", children: "h1" }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "h2", children: "h2" }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "h3", children: "h3" }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "h4", children: "h4" }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "h5", children: "h5" }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "h6", children: "h6" })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs(MainButtons, { children: [
              /* @__PURE__ */ jsxRuntime.jsx(CustomIconButton$1, { disabled: true, label: "Bold", name: "Bold", icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Bold, {}) }),
              /* @__PURE__ */ jsxRuntime.jsx(CustomIconButton$1, { disabled: true, label: "Italic", name: "Italic", icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Italic, {}) }),
              /* @__PURE__ */ jsxRuntime.jsx(CustomIconButton$1, { disabled: true, label: "Underline", name: "Underline", icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Underline, {}) })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(MoreButton, { disabled: true, label: "More", icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.More, {}) })
          ] }),
          !isExpandMode && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { onClick: onTogglePreviewMode, variant: "tertiary", children: formatMessage({
            id: "components.Wysiwyg.ToggleMode.markdown-mode",
            defaultMessage: "Markdown mode"
          }) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    designSystem.Flex,
    {
      padding: 2,
      background: "neutral100",
      justifyContent: "space-between",
      borderRadius: `${4 / 16}rem ${4 / 16}rem 0 0`,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(StyledFlex, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            designSystem.SingleSelect,
            {
              placeholder: selectPlaceholder,
              label: selectPlaceholder,
              size: "S",
              onChange: (value) => onActionClick(value, editorRef),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "h1", children: "h1" }),
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "h2", children: "h2" }),
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "h3", children: "h3" }),
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "h4", children: "h4" }),
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "h5", children: "h5" }),
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "h6", children: "h6" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(MainButtons, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              CustomIconButton$1,
              {
                onClick: () => onActionClick("Bold", editorRef),
                label: "Bold",
                name: "Bold",
                icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Bold, {})
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              CustomIconButton$1,
              {
                onClick: () => onActionClick("Italic", editorRef),
                label: "Italic",
                name: "Italic",
                icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Italic, {})
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              CustomIconButton$1,
              {
                onClick: () => onActionClick("Underline", editorRef),
                label: "Underline",
                name: "Underline",
                icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Underline, {})
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(
            MoreButton,
            {
              ref: buttonMoreRef,
              onClick: handleTogglePopover,
              label: "More",
              icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.More, {})
            }
          ),
          visiblePopover && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Popover, { onDismiss: handleTogglePopover, centered: true, source: buttonMoreRef, spacing: 4, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { children: [
            /* @__PURE__ */ jsxRuntime.jsxs(IconButtonGroupMargin, { children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                CustomIconButton$1,
                {
                  onClick: () => onActionClick("Strikethrough", editorRef, handleTogglePopover),
                  label: "Strikethrough",
                  name: "Strikethrough",
                  icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.StrikeThrough, {})
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                CustomIconButton$1,
                {
                  onClick: () => onActionClick("BulletList", editorRef, handleTogglePopover),
                  label: "BulletList",
                  name: "BulletList",
                  icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.BulletList, {})
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                CustomIconButton$1,
                {
                  onClick: () => onActionClick("NumberList", editorRef, handleTogglePopover),
                  label: "NumberList",
                  name: "NumberList",
                  icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.NumberList, {})
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs(designSystem.IconButtonGroup, { children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                CustomIconButton$1,
                {
                  onClick: () => onActionClick("Code", editorRef, handleTogglePopover),
                  label: "Code",
                  name: "Code",
                  icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Code, {})
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                CustomIconButton$1,
                {
                  onClick: () => {
                    handleTogglePopover();
                    onToggleMediaLib();
                  },
                  label: "Image",
                  name: "Image",
                  icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Picture, {})
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                CustomLinkIconButton,
                {
                  onClick: () => onActionClick("Link", editorRef, handleTogglePopover),
                  label: "Link",
                  name: "Link",
                  icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Link, {})
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                CustomIconButton$1,
                {
                  onClick: () => onActionClick("Quote", editorRef, handleTogglePopover),
                  label: "Quote",
                  name: "Quote",
                  icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Quote, {})
                }
              )
            ] })
          ] }) })
        ] }),
        onTogglePreviewMode && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { onClick: onTogglePreviewMode, variant: "tertiary", children: formatMessage({
          id: "components.Wysiwyg.ToggleMode.preview-mode",
          defaultMessage: "Preview mode"
        }) })
      ]
    }
  );
};
const StyledFlex = styled__default.default(designSystem.Flex)`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;
const Wysiwyg = React__namespace.forwardRef(
  ({ hint, disabled, error, intlLabel, labelAction, name: name2, onChange, placeholder, value, required }, forwardedRef) => {
    const { formatMessage } = reactIntl.useIntl();
    const textareaRef = React__namespace.useRef(null);
    const editorRef = React__namespace.useRef(
      null
    );
    const [isPreviewMode, setIsPreviewMode] = React__namespace.useState(false);
    const [mediaLibVisible, setMediaLibVisible] = React__namespace.useState(false);
    const [isExpandMode, setIsExpandMode] = React__namespace.useState(false);
    const { components = {} } = helperPlugin.useLibrary();
    const MediaLibraryDialog = components["media-library"];
    const handleToggleMediaLib = () => setMediaLibVisible((prev) => !prev);
    const handleTogglePreviewMode = () => setIsPreviewMode((prev) => !prev);
    const handleToggleExpand = () => {
      setIsPreviewMode(false);
      setIsExpandMode((prev) => !prev);
    };
    const handleActionClick = (value2, currentEditorRef, togglePopover) => {
      switch (value2) {
        case "Link":
        case "Strikethrough": {
          markdownHandler(currentEditorRef, value2);
          togglePopover?.();
          break;
        }
        case "Code":
        case "Quote": {
          quoteAndCodeHandler(currentEditorRef, value2);
          togglePopover?.();
          break;
        }
        case "Bold":
        case "Italic":
        case "Underline": {
          markdownHandler(currentEditorRef, value2);
          break;
        }
        case "BulletList":
        case "NumberList": {
          listHandler(currentEditorRef, value2);
          togglePopover?.();
          break;
        }
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6": {
          titleHandler(currentEditorRef, value2);
          break;
        }
      }
    };
    const handleSelectAssets = (files) => {
      const formattedFiles = files.map((f) => ({
        alt: f.alternativeText || f.name,
        url: helperPlugin.prefixFileUrlWithBackendUrl(f.url),
        mime: f.mime
      }));
      insertFile(editorRef, formattedFiles);
      setMediaLibVisible(false);
    };
    const formattedPlaceholder = placeholder ? formatMessage(
      { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
      { ...placeholder.values }
    ) : "";
    const label = intlLabel.id ? formatMessage(
      { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
      { ...intlLabel.values }
    ) : name2;
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 1, children: [
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 1, children: [
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { variant: "pi", fontWeight: "bold", textColor: "neutral800", children: [
            label,
            required && /* @__PURE__ */ jsxRuntime.jsx(TypographyAsterisk, { textColor: "danger600", children: "*" })
          ] }),
          labelAction && /* @__PURE__ */ jsxRuntime.jsx(LabelAction$1, { paddingLeft: 1, children: labelAction })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          EditorLayout,
          {
            isExpandMode,
            error,
            previewContent: value,
            onCollapse: handleToggleExpand,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                WysiwygNav,
                {
                  isExpandMode,
                  editorRef,
                  isPreviewMode,
                  onActionClick: handleActionClick,
                  onToggleMediaLib: handleToggleMediaLib,
                  onTogglePreviewMode: isExpandMode ? void 0 : handleTogglePreviewMode,
                  disabled
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                Editor,
                {
                  disabled,
                  isExpandMode,
                  editorRef,
                  error,
                  isPreviewMode,
                  name: name2,
                  onChange,
                  placeholder: formattedPlaceholder,
                  textareaRef,
                  value,
                  ref: forwardedRef
                }
              ),
              !isExpandMode && /* @__PURE__ */ jsxRuntime.jsx(WysiwygFooter, { onToggleExpand: handleToggleExpand })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(Hint, { hint, name: name2, error })
      ] }),
      error && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 1, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", textColor: "danger600", "data-strapi-field-error": true, children: error }) }),
      mediaLibVisible && // @ts-expect-error – TODO: fix this way of injecting because it's not really typeable without a registry.
      /* @__PURE__ */ jsxRuntime.jsx(MediaLibraryDialog, { onClose: handleToggleMediaLib, onSelectAssets: handleSelectAssets })
    ] });
  }
);
const LabelAction$1 = styled__default.default(designSystem.Box)`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;
const TypographyAsterisk = styled__default.default(designSystem.Typography)`
  line-height: 0;
`;
const VALIDATIONS_TO_OMIT = [
  "type",
  "model",
  "via",
  "collection",
  "default",
  "plugin",
  "enum",
  "regex",
  "pluginOptions"
];
const Inputs = ({
  componentUid,
  fieldSchema,
  keys,
  labelAction,
  metadatas,
  queryInfos,
  size,
  customFieldInputs
}) => {
  const {
    createActionAllowedFields,
    formErrors,
    isCreatingEntry,
    modifiedData,
    onChange,
    readActionAllowedFields,
    shouldNotRunValidations,
    updateActionAllowedFields
  } = helperPlugin.useCMEditViewDataManager();
  const { fields } = helperPlugin.useLibrary();
  const { formatMessage } = reactIntl.useIntl();
  const { contentType: currentContentTypeLayout } = useContentTypeLayout();
  const allowedFields = React__namespace.useMemo(() => {
    return isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields;
  }, [isCreatingEntry, createActionAllowedFields, updateActionAllowedFields]);
  const readableFields = React__namespace.useMemo(() => {
    return isCreatingEntry ? [] : readActionAllowedFields;
  }, [isCreatingEntry, readActionAllowedFields]);
  const value = get__default.default(modifiedData, keys, null);
  const disabled = React__namespace.useMemo(() => !get__default.default(metadatas, "editable", true), [metadatas]);
  const { type, customField: customFieldUid } = fieldSchema;
  const error = get__default.default(formErrors, [keys], void 0);
  const fieldName = getFieldName(keys);
  const validations = React__namespace.useMemo(() => {
    const inputValidations = omit__default.default(
      fieldSchema,
      shouldNotRunValidations ? [...VALIDATIONS_TO_OMIT, "required", "minLength"] : VALIDATIONS_TO_OMIT
    );
    const regexpString = "regex" in fieldSchema ? fieldSchema.regex : null;
    if (regexpString) {
      const regexp = new RegExp(regexpString);
      if (regexp) {
        inputValidations.regex = regexp;
      }
    }
    return inputValidations;
  }, [fieldSchema, shouldNotRunValidations]);
  const isRequired = React__namespace.useMemo(() => get__default.default(validations, ["required"], false), [validations]);
  const isChildOfDynamicZone = React__namespace.useMemo(() => {
    const attributes = get__default.default(currentContentTypeLayout, ["attributes"], {});
    const foundAttributeType = get__default.default(attributes, [fieldName[0], "type"], null);
    return foundAttributeType === "dynamiczone";
  }, [currentContentTypeLayout, fieldName]);
  const inputType = getInputType(type);
  const inputValue = type === "media" && !value ? [] : value;
  const isUserAllowedToEditField = React__namespace.useMemo(() => {
    const joinedName = fieldName.join(".");
    if (allowedFields.includes(joinedName)) {
      return true;
    }
    if (isChildOfDynamicZone) {
      return allowedFields.includes(fieldName[0]);
    }
    const isChildOfComponent = fieldName.length > 1;
    if (isChildOfComponent) {
      const parentFieldName = take__default.default(fieldName, fieldName.length - 1).join(".");
      return allowedFields.includes(parentFieldName);
    }
    return false;
  }, [allowedFields, fieldName, isChildOfDynamicZone]);
  const isUserAllowedToReadField = React__namespace.useMemo(() => {
    const joinedName = fieldName.join(".");
    if (readableFields.includes(joinedName)) {
      return true;
    }
    if (isChildOfDynamicZone) {
      return readableFields.includes(fieldName[0]);
    }
    const isChildOfComponent = fieldName.length > 1;
    if (isChildOfComponent) {
      const parentFieldName = take__default.default(fieldName, fieldName.length - 1).join(".");
      return readableFields.includes(parentFieldName);
    }
    return false;
  }, [readableFields, fieldName, isChildOfDynamicZone]);
  const shouldDisplayNotAllowedInput = isUserAllowedToReadField || isUserAllowedToEditField;
  const shouldDisableField = React__namespace.useMemo(() => {
    if (!isCreatingEntry) {
      const doesNotHaveRight = isUserAllowedToReadField && !isUserAllowedToEditField;
      if (doesNotHaveRight) {
        return true;
      }
      return disabled;
    }
    return disabled;
  }, [disabled, isCreatingEntry, isUserAllowedToEditField, isUserAllowedToReadField]);
  const options2 = [
    {
      metadatas: {
        intlLabel: {
          id: "components.InputSelect.option.placeholder",
          defaultMessage: "Choose here"
        },
        disabled: isRequired,
        hidden: isRequired
      },
      key: "__enum_option_null",
      value: ""
    },
    // @ts-expect-error – TODO: fix me
    ...(fieldSchema.enum ?? []).map((option) => {
      return {
        metadatas: {
          intlLabel: {
            id: option,
            defaultMessage: option
          },
          hidden: false,
          disabled: false
        },
        key: option,
        value: option
      };
    })
  ];
  const { label, description, placeholder, visible } = metadatas;
  if (visible === false) {
    return null;
  }
  if (!shouldDisplayNotAllowedInput) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      helperPlugin.NotAllowedInput,
      {
        description: description ? { id: description, defaultMessage: description } : void 0,
        intlLabel: { id: label, defaultMessage: label },
        labelAction,
        error: error ? formatMessage(error) : void 0,
        name: keys
      }
    );
  }
  if (type === "relation") {
    return (
      // @ts-expect-error – TODO: fix this, it won't work because you assume too much based off it's type so you can't narrow everything else down.
      /* @__PURE__ */ jsxRuntime.jsx(
        RelationInputDataManager,
        {
          ...metadatas,
          ...fieldSchema,
          componentUid,
          description: metadatas.description ? formatMessage({
            id: metadatas.description,
            defaultMessage: metadatas.description
          }) : void 0,
          intlLabel: {
            id: metadatas.label,
            defaultMessage: metadatas.label
          },
          labelAction,
          isUserAllowedToEditField,
          isUserAllowedToReadField,
          name: keys,
          placeholder: metadatas.placeholder ? {
            id: metadatas.placeholder,
            defaultMessage: metadatas.placeholder
          } : void 0,
          queryInfos: queryInfos ?? {},
          size,
          error: error ? formatMessage(error) : void 0
        }
      )
    );
  }
  const customInputs = {
    uid: InputUID,
    media: fields.media,
    wysiwyg: Wysiwyg,
    blocks: BlocksInput,
    ...fields,
    ...customFieldInputs
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    helperPlugin.GenericInput,
    {
      attribute: fieldSchema,
      autoComplete: "new-password",
      intlLabel: { id: label, defaultMessage: label },
      isNullable: inputType === "bool" && "default" in fieldSchema && (fieldSchema.default === null || fieldSchema.default === void 0),
      description: description ? { id: description, defaultMessage: description } : void 0,
      disabled: shouldDisableField,
      error,
      labelAction,
      contentTypeUID: currentContentTypeLayout.uid,
      customInputs,
      multiple: "multiple" in fieldSchema ? fieldSchema.multiple : false,
      name: keys,
      onChange,
      options: options2,
      placeholder: placeholder ? { id: placeholder, defaultMessage: placeholder } : void 0,
      required: fieldSchema.required || false,
      step: getStep(type),
      type: customFieldUid || inputType,
      value: inputValue,
      withDefaultValue: false
    }
  );
};
const getStep = (type) => {
  switch (type) {
    case "float":
    case "decimal":
      return 0.01;
    default:
      return 1;
  }
};
const getInputType = (type = "") => {
  switch (type.toLowerCase()) {
    case "blocks":
      return "blocks";
    case "boolean":
      return "bool";
    case "biginteger":
      return "text";
    case "decimal":
    case "float":
    case "integer":
      return "number";
    case "date":
    case "datetime":
    case "time":
      return type;
    case "email":
      return "email";
    case "enumeration":
      return "select";
    case "password":
      return "password";
    case "string":
      return "text";
    case "text":
      return "textarea";
    case "media":
    case "file":
    case "files":
      return "media";
    case "json":
      return "json";
    case "wysiwyg":
    case "WYSIWYG":
    case "richtext":
      return "wysiwyg";
    case "uid":
      return "uid";
    default:
      return type || "text";
  }
};
const NonRepeatableComponent = ({
  componentUid,
  isFromDynamicZone,
  isNested,
  name: name2
}) => {
  const { getComponentLayout } = useContentTypeLayout();
  const componentLayoutData = getComponentLayout(componentUid);
  const fields = componentLayoutData.layouts.edit;
  const { lazyComponentStore } = useLazyComponents();
  return /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.Box,
    {
      background: isFromDynamicZone ? "" : "neutral100",
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 6,
      paddingBottom: 6,
      hasRadius: isNested,
      borderColor: isNested ? "neutral200" : void 0,
      children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 6, children: fields.map((fieldRow, key) => {
        return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid, { gap: 4, children: fieldRow.map(({ name: fieldName, size, metadatas, fieldSchema, queryInfos }) => {
          const isComponent = fieldSchema.type === "component";
          const keys = `${name2}.${fieldName}`;
          if (isComponent) {
            const compoUid = fieldSchema.component;
            return /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: size, s: 12, xs: 12, children: /* @__PURE__ */ jsxRuntime.jsx(
              FieldComponent,
              {
                componentUid: compoUid,
                intlLabel: {
                  id: metadatas.label,
                  defaultMessage: metadatas.label
                },
                isNested: true,
                isRepeatable: fieldSchema.repeatable,
                max: fieldSchema.max,
                min: fieldSchema.min,
                name: keys,
                required: fieldSchema.required || false
              }
            ) }, fieldName);
          }
          return /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: size, s: 12, xs: 12, children: /* @__PURE__ */ jsxRuntime.jsx(
            Inputs,
            {
              componentUid,
              keys,
              fieldSchema,
              metadatas,
              queryInfos,
              size,
              customFieldInputs: lazyComponentStore
            }
          ) }, fieldName);
        }) }, key);
      }) })
    }
  );
};
const RepeatableComponent$1 = ({
  componentUid,
  componentValue = [],
  componentValueLength = 0,
  isReadOnly,
  max = Infinity,
  min = -Infinity,
  name: name2
}) => {
  const { addRepeatableComponentToField, formErrors, moveComponentField } = helperPlugin.useCMEditViewDataManager();
  const toggleNotification = helperPlugin.useNotification();
  const { formatMessage } = reactIntl.useIntl();
  const [collapseToOpen, setCollapseToOpen] = React__namespace.useState(null);
  const [liveText, setLiveText] = React__namespace.useState("");
  const { getComponentLayout, components } = useContentTypeLayout();
  const componentLayoutData = getComponentLayout(componentUid);
  const search = helperPlugin.useQuery();
  const componentTmpKeyWithFocussedField = React__namespace.useMemo(() => {
    if (search.has("field")) {
      const field = search.get("field");
      if (!field) {
        return void 0;
      }
      const [, path] = field.split(`${name2}.`);
      if (get__default.default(componentValue, path, void 0) !== void 0) {
        const [subpath] = path.split(".");
        return componentValue[parseInt(subpath, 10)]?.__temp_key__;
      }
    }
    return void 0;
  }, [componentValue, search, name2]);
  React__namespace.useEffect(() => {
    if (typeof componentTmpKeyWithFocussedField === "number") {
      setCollapseToOpen(componentTmpKeyWithFocussedField);
    }
  }, [componentTmpKeyWithFocussedField]);
  const nextTempKey = getMaxTempKey(componentValue) + 1;
  const componentErrorKeys = getComponentErrorKeys(name2, formErrors);
  const missingComponentsValue = min - componentValueLength;
  const hasMinError = formErrors[name2]?.id?.includes("min") ?? false;
  const toggleCollapses = () => {
    setCollapseToOpen(null);
  };
  const handleClick = () => {
    if (!isReadOnly) {
      if (componentValueLength < max) {
        const shouldCheckErrors = hasMinError;
        addRepeatableComponentToField?.(name2, componentLayoutData, components, shouldCheckErrors);
        setCollapseToOpen(nextTempKey);
      } else if (componentValueLength >= max) {
        toggleNotification({
          type: "info",
          message: { id: getTranslation("components.notification.info.maximum-requirement") }
        });
      }
    }
  };
  const handleMoveComponentField = (newIndex, currentIndex) => {
    setLiveText(
      formatMessage(
        {
          id: getTranslation("dnd.reorder"),
          defaultMessage: "{item}, moved. New position in list: {position}."
        },
        {
          item: `${name2}.${currentIndex}`,
          position: getItemPos(newIndex)
        }
      )
    );
    moveComponentField?.({
      name: name2,
      newIndex,
      currentIndex
    });
  };
  const mainField = "settings" in componentLayoutData ? componentLayoutData.settings.mainField ?? "id" : "id";
  const handleToggle = (key) => () => {
    if (collapseToOpen === key) {
      setCollapseToOpen(null);
    } else {
      setCollapseToOpen(key);
    }
  };
  const getItemPos = (index) => `${index + 1} of ${componentValueLength}`;
  const handleCancel = (index) => {
    setLiveText(
      formatMessage(
        {
          id: getTranslation("dnd.cancel-item"),
          defaultMessage: "{item}, dropped. Re-order cancelled."
        },
        {
          item: `${name2}.${index}`
        }
      )
    );
  };
  const handleGrabItem = (index) => {
    setLiveText(
      formatMessage(
        {
          id: getTranslation("dnd.grab-item"),
          defaultMessage: `{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel.`
        },
        {
          item: `${name2}.${index}`,
          position: getItemPos(index)
        }
      )
    );
  };
  const handleDropItem = (index) => {
    setLiveText(
      formatMessage(
        {
          id: getTranslation("dnd.drop-item"),
          defaultMessage: `{item}, dropped. Final position in list: {position}.`
        },
        {
          item: `${name2}.${index}`,
          position: getItemPos(index)
        }
      )
    );
  };
  let errorMessage = formErrors[name2];
  if (hasMinError) {
    errorMessage = {
      id: getTranslation("components.DynamicZone.missing-components"),
      defaultMessage: "There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}",
      values: { number: missingComponentsValue }
    };
  } else if (componentErrorKeys.some((error) => error.split(".").length > 1) && !hasMinError) {
    errorMessage = {
      id: getTranslation("components.RepeatableComponent.error-message"),
      defaultMessage: "The component(s) contain error(s)"
    };
  }
  if (componentValueLength === 0) {
    return /* @__PURE__ */ jsxRuntime.jsx(ComponentInitializer, { error: errorMessage, isReadOnly, onClick: handleClick });
  }
  const ariaDescriptionId = `${name2}-item-instructions`;
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { hasRadius: true, children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.VisuallyHidden, { id: ariaDescriptionId, children: formatMessage({
      id: getTranslation("dnd.instructions"),
      defaultMessage: `Press spacebar to grab and re-order`
    }) }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.VisuallyHidden, { "aria-live": "assertive", children: liveText }),
    /* @__PURE__ */ jsxRuntime.jsxs(AccordionGroup, { error: errorMessage, children: [
      /* @__PURE__ */ jsxRuntime.jsx(AccordionContent, { "aria-describedby": ariaDescriptionId, children: componentValue.map(({ __temp_key__: key }, index) => /* @__PURE__ */ jsxRuntime.jsx(
        Component,
        {
          componentFieldName: `${name2}.${index}`,
          componentUid,
          fields: componentLayoutData.layouts.edit,
          index,
          isOpen: collapseToOpen === key,
          isReadOnly,
          mainField,
          moveComponentField: handleMoveComponentField,
          onClickToggle: handleToggle(key),
          toggleCollapses,
          onCancel: handleCancel,
          onDropItem: handleDropItem,
          onGrabItem: handleGrabItem
        },
        key
      )) }),
      /* @__PURE__ */ jsxRuntime.jsx(AccordionFooter, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", height: "48px", background: "neutral0", children: /* @__PURE__ */ jsxRuntime.jsx(TextButtonCustom, { disabled: isReadOnly, onClick: handleClick, startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Plus, {}), children: formatMessage({
        id: getTranslation("containers.EditView.add.new-entry"),
        defaultMessage: "Add an entry"
      }) }) }) })
    ] })
  ] });
};
const TextButtonCustom = styled__default.default(designSystem.TextButton)`
  height: 100%;
  width: 100%;
  border-radius: 0 0 4px 4px;
  display: flex;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`;
const AccordionFooter = styled__default.default(designSystem.Box)`
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-left: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
`;
const AccordionContent = styled__default.default(designSystem.Box)`
  border-bottom: none;

  /* add the borders and make sure the top is transparent to avoid jumping with the hover effect  */
  & > div > div {
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    border-top-color: transparent;
  }

  /* the top accordion _does_ need a border though */
  & > div:first-child > div {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral200};
  }

  /* Reset all the border-radius' */
  & > div > div,
  & > div > div > div {
    border-radius: unset;
  }

  /* Give the border radius back to the first accordion */
  & > div:first-child > div,
  & > div:first-child > div > div {
    border-radius: ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0 0;
  }

  & > div > div[data-strapi-expanded='true'] {
    border: 1px solid ${({ theme }) => theme.colors.primary600};
  }
`;
const AccordionGroup = ({ children, error }) => {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.KeyboardNavigable, { attributeName: "data-strapi-accordion-toggle", children: [
    children,
    error && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 1, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", textColor: "danger600", children: formatMessage(
      { id: error.id, defaultMessage: error.defaultMessage },
      { ...error.values }
    ) }) })
  ] });
};
const CustomIconButton = styled__default.default(designSystem.IconButton)`
  background-color: transparent;

  svg {
    path {
      fill: ${({ theme, expanded }) => expanded ? theme.colors.primary600 : theme.colors.neutral600};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary600};
      }
    }
  }
`;
const ActionsFlex$1 = styled__default.default(designSystem.Flex)`
  & .drag-handle {
    background: unset;

    svg {
      path {
        fill: ${({ theme, expanded }) => expanded ? theme.colors.primary600 : void 0};
      }
    }

    &:hover {
      svg {
        path {
          /* keeps the hover style of the accordion */
          fill: ${({ theme }) => theme.colors.primary600};
        }
      }
    }
  }
`;
const Component = ({
  componentFieldName,
  componentUid,
  fields = [],
  index,
  isOpen,
  isReadOnly,
  mainField,
  moveComponentField,
  onClickToggle,
  toggleCollapses,
  onGrabItem,
  onDropItem,
  onCancel
}) => {
  const { modifiedData, removeRepeatableField, triggerFormValidation } = helperPlugin.useCMEditViewDataManager();
  const displayedValue = toString__default.default(
    get__default.default(modifiedData, [...componentFieldName.split("."), mainField], "")
  );
  const accordionRef = React__namespace.useRef(null);
  const { formatMessage } = reactIntl.useIntl();
  const componentKey = componentFieldName.split(".").slice(0, -1).join(".");
  const [{ handlerId, isDragging, handleKeyDown }, boxRef, dropRef, dragRef, dragPreviewRef] = useDragAndDrop(!isReadOnly, {
    type: `${ItemTypes.COMPONENT}_${componentKey}`,
    index,
    item: {
      index,
      displayedValue
    },
    onStart() {
      toggleCollapses();
    },
    onEnd() {
      triggerFormValidation();
    },
    onMoveItem: moveComponentField,
    onDropItem,
    onGrabItem,
    onCancel
  });
  React__namespace.useEffect(() => {
    dragPreviewRef(reactDndHtml5Backend.getEmptyImage(), { captureDraggingState: false });
  }, [dragPreviewRef, index]);
  const composedAccordionRefs = composeRefs(accordionRef, dragRef);
  const composedBoxRefs = composeRefs(boxRef, dropRef);
  const { lazyComponentStore } = useLazyComponents();
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { ref: (ref) => composedBoxRefs(ref), children: isDragging ? /* @__PURE__ */ jsxRuntime.jsx(Preview$1, {}) : /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Accordion, { expanded: isOpen, onToggle: onClickToggle, id: componentFieldName, size: "S", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.AccordionToggle,
      {
        action: isReadOnly ? null : /* @__PURE__ */ jsxRuntime.jsxs(ActionsFlex$1, { gap: 0, expanded: isOpen, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            CustomIconButton,
            {
              expanded: isOpen,
              noBorder: true,
              onClick: () => {
                removeRepeatableField?.(componentFieldName);
                toggleCollapses();
              },
              label: formatMessage({
                id: getTranslation("containers.Edit.delete"),
                defaultMessage: "Delete"
              }),
              icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Trash, {})
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.IconButton,
            {
              className: "drag-handle",
              ref: composedAccordionRefs,
              forwardedAs: "div",
              role: "button",
              noBorder: true,
              tabIndex: 0,
              onClick: (e) => e.stopPropagation(),
              "data-handler-id": handlerId,
              label: formatMessage({
                id: getTranslation("components.DragHandle-label"),
                defaultMessage: "Drag"
              }),
              onKeyDown: handleKeyDown,
              children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Drag, {})
            }
          )
        ] }),
        title: displayedValue,
        togglePosition: "left"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.AccordionContent, { children: /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Flex,
      {
        direction: "column",
        alignItems: "stretch",
        background: "neutral100",
        padding: 6,
        gap: 6,
        children: fields.map((fieldRow, key) => {
          return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid, { gap: 4, children: fieldRow.map(({ name: name2, fieldSchema, metadatas, queryInfos, size }) => {
            const isComponent = fieldSchema.type === "component";
            const keys = `${componentFieldName}.${name2}`;
            if (isComponent) {
              const componentUid2 = fieldSchema.component;
              return /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: size, s: 12, xs: 12, children: /* @__PURE__ */ jsxRuntime.jsx(
                FieldComponent,
                {
                  componentUid: componentUid2,
                  intlLabel: {
                    id: metadatas.label,
                    defaultMessage: metadatas.label
                  },
                  isRepeatable: fieldSchema.repeatable,
                  isNested: true,
                  name: keys,
                  max: fieldSchema.max,
                  min: fieldSchema.min,
                  required: fieldSchema.required
                }
              ) }, name2);
            }
            return /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: size, s: 12, xs: 12, children: /* @__PURE__ */ jsxRuntime.jsx(
              Inputs,
              {
                componentUid,
                fieldSchema,
                keys,
                metadatas,
                queryInfos,
                size,
                customFieldInputs: lazyComponentStore
              }
            ) }, keys);
          }) }, key);
        })
      }
    ) })
  ] }) });
};
const Preview$1 = () => {
  return /* @__PURE__ */ jsxRuntime.jsx(StyledSpan, { as: "span", padding: 6, background: "primary100" });
};
const StyledSpan = styled__default.default(designSystem.Box)`
  display: block;
  outline: 1px dashed ${({ theme }) => theme.colors.primary500};
  outline-offset: -1px;
`;
function getComponentErrorKeys(name2, formErrors = {}) {
  return Object.keys(formErrors).filter((errorKey) => errorKey.startsWith(name2)).map(
    (errorKey) => errorKey.split(".").slice(0, name2.split(".").length + 1).join(".")
  );
}
const FieldComponent = ({
  componentUid,
  intlLabel,
  isFromDynamicZone,
  isRepeatable,
  isNested,
  labelAction,
  max = Infinity,
  min = -Infinity,
  name: name2,
  required
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const {
    addNonRepeatableComponentToField,
    createActionAllowedFields,
    isCreatingEntry,
    modifiedData,
    removeComponentFromField,
    readActionAllowedFields,
    updateActionAllowedFields
  } = helperPlugin.useCMEditViewDataManager();
  const { contentType } = useContentTypeLayout();
  const allDynamicZoneFields = React__namespace.useMemo(() => {
    const attributes = contentType?.attributes ?? {};
    return Object.keys(attributes).filter(
      (attrName) => attributes[attrName].type === "dynamiczone"
    );
  }, [contentType]);
  const allowedFields = isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields;
  const componentValue = fp.get(name2, modifiedData) ?? null;
  const compoName = getFieldName(name2);
  const hasChildrenAllowedFields = React__namespace.useMemo(() => {
    if (isFromDynamicZone && isCreatingEntry) {
      return true;
    }
    const includedDynamicZoneFields = allowedFields.filter((name22) => name22 === compoName[0]);
    if (includedDynamicZoneFields.length > 0) {
      return true;
    }
    const relatedChildrenAllowedFields = allowedFields.map((fieldName) => {
      return fieldName.split(".");
    }).filter((fieldName) => {
      if (fieldName.length < compoName.length) {
        return false;
      }
      return fieldName.slice(0, compoName.length).join(".") === compoName.join(".");
    });
    return relatedChildrenAllowedFields.length > 0;
  }, [isFromDynamicZone, isCreatingEntry, allowedFields, compoName]);
  const hasChildrenReadableFields = React__namespace.useMemo(() => {
    if (isFromDynamicZone) {
      return true;
    }
    if (allDynamicZoneFields.includes(compoName[0])) {
      return true;
    }
    const allowedFields2 = isCreatingEntry ? [] : readActionAllowedFields;
    const relatedChildrenAllowedFields = allowedFields2.map((fieldName) => {
      return fieldName.split(".");
    }).filter((fieldName) => {
      if (fieldName.length < compoName.length) {
        return false;
      }
      return fieldName.slice(0, compoName.length).join(".") === compoName.join(".");
    });
    return relatedChildrenAllowedFields.length > 0;
  }, [
    isFromDynamicZone,
    allDynamicZoneFields,
    compoName,
    isCreatingEntry,
    readActionAllowedFields
  ]);
  const isReadOnly = isCreatingEntry ? false : hasChildrenAllowedFields ? false : hasChildrenReadableFields;
  const componentValueLength = fp.size(componentValue);
  const isInitialized = componentValue !== null || isFromDynamicZone;
  const showResetComponent = !isRepeatable && isInitialized && !isFromDynamicZone && hasChildrenAllowedFields;
  const { getComponentLayout, components } = useContentTypeLayout();
  const componentLayoutData = getComponentLayout(componentUid);
  if (!hasChildrenAllowedFields && isCreatingEntry) {
    return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.NotAllowedInput, { labelAction, intlLabel, name: name2 });
  }
  if (!hasChildrenAllowedFields && !isCreatingEntry && !hasChildrenReadableFields) {
    return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.NotAllowedInput, { labelAction, intlLabel, name: name2 });
  }
  const handleClickAddNonRepeatableComponentToField = () => {
    addNonRepeatableComponentToField?.(name2, componentLayoutData, components);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { justifyContent: "space-between", children: [
      intlLabel && /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { paddingBottom: 1, children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          designSystem.Typography,
          {
            textColor: "neutral800",
            htmlFor: name2,
            variant: "pi",
            fontWeight: "bold",
            as: "label",
            children: [
              formatMessage(intlLabel),
              isRepeatable && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                " (",
                componentValueLength,
                ")"
              ] }),
              required && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "danger600", children: "*" })
            ]
          }
        ),
        labelAction && /* @__PURE__ */ jsxRuntime.jsx(LabelAction, { paddingLeft: 1, children: labelAction })
      ] }),
      showResetComponent && /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.IconButton,
        {
          label: formatMessage({
            id: getTranslation("components.reset-entry"),
            defaultMessage: "Reset Entry"
          }),
          icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Trash, {}),
          noBorder: true,
          onClick: () => {
            removeComponentFromField?.(name2, componentUid);
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 1, children: [
      !isRepeatable && !isInitialized && /* @__PURE__ */ jsxRuntime.jsx(
        ComponentInitializer,
        {
          isReadOnly,
          onClick: handleClickAddNonRepeatableComponentToField
        }
      ),
      !isRepeatable && isInitialized && /* @__PURE__ */ jsxRuntime.jsx(
        NonRepeatableComponent,
        {
          componentUid,
          isFromDynamicZone,
          isNested,
          name: name2
        }
      ),
      isRepeatable && /* @__PURE__ */ jsxRuntime.jsx(
        RepeatableComponent$1,
        {
          componentValue: componentValue ?? void 0,
          componentValueLength,
          componentUid,
          isReadOnly,
          max,
          min,
          name: name2
        }
      )
    ] })
  ] });
};
const LabelAction = styled__default.default(designSystem.Box)`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;
const DynamicComponent = ({
  componentUid,
  formErrors = {},
  index = 0,
  isFieldAllowed = false,
  name: name2,
  onRemoveComponentClick,
  onMoveComponent,
  onGrabItem,
  onDropItem,
  onCancel,
  dynamicComponentsByCategory = {},
  onAddComponent
}) => {
  const [isOpen, setIsOpen] = React__namespace.useState(true);
  const { formatMessage } = reactIntl.useIntl();
  const { getComponentLayout } = useContentTypeLayout();
  const { modifiedData } = helperPlugin.useCMEditViewDataManager();
  const { icon, friendlyName, mainValue } = React__namespace.useMemo(() => {
    const componentLayoutData = getComponentLayout(componentUid);
    const {
      info: { icon: icon2, displayName }
    } = componentLayoutData;
    const mainFieldKey = get__default.default(componentLayoutData, ["settings", "mainField"], "id");
    const mainField = get__default.default(modifiedData, [name2, index, mainFieldKey]) ?? "";
    const displayedValue = mainFieldKey === "id" ? "" : String(mainField).trim();
    const mainValue2 = displayedValue.length > 0 ? ` - ${displayedValue}` : displayedValue;
    return { friendlyName: displayName, icon: icon2, mainValue: mainValue2 };
  }, [componentUid, getComponentLayout, modifiedData, name2, index]);
  const fieldsErrors = Object.keys(formErrors).filter((errorKey) => {
    const errorKeysArray = errorKey.split(".");
    if (`${errorKeysArray[0]}.${errorKeysArray[1]}` === `${name2}.${index}`) {
      return true;
    }
    return false;
  });
  let errorMessage;
  if (fieldsErrors.length > 0) {
    errorMessage = formatMessage({
      id: getTranslation("components.DynamicZone.error-message"),
      defaultMessage: "The component contains error(s)"
    });
  }
  const handleToggle = () => {
    setIsOpen((s) => !s);
  };
  const [{ handlerId, isDragging, handleKeyDown }, boxRef, dropRef, dragRef, dragPreviewRef] = useDragAndDrop(isFieldAllowed, {
    type: `${ItemTypes.DYNAMIC_ZONE}_${name2}`,
    index,
    item: {
      index,
      displayedValue: `${friendlyName}${mainValue}`,
      icon
    },
    onMoveItem: onMoveComponent,
    onDropItem,
    onGrabItem,
    onCancel
  });
  React__namespace.useEffect(() => {
    dragPreviewRef(reactDndHtml5Backend.getEmptyImage(), { captureDraggingState: false });
  }, [dragPreviewRef, index]);
  const composedBoxRefs = composeRefs(boxRef, dropRef);
  const accordionActions = !isFieldAllowed ? null : /* @__PURE__ */ jsxRuntime.jsxs(ActionsFlex, { gap: 0, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      IconButtonCustom,
      {
        noBorder: true,
        label: formatMessage(
          {
            id: getTranslation("components.DynamicZone.delete-label"),
            defaultMessage: "Delete {name}"
          },
          { name: friendlyName }
        ),
        onClick: onRemoveComponentClick,
        children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Trash, {})
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.IconButton,
      {
        forwardedAs: "div",
        role: "button",
        noBorder: true,
        tabIndex: 0,
        onClick: (e) => e.stopPropagation(),
        "data-handler-id": handlerId,
        ref: dragRef,
        label: formatMessage({
          id: getTranslation("components.DragHandle-label"),
          defaultMessage: "Drag"
        }),
        onKeyDown: handleKeyDown,
        children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Drag, {})
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(v2.Menu.Root, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(v2.Menu.Trigger, { size: "S", endIcon: null, paddingLeft: 2, paddingRight: 2, children: [
        /* @__PURE__ */ jsxRuntime.jsx(Icons.More, { "aria-hidden": true, focusable: false }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.VisuallyHidden, { as: "span", children: formatMessage({
          id: getTranslation("components.DynamicZone.more-actions"),
          defaultMessage: "More actions"
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(v2.Menu.Content, { children: [
        /* @__PURE__ */ jsxRuntime.jsxs(v2.Menu.SubRoot, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(v2.Menu.SubTrigger, { children: formatMessage({
            id: getTranslation("components.DynamicZone.add-item-above"),
            defaultMessage: "Add component above"
          }) }),
          /* @__PURE__ */ jsxRuntime.jsx(v2.Menu.SubContent, { children: Object.entries(dynamicComponentsByCategory).map(([category, components]) => /* @__PURE__ */ jsxRuntime.jsxs(React__namespace.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(v2.Menu.Label, { children: category }),
            components.map(({ componentUid: componentUid2, info: { displayName } }) => /* @__PURE__ */ jsxRuntime.jsx(
              v2.MenuItem,
              {
                onSelect: () => onAddComponent?.(componentUid2, index),
                children: displayName
              },
              componentUid2
            ))
          ] }, category)) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(v2.Menu.SubRoot, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(v2.Menu.SubTrigger, { children: formatMessage({
            id: getTranslation("components.DynamicZone.add-item-below"),
            defaultMessage: "Add component below"
          }) }),
          /* @__PURE__ */ jsxRuntime.jsx(v2.Menu.SubContent, { children: Object.entries(dynamicComponentsByCategory).map(([category, components]) => /* @__PURE__ */ jsxRuntime.jsxs(React__namespace.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(v2.Menu.Label, { children: category }),
            components.map(({ componentUid: componentUid2, info: { displayName } }) => /* @__PURE__ */ jsxRuntime.jsx(
              v2.MenuItem,
              {
                onSelect: () => onAddComponent?.(componentUid2, index + 1),
                children: displayName
              },
              componentUid2
            ))
          ] }, category)) })
        ] })
      ] })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntime.jsxs(ComponentContainer, { as: "li", width: "100%", children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(Rectangle, { background: "neutral200" }) }),
    /* @__PURE__ */ jsxRuntime.jsx(StyledBox, { ref: composedBoxRefs, hasRadius: true, children: isDragging ? /* @__PURE__ */ jsxRuntime.jsx(Preview, {}) : /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Accordion, { expanded: isOpen, onToggle: handleToggle, size: "S", error: errorMessage, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.AccordionToggle,
        {
          startIcon: /* @__PURE__ */ jsxRuntime.jsx(ComponentIcon, { icon, showBackground: false, size: "S" }),
          action: accordionActions,
          title: `${friendlyName}${mainValue}`,
          togglePosition: "left"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.AccordionContent, { children: /* @__PURE__ */ jsxRuntime.jsx(AccordionContentRadius, { background: "neutral0", children: /* @__PURE__ */ jsxRuntime.jsx(
        FieldComponent,
        {
          componentUid,
          name: `${name2}.${index}`,
          isFromDynamicZone: true
        }
      ) }) })
    ] }) })
  ] });
};
const ActionsFlex = styled__default.default(designSystem.Flex)`
  /* 
    we need to remove the background from the button but we can't 
    wrap the element in styled because it breaks the forwardedAs which
    we need for drag handler to work on firefox
  */
  div[role='button'] {
    background: transparent;
  }
`;
const IconButtonCustom = styled__default.default(designSystem.IconButton)`
  background-color: transparent;

  svg path {
    fill: ${({ theme, expanded }) => expanded ? theme.colors.primary600 : theme.colors.neutral600};
  }
`;
const StyledBox = styled__default.default(designSystem.Box)`
  > div:first-child {
    box-shadow: ${({ theme }) => theme.shadows.tableShadow};
  }
`;
const AccordionContentRadius = styled__default.default(designSystem.Box)`
  border-radius: 0 0 ${({ theme }) => theme.spaces[1]} ${({ theme }) => theme.spaces[1]};
`;
const Rectangle = styled__default.default(designSystem.Box)`
  width: ${({ theme }) => theme.spaces[2]};
  height: ${({ theme }) => theme.spaces[4]};
`;
const Preview = styled__default.default.span`
  display: block;
  background-color: ${({ theme }) => theme.colors.primary100};
  outline: 1px dashed ${({ theme }) => theme.colors.primary500};
  outline-offset: -1px;
  padding: ${({ theme }) => theme.spaces[6]};
`;
const ComponentContainer = styled__default.default(designSystem.Box)`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const DynamicZoneLabel = ({
  label,
  labelAction,
  name: name2,
  numberOfComponents = 0,
  required,
  intlDescription
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const intlLabel = formatMessage({ id: label || name2, defaultMessage: label || name2 });
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.Box,
    {
      paddingTop: 3,
      paddingBottom: 3,
      paddingRight: 4,
      paddingLeft: 4,
      borderRadius: "26px",
      background: "neutral0",
      shadow: "filterShadow",
      color: "neutral500",
      children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", justifyContent: "center", children: [
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { maxWidth: helperPlugin.pxToRem(356), children: [
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { variant: "pi", textColor: "neutral600", fontWeight: "bold", ellipsis: true, children: [
            intlLabel,
            " "
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { variant: "pi", textColor: "neutral600", fontWeight: "bold", children: [
            "(",
            numberOfComponents,
            ")"
          ] }),
          required && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "danger600", children: "*" }),
          labelAction && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingLeft: 1, children: labelAction })
        ] }),
        intlDescription && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 1, maxWidth: helperPlugin.pxToRem(356), children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", textColor: "neutral600", ellipsis: true, children: formatMessage(intlDescription) }) })
      ] })
    }
  ) });
};
const DynamicZone = ({ name: name2, labelAction, fieldSchema, metadatas }) => {
  const { max = Infinity, min = -Infinity, components = [], required = false } = fieldSchema ?? {};
  const [addComponentIsOpen, setAddComponentIsOpen] = React__namespace.useState(false);
  const [liveText, setLiveText] = React__namespace.useState("");
  const {
    addComponentToDynamicZone,
    createActionAllowedFields,
    isCreatingEntry,
    formErrors,
    modifiedData,
    moveComponentField,
    removeComponentFromDynamicZone,
    readActionAllowedFields,
    updateActionAllowedFields
  } = helperPlugin.useCMEditViewDataManager();
  const dynamicDisplayedComponents = React__namespace.useMemo(
    () => (modifiedData?.[name2] ?? []).map(
      (data) => {
        return {
          componentUid: data.__component,
          id: data.id ?? data.__temp_key__
        };
      }
    ),
    [modifiedData, name2]
  );
  const { getComponentLayout, components: allComponents } = useContentTypeLayout();
  const dynamicComponentsByCategory = React__namespace.useMemo(() => {
    return components.reduce(
      (acc, componentUid) => {
        const layout = getComponentLayout(componentUid);
        const { category, info, attributes } = layout;
        const component = { componentUid, info, attributes };
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category] = [...acc[category], component];
        return acc;
      },
      {}
    );
  }, [components, getComponentLayout]);
  const { formatMessage } = reactIntl.useIntl();
  const toggleNotification = helperPlugin.useNotification();
  const isFieldAllowed = (isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields).includes(name2);
  const isFieldReadable = (isCreatingEntry ? [] : readActionAllowedFields).includes(name2);
  const dynamicDisplayedComponentsLength = dynamicDisplayedComponents.length;
  const intlDescription = metadatas.description ? { id: metadatas.description, defaultMessage: metadatas.description } : void 0;
  const dynamicZoneError = formErrors[name2];
  const missingComponentNumber = min - dynamicDisplayedComponentsLength;
  const hasError = !!dynamicZoneError;
  const handleAddComponent = (componentUid, position) => {
    setAddComponentIsOpen(false);
    const componentLayoutData = getComponentLayout(componentUid);
    addComponentToDynamicZone?.(name2, componentLayoutData, allComponents, hasError, position);
  };
  const handleClickOpenPicker = () => {
    if (dynamicDisplayedComponentsLength < max) {
      setAddComponentIsOpen((prev) => !prev);
    } else {
      toggleNotification({
        type: "info",
        message: { id: getTranslation("components.notification.info.maximum-requirement") }
      });
    }
  };
  const handleMoveComponent = (newIndex, currentIndex) => {
    setLiveText(
      formatMessage(
        {
          id: getTranslation("dnd.reorder"),
          defaultMessage: "{item}, moved. New position in list: {position}."
        },
        {
          item: `${name2}.${currentIndex}`,
          position: getItemPos(newIndex)
        }
      )
    );
    moveComponentField?.({
      name: name2,
      newIndex,
      currentIndex
    });
  };
  const getItemPos = (index) => `${index + 1} of ${dynamicDisplayedComponents.length}`;
  const handleCancel = (index) => {
    setLiveText(
      formatMessage(
        {
          id: getTranslation("dnd.cancel-item"),
          defaultMessage: "{item}, dropped. Re-order cancelled."
        },
        {
          item: `${name2}.${index}`
        }
      )
    );
  };
  const handleGrabItem = (index) => {
    setLiveText(
      formatMessage(
        {
          id: getTranslation("dnd.grab-item"),
          defaultMessage: `{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel.`
        },
        {
          item: `${name2}.${index}`,
          position: getItemPos(index)
        }
      )
    );
  };
  const handleDropItem = (index) => {
    setLiveText(
      formatMessage(
        {
          id: getTranslation("dnd.drop-item"),
          defaultMessage: `{item}, dropped. Final position in list: {position}.`
        },
        {
          item: `${name2}.${index}`,
          position: getItemPos(index)
        }
      )
    );
  };
  const handleRemoveComponent = (name22, currentIndex) => () => {
    removeComponentFromDynamicZone?.(name22, currentIndex);
  };
  const renderButtonLabel = () => {
    if (addComponentIsOpen) {
      return formatMessage({ id: "app.utils.close-label", defaultMessage: "Close" });
    }
    if (hasError && dynamicZoneError.id?.includes("max")) {
      return formatMessage({
        id: "components.Input.error.validation.max",
        defaultMessage: "The value is too high."
      });
    }
    if (hasError && dynamicZoneError.id?.includes("min")) {
      return formatMessage(
        {
          id: getTranslation(`components.DynamicZone.missing-components`),
          defaultMessage: "There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}"
        },
        { number: missingComponentNumber }
      );
    }
    return formatMessage(
      {
        id: getTranslation("components.DynamicZone.add-component"),
        defaultMessage: "Add a component to {componentName}"
      },
      { componentName: metadatas.label || name2 }
    );
  };
  if (!isFieldAllowed && (isCreatingEntry || !isFieldReadable && !isCreatingEntry)) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      helperPlugin.NotAllowedInput,
      {
        description: intlDescription,
        intlLabel: { id: metadatas.label, defaultMessage: metadatas.label },
        labelAction,
        name: name2
      }
    );
  }
  const ariaDescriptionId = `${name2}-item-instructions`;
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 6, children: [
    dynamicDisplayedComponentsLength > 0 && /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        DynamicZoneLabel,
        {
          intlDescription,
          label: metadatas.label,
          labelAction,
          name: name2,
          numberOfComponents: dynamicDisplayedComponentsLength,
          required
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.VisuallyHidden, { id: ariaDescriptionId, children: formatMessage({
        id: getTranslation("dnd.instructions"),
        defaultMessage: `Press spacebar to grab and re-order`
      }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.VisuallyHidden, { "aria-live": "assertive", children: liveText }),
      /* @__PURE__ */ jsxRuntime.jsx("ol", { "aria-describedby": ariaDescriptionId, children: dynamicDisplayedComponents.map(({ componentUid, id }, index) => /* @__PURE__ */ jsxRuntime.jsx(
        DynamicComponent,
        {
          componentUid,
          formErrors,
          index,
          isFieldAllowed,
          name: name2,
          onMoveComponent: handleMoveComponent,
          onRemoveComponentClick: handleRemoveComponent(name2, index),
          onCancel: handleCancel,
          onDropItem: handleDropItem,
          onGrabItem: handleGrabItem,
          onAddComponent: handleAddComponent,
          dynamicComponentsByCategory
        },
        `${componentUid}-${id}`
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(
      AddComponentButton,
      {
        hasError,
        isDisabled: !isFieldAllowed,
        isOpen: addComponentIsOpen,
        onClick: handleClickOpenPicker,
        children: renderButtonLabel()
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(
      ComponentPicker,
      {
        dynamicComponentsByCategory,
        isOpen: addComponentIsOpen,
        onClickAddComponent: handleAddComponent
      }
    )
  ] });
};
DynamicZone.defaultProps = {
  fieldSchema: {},
  labelAction: null
};
DynamicZone.propTypes = {
  fieldSchema: PropTypes__default.default.shape({
    components: PropTypes__default.default.array,
    max: PropTypes__default.default.number,
    min: PropTypes__default.default.number,
    required: PropTypes__default.default.bool
  }),
  labelAction: PropTypes__default.default.element,
  metadatas: PropTypes__default.default.shape({
    description: PropTypes__default.default.string,
    label: PropTypes__default.default.string
  }).isRequired,
  name: PropTypes__default.default.string.isRequired
};
const CREATOR_FIELDS = ["createdBy", "updatedBy"];
const findAllAndReplaceSetup = (components, predicate = () => false, replacement) => {
  const findAllAndReplace = (data, attributes, {
    ignoreFalseyValues = false,
    path = [],
    parent = attributes
  } = {}) => {
    return Object.entries(attributes).reduce(
      (acc, [key, value]) => {
        if (ignoreFalseyValues && (acc === null || acc === void 0 || acc[key] === void 0 || acc[key] === null)) {
          return acc;
        }
        if (predicate(value, { path: [...path, key], parent })) {
          acc[key] = typeof replacement === "function" ? (
            // @ts-expect-error – TODO: Fix this.
            replacement(acc[key], { path: [...path, key], parent: acc })
          ) : replacement;
        }
        if (value.type === "component") {
          const componentAttributes = components[value.component].attributes;
          if (!value.repeatable && acc[key] && typeof acc[key] === "object") {
            acc[key] = findAllAndReplace(acc[key], componentAttributes, {
              ignoreFalseyValues,
              path: [...path, key],
              parent: attributes[key]
            });
          } else if (value.repeatable && Array.isArray(acc[key])) {
            acc[key] = acc[key].map((datum, index) => {
              const data2 = findAllAndReplace(datum, componentAttributes, {
                ignoreFalseyValues,
                path: [...path, key, index.toString()],
                parent: attributes[key]
              });
              return data2;
            });
          }
        } else if (value.type === "dynamiczone" && Array.isArray(acc[key])) {
          acc[key] = acc[key].map((datum, index) => {
            const componentAttributes = components[datum.__component].attributes;
            const data2 = findAllAndReplace(datum, componentAttributes, {
              ignoreFalseyValues,
              path: [...path, key, index.toString()],
              parent: attributes[key]
            });
            return data2;
          });
        }
        return acc;
      },
      { ...data }
    );
  };
  return findAllAndReplace;
};
const moveFields = (initialValue, from, to, value) => {
  const returnedValue = initialValue.slice();
  returnedValue.splice(from, 1);
  returnedValue.splice(to, 0, value);
  return returnedValue;
};
const initialState$5 = {
  componentsDataStructure: {},
  contentTypeDataStructure: {},
  formErrors: {},
  initialData: {},
  modifiedData: {},
  shouldCheckErrors: false,
  modifiedDZName: null,
  publishConfirmation: {
    show: false,
    draftCount: 0
  }
};
const reducer$5 = (state, action) => (
  // eslint-disable-next-line consistent-return
  produce__default.default(state, (draftState) => {
    switch (action.type) {
      case "ADD_NON_REPEATABLE_COMPONENT_TO_FIELD": {
        const { componentLayoutData, allComponents } = action;
        const defaultDataStructure = {
          ...state.componentsDataStructure[componentLayoutData.uid]
        };
        const findAllRelationsAndReplaceWithEmptyArray = findAllAndReplaceSetup(
          allComponents,
          (value) => value.type === "relation",
          []
        );
        const componentDataStructure = findAllRelationsAndReplaceWithEmptyArray(
          defaultDataStructure,
          componentLayoutData.attributes
        );
        set__default.default(draftState, ["modifiedData", ...action.keys], componentDataStructure);
        break;
      }
      case "ADD_COMPONENT_TO_DYNAMIC_ZONE":
      case "ADD_REPEATABLE_COMPONENT_TO_FIELD": {
        const {
          keys,
          allComponents,
          componentLayoutData,
          shouldCheckErrors,
          position = void 0
        } = action;
        if (shouldCheckErrors) {
          draftState.shouldCheckErrors = !state.shouldCheckErrors;
        }
        if (action.type === "ADD_COMPONENT_TO_DYNAMIC_ZONE") {
          draftState.modifiedDZName = keys[0];
        }
        const currentValue = [...get__default.default(state, ["modifiedData", ...keys], [])];
        let actualPosition = position;
        if (actualPosition === void 0) {
          actualPosition = currentValue.length;
        } else if (actualPosition < 0) {
          actualPosition = 0;
        }
        const defaultDataStructure = action.type === "ADD_COMPONENT_TO_DYNAMIC_ZONE" ? {
          ...state.componentsDataStructure[componentLayoutData.uid],
          __component: componentLayoutData.uid,
          __temp_key__: getMaxTempKey(currentValue) + 1
        } : {
          ...state.componentsDataStructure[componentLayoutData.uid],
          __temp_key__: getMaxTempKey(currentValue) + 1
        };
        const findAllRelationsAndReplaceWithEmptyArray = findAllAndReplaceSetup(
          allComponents,
          (value) => value.type === "relation",
          []
        );
        const componentDataStructure = findAllRelationsAndReplaceWithEmptyArray(
          defaultDataStructure,
          componentLayoutData.attributes
        );
        currentValue.splice(actualPosition, 0, componentDataStructure);
        set__default.default(draftState, ["modifiedData", ...keys], currentValue);
        break;
      }
      case "LOAD_RELATION": {
        const { initialDataPath, modifiedDataPath, value } = action;
        const initialDataRelations = get__default.default(state, initialDataPath) ?? [];
        const modifiedDataRelations = get__default.default(state, modifiedDataPath);
        const valuesToLoad = value.filter((relation) => {
          return !initialDataRelations.some((initialDataRelation) => {
            return initialDataRelation.id === relation.id;
          });
        });
        const keys = fractionalIndexing.generateNKeysBetween(
          null,
          modifiedDataRelations[0]?.__temp_key__,
          valuesToLoad.length
        );
        const valuesWithKeys = valuesToLoad.map((relation, index) => ({
          ...relation,
          __temp_key__: keys[index]
        }));
        set__default.default(
          draftState,
          initialDataPath,
          uniqBy__default.default([...valuesWithKeys, ...initialDataRelations], "id")
        );
        set__default.default(
          draftState,
          modifiedDataPath,
          uniqBy__default.default([...valuesWithKeys, ...modifiedDataRelations], "id")
        );
        break;
      }
      case "CONNECT_RELATION": {
        const path = ["modifiedData", ...action.keys];
        const { value, toOneRelation } = action;
        if (toOneRelation) {
          set__default.default(draftState, path, [value]);
        } else {
          const modifiedDataRelations = get__default.default(state, path);
          const [key] = fractionalIndexing.generateNKeysBetween(modifiedDataRelations.at(-1)?.__temp_key__, null, 1);
          const newRelations = [...modifiedDataRelations, { ...value, __temp_key__: key }];
          set__default.default(draftState, path, newRelations);
        }
        break;
      }
      case "DISCONNECT_RELATION": {
        const path = ["modifiedData", ...action.keys];
        const { id } = action;
        const modifiedDataRelation = get__default.default(state, [...path]);
        const newRelations = modifiedDataRelation.filter((rel) => rel.id !== id);
        set__default.default(draftState, path, newRelations);
        break;
      }
      case "MOVE_COMPONENT_FIELD":
      case "REORDER_RELATION": {
        const { oldIndex, newIndex, keys } = action;
        const path = ["modifiedData", ...keys];
        const modifiedDataRelations = get__default.default(state, [...path]);
        const currentItem = modifiedDataRelations[oldIndex];
        const newRelations = [...modifiedDataRelations];
        if (action.type === "REORDER_RELATION") {
          const startKey = oldIndex > newIndex ? modifiedDataRelations[newIndex - 1]?.__temp_key__ : modifiedDataRelations[newIndex]?.__temp_key__;
          const endKey = oldIndex > newIndex ? modifiedDataRelations[newIndex]?.__temp_key__ : modifiedDataRelations[newIndex + 1]?.__temp_key__;
          const [newKey] = fractionalIndexing.generateNKeysBetween(startKey, endKey, 1);
          newRelations.splice(oldIndex, 1);
          newRelations.splice(newIndex, 0, { ...currentItem, __temp_key__: newKey });
        } else {
          newRelations.splice(oldIndex, 1);
          newRelations.splice(newIndex, 0, currentItem);
        }
        set__default.default(draftState, path, newRelations);
        break;
      }
      case "INIT_FORM": {
        const { initialValues, components = {}, attributes = {}, setModifiedDataOnly } = action;
        const data = cloneDeep__default.default(initialValues);
        const findAllRelationsAndReplaceWithEmptyArray = findAllAndReplaceSetup(
          components,
          (value, { path }) => {
            const fieldName = path[path.length - 1];
            const isCreatorField = CREATOR_FIELDS.includes(fieldName);
            return value.type === "relation" && !isCreatorField;
          },
          (_, { path }) => {
            if (state.modifiedData?.id === data.id && get__default.default(state.modifiedData, path)) {
              return get__default.default(state.modifiedData, path);
            }
            return [];
          }
        );
        const mergedDataWithPreparedRelations = findAllRelationsAndReplaceWithEmptyArray(
          data,
          attributes
        );
        const findComponentsAndReplaceWithTempKey = findAllAndReplaceSetup(
          components,
          (value) => value.type === "dynamiczone" || value.type === "component" && !value.repeatable,
          (data2) => {
            return Array.isArray(data2) ? data2.map((datum, index) => ({
              ...datum,
              __temp_key__: index
            })) : {
              ...data2,
              __temp_key__: 0
            };
          }
        );
        const mergedDataWithTmpKeys = findComponentsAndReplaceWithTempKey(
          mergedDataWithPreparedRelations,
          attributes,
          { ignoreFalseyValues: true }
        );
        if (!setModifiedDataOnly) {
          draftState.initialData = mergedDataWithTmpKeys;
        }
        draftState.modifiedData = mergedDataWithTmpKeys;
        draftState.formErrors = {};
        draftState.modifiedDZName = null;
        draftState.shouldCheckErrors = false;
        break;
      }
      case "MOVE_COMPONENT_UP":
      case "MOVE_COMPONENT_DOWN": {
        const { currentIndex, dynamicZoneName, shouldCheckErrors } = action;
        if (shouldCheckErrors) {
          draftState.shouldCheckErrors = !state.shouldCheckErrors;
        }
        const currentValue = state.modifiedData[dynamicZoneName];
        const nextIndex = action.type === "MOVE_COMPONENT_UP" ? currentIndex - 1 : currentIndex + 1;
        const valueToInsert = state.modifiedData[dynamicZoneName][currentIndex];
        const updatedValue = moveFields(currentValue, currentIndex, nextIndex, valueToInsert);
        set__default.default(draftState, ["modifiedData", action.dynamicZoneName], updatedValue);
        break;
      }
      case "MOVE_FIELD": {
        const currentValue = get__default.default(state, ["modifiedData", ...action.keys], []).slice();
        const valueToInsert = get__default.default(state, ["modifiedData", ...action.keys, action.dragIndex]);
        const updatedValue = moveFields(
          currentValue,
          action.dragIndex,
          action.overIndex,
          valueToInsert
        );
        set__default.default(draftState, ["modifiedData", ...action.keys], updatedValue);
        break;
      }
      case "ON_CHANGE": {
        const [nonRepeatableComponentKey] = action.keys;
        if (action.shouldSetInitialValue) {
          set__default.default(draftState, ["initialData", ...action.keys], action.value);
        }
        if (action.keys.length === 2 && get__default.default(state, ["modifiedData", nonRepeatableComponentKey]) === null) {
          set__default.default(draftState, ["modifiedData", nonRepeatableComponentKey], {
            [action.keys[1]]: action.value
          });
          break;
        }
        set__default.default(draftState, ["modifiedData", ...action.keys], action.value);
        break;
      }
      case "REMOVE_COMPONENT_FROM_DYNAMIC_ZONE": {
        if (action.shouldCheckErrors) {
          draftState.shouldCheckErrors = !state.shouldCheckErrors;
        }
        draftState.modifiedData[action.dynamicZoneName].splice(action.index, 1);
        break;
      }
      case "REMOVE_COMPONENT_FROM_FIELD": {
        const componentPathToRemove = ["modifiedData", ...action.keys];
        set__default.default(draftState, componentPathToRemove, null);
        break;
      }
      case "REMOVE_PASSWORD_FIELD": {
        unset__default.default(draftState, ["modifiedData", ...action.keys]);
        break;
      }
      case "REMOVE_REPEATABLE_FIELD": {
        const keysLength = action.keys.length - 1;
        const pathToComponentData = ["modifiedData", ...take__default.default(action.keys, keysLength)];
        const hasErrors = Object.keys(state.formErrors).length > 0;
        if (hasErrors) {
          draftState.shouldCheckErrors = !state.shouldCheckErrors;
        }
        const currentValue = get__default.default(state, pathToComponentData).slice();
        currentValue.splice(parseInt(action.keys[keysLength], 10), 1);
        set__default.default(draftState, pathToComponentData, currentValue);
        break;
      }
      case "SET_DEFAULT_DATA_STRUCTURES": {
        draftState.componentsDataStructure = action.componentsDataStructure;
        draftState.contentTypeDataStructure = action.contentTypeDataStructure;
        break;
      }
      case "SET_FORM_ERRORS": {
        draftState.modifiedDZName = null;
        draftState.formErrors = action.errors;
        break;
      }
      case "TRIGGER_FORM_VALIDATION": {
        const hasErrors = Object.keys(state.formErrors).length > 0;
        if (hasErrors) {
          draftState.shouldCheckErrors = !state.shouldCheckErrors;
        }
        break;
      }
      case "SET_PUBLISH_CONFIRMATION": {
        draftState.publishConfirmation = { ...action.publishConfirmation };
        break;
      }
      case "RESET_PUBLISH_CONFIRMATION": {
        draftState.publishConfirmation = { ...state.publishConfirmation, show: false };
        break;
      }
      default:
        return draftState;
    }
  })
);
const cleanData = ({
  browserState,
  // the modifiedData from REDUX
  serverState
  // the initialData from REDUX
}, currentSchema, componentsSchema) => {
  const rootServerState = serverState;
  const rootBrowserState = browserState;
  const recursiveCleanData = (browserState2, serverState2, schema, pathToParent) => {
    return Object.keys(browserState2).reduce((acc, current) => {
      if (CREATOR_FIELDS.includes(current)) {
        return acc;
      }
      const path = pathToParent ? `${pathToParent}.${current}` : current;
      const attribute = schema.attributes[current] ?? {};
      const { type } = attribute;
      const value = get__default.default(browserState2, current);
      const oldValue = get__default.default(serverState2, current);
      let cleanedData;
      switch (type) {
        case "json":
          cleanedData = JSON.parse(value);
          break;
        case "time": {
          cleanedData = value;
          if (value && value.split(":").length < 3) {
            cleanedData = `${value}:00`;
          }
          break;
        }
        case "media":
          if (attribute.multiple === true) {
            cleanedData = value ? value.filter((file) => !(file instanceof File)) : null;
          } else {
            cleanedData = get__default.default(value, 0) instanceof File ? null : get__default.default(value, "id", null);
          }
          break;
        case "component":
          if (attribute.repeatable) {
            cleanedData = value ? value.map(
              (data, index) => {
                const subCleanedData = recursiveCleanData(
                  data,
                  (oldValue ?? [])[index],
                  componentsSchema[attribute.component],
                  `${path}.${index}`
                );
                return subCleanedData;
              }
            ) : value;
          } else {
            cleanedData = value ? recursiveCleanData(value, oldValue, componentsSchema[attribute.component], path) : value;
          }
          break;
        case "relation": {
          const trueInitialDataPath = getInitialDataPathUsingTempKeys(
            rootServerState,
            rootBrowserState
          )(path);
          const actualOldValue = get__default.default(rootServerState, trueInitialDataPath, []);
          const connectedRelations = value.reduce(
            (acc2, relation, currentIndex, array) => {
              const relationOnServer = actualOldValue.find(
                (oldRelation) => oldRelation.id === relation.id
              );
              const relationInFront = array[currentIndex + 1];
              if (!relationOnServer || relationOnServer.__temp_key__ !== relation.__temp_key__) {
                const position = relationInFront ? { before: relationInFront.id } : { end: true };
                return [...acc2, { id: relation.id, position }];
              }
              return acc2;
            },
            []
          );
          const disconnectedRelations = actualOldValue.reduce(
            (acc2, relation) => {
              if (!value.find((newRelation) => newRelation.id === relation.id)) {
                return [...acc2, { id: relation.id }];
              }
              return acc2;
            },
            []
          );
          cleanedData = {
            disconnect: disconnectedRelations,
            /**
             * Reverse the array because the API sequentially goes through the list
             * so in an instance where you add two to the end it would fail because index0
             * would want to attach itself to index1 which doesn't exist yet.
             */
            connect: connectedRelations.reverse()
          };
          break;
        }
        case "dynamiczone":
          cleanedData = value.map(
            (componentData, index) => {
              const subCleanedData = recursiveCleanData(
                componentData,
                (oldValue ?? [])[index],
                componentsSchema[componentData.__component],
                `${path}.${index}`
              );
              return subCleanedData;
            }
          );
          break;
        default:
          cleanedData = helperCleanData(value, "id");
      }
      acc[current] = cleanedData;
      return acc;
    }, {});
  };
  return recursiveCleanData(browserState, serverState, currentSchema, "");
};
const helperCleanData = (value, key) => {
  if (isArray__default.default(value)) {
    return value.map((obj) => obj[key] ? obj[key] : obj);
  }
  if (isObject(value)) {
    return value[key];
  }
  return value;
};
const EditViewDataManagerProvider = ({
  allowedActions: { canRead, canUpdate },
  children,
  componentsDataStructure,
  contentTypeDataStructure,
  createActionAllowedFields,
  from,
  initialValues,
  isCreatingEntry,
  isLoadingForData,
  isSingleType,
  onPost,
  onPublish,
  onDraftRelationCheck,
  onPut,
  onUnpublish,
  readActionAllowedFields,
  // Not sure this is needed anymore
  redirectToPreviousPage,
  slug,
  status,
  updateActionAllowedFields
}) => {
  const allLayoutData = useTypedSelector(
    (state) => state["content-manager_editViewLayoutManager"].currentLayout
  );
  const [isSaving, setIsSaving] = React__namespace.useState(false);
  const [reducerState, dispatch] = React__namespace.useReducer(reducer$5, initialState$5);
  const {
    formErrors,
    initialData,
    modifiedData,
    modifiedDZName,
    shouldCheckErrors,
    publishConfirmation
  } = reducerState;
  const { setModifiedDataOnly } = useTypedSelector(
    (state) => state["content-manager_editViewCrudReducer"]
  );
  const reduxDispatch = useTypedDispatch();
  const toggleNotification = helperPlugin.useNotification();
  const { lockApp, unlockApp } = helperPlugin.useOverlayBlocker();
  const currentContentTypeLayout = allLayoutData.contentType;
  const hasDraftAndPublish = React__namespace.useMemo(() => {
    return get__default.default(currentContentTypeLayout, ["options", "draftAndPublish"], false);
  }, [currentContentTypeLayout]);
  const shouldNotRunValidations = React__namespace.useMemo(() => {
    return hasDraftAndPublish && !initialData.publishedAt;
  }, [hasDraftAndPublish, initialData.publishedAt]);
  const { trackUsage } = helperPlugin.useTracking();
  const { formatMessage } = reactIntl.useIntl();
  const shouldRedirectToHomepageWhenEditingEntry = React__namespace.useMemo(() => {
    if (isLoadingForData) {
      return false;
    }
    if (isCreatingEntry) {
      return false;
    }
    if (canRead === false && canUpdate === false) {
      return true;
    }
    return false;
  }, [isLoadingForData, isCreatingEntry, canRead, canUpdate]);
  React__namespace.useEffect(() => {
    if (status === "resolved") {
      unlockApp();
    } else {
      lockApp();
    }
  }, [lockApp, unlockApp, status]);
  React__namespace.useEffect(() => {
    if (!isLoadingForData) {
      checkFormErrors();
    }
  }, [shouldCheckErrors]);
  React__namespace.useEffect(() => {
    const errorsInForm = Object.keys(formErrors);
    if (errorsInForm.length > 0) {
      const firstError = errorsInForm[0];
      const el = document.getElementById(firstError);
      if (el) {
        el.focus();
      }
    }
  }, [formErrors]);
  React__namespace.useEffect(() => {
    if (shouldRedirectToHomepageWhenEditingEntry) {
      toggleNotification({
        type: "info",
        message: { id: getTranslation("permissions.not-allowed.update") }
      });
    }
  }, [shouldRedirectToHomepageWhenEditingEntry, toggleNotification]);
  React__namespace.useEffect(() => {
    dispatch({
      type: "SET_DEFAULT_DATA_STRUCTURES",
      componentsDataStructure,
      contentTypeDataStructure
    });
  }, [componentsDataStructure, contentTypeDataStructure]);
  const { components } = allLayoutData;
  const previousInitialValues = usePrev(initialValues);
  React__namespace.useEffect(() => {
    if (initialValues && currentContentTypeLayout?.attributes && !isEqual__default.default(previousInitialValues, initialValues)) {
      dispatch({
        type: "INIT_FORM",
        initialValues,
        components,
        attributes: currentContentTypeLayout.attributes,
        setModifiedDataOnly
      });
      if (setModifiedDataOnly) {
        reduxDispatch(clearSetModifiedDataOnly());
      }
    }
  }, [
    initialValues,
    currentContentTypeLayout,
    components,
    setModifiedDataOnly,
    reduxDispatch,
    previousInitialValues
  ]);
  const dispatchAddComponent = React__namespace.useCallback(
    (type) => (keys, componentLayoutData, allComponents, shouldCheckErrors2 = false, position = void 0) => {
      trackUsage("didAddComponentToDynamicZone");
      dispatch({
        type,
        keys: keys.split("."),
        position,
        componentLayoutData,
        allComponents,
        shouldCheckErrors: shouldCheckErrors2
      });
    },
    [trackUsage]
  );
  const addComponentToDynamicZone = dispatchAddComponent("ADD_COMPONENT_TO_DYNAMIC_ZONE");
  const addNonRepeatableComponentToField = React__namespace.useCallback(
    (keys, componentLayoutData, allComponents) => {
      dispatch({
        type: "ADD_NON_REPEATABLE_COMPONENT_TO_FIELD",
        keys: keys.split("."),
        componentLayoutData,
        allComponents
      });
    },
    []
  );
  const relationConnect = React__namespace.useCallback(
    ({
      name: name2,
      value,
      toOneRelation
    }) => {
      dispatch({
        type: "CONNECT_RELATION",
        keys: name2.split("."),
        value,
        toOneRelation
      });
    },
    []
  );
  const relationLoad = React__namespace.useCallback(
    ({
      target: { initialDataPath, modifiedDataPath, value }
    }) => {
      dispatch({
        type: "LOAD_RELATION",
        modifiedDataPath,
        initialDataPath,
        value
      });
    },
    []
  );
  const addRepeatableComponentToField = dispatchAddComponent("ADD_REPEATABLE_COMPONENT_TO_FIELD");
  const yupSchema = React__namespace.useMemo(() => {
    const options2 = { isCreatingEntry, isDraft: shouldNotRunValidations, isFromComponent: false };
    return createYupSchema(
      currentContentTypeLayout,
      {
        components: allLayoutData.components
      },
      options2
    );
  }, [
    allLayoutData.components,
    currentContentTypeLayout,
    isCreatingEntry,
    shouldNotRunValidations
  ]);
  const checkFormErrors = React__namespace.useCallback(
    async (dataToSet = {}) => {
      let errors = {};
      const updatedData = cloneDeep__default.default(modifiedData);
      if (!isEmpty__default.default(updatedData) && dataToSet.path) {
        set__default.default(updatedData, dataToSet.path, dataToSet.value);
      }
      try {
        await yupSchema.validate(updatedData, { abortEarly: false });
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          errors = helperPlugin.getYupInnerErrors(err);
        }
        if (modifiedDZName) {
          errors = Object.keys(errors).reduce(
            (acc, current) => {
              const dzName = current.split(".")[0];
              if (dzName !== modifiedDZName) {
                acc[current] = errors[current];
              }
              return acc;
            },
            {}
          );
        }
      }
      dispatch({
        type: "SET_FORM_ERRORS",
        errors
      });
    },
    [modifiedDZName, modifiedData, yupSchema]
  );
  const handleChange = React__namespace.useCallback(
    ({
      target
    }, shouldSetInitialValue = false) => {
      const { name: name2, value, type } = target;
      let inputValue = value;
      if (["text", "textarea", "string", "email", "uid", "select", "select-one", "number"].includes(
        type
      ) && !value && value !== 0) {
        inputValue = null;
      }
      if (type === "password" && !value) {
        dispatch({
          type: "REMOVE_PASSWORD_FIELD",
          keys: name2.split(".")
        });
        return;
      }
      dispatch({
        type: "ON_CHANGE",
        keys: name2.split("."),
        value: inputValue,
        shouldSetInitialValue
      });
    },
    []
  );
  const createFormData = React__namespace.useCallback(
    (modifiedData2, initialData2) => {
      const cleanedData = cleanData(
        { browserState: modifiedData2, serverState: initialData2 },
        currentContentTypeLayout,
        allLayoutData.components
      );
      return cleanedData;
    },
    [allLayoutData.components, currentContentTypeLayout]
  );
  const trackerProperty = React__namespace.useMemo(() => {
    if (!hasDraftAndPublish) {
      return {};
    }
    return shouldNotRunValidations ? { status: "draft" } : {};
  }, [hasDraftAndPublish, shouldNotRunValidations]);
  const handlePublishPromptDismissal = React__namespace.useCallback(async (e) => {
    e.preventDefault();
    return dispatch({
      type: "RESET_PUBLISH_CONFIRMATION"
    });
  }, []);
  const handleSubmit = React__namespace.useCallback(
    async (e) => {
      e.preventDefault();
      let errors = {};
      try {
        await yupSchema.validate(modifiedData, { abortEarly: false });
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          errors = helperPlugin.getYupInnerErrors(err);
        } else {
          console.error(err);
        }
      }
      try {
        if (isEmpty__default.default(errors)) {
          const formData = createFormData(modifiedData, initialData);
          reactDom.flushSync(() => {
            setIsSaving(true);
          });
          if (isCreatingEntry) {
            await onPost(formData, trackerProperty);
          } else {
            await onPut(formData, trackerProperty);
          }
          setIsSaving(false);
        }
      } catch (err) {
        setIsSaving(false);
        errors = {
          ...errors,
          // @ts-expect-error – remove the function later.
          ...helperPlugin.getAPIInnerErrors(err, { getTranslation })
        };
      }
      dispatch({
        type: "SET_FORM_ERRORS",
        errors
      });
    },
    [
      createFormData,
      isCreatingEntry,
      modifiedData,
      initialData,
      onPost,
      onPut,
      trackerProperty,
      yupSchema
    ]
  );
  const handlePublish = React__namespace.useCallback(async () => {
    const schema = createYupSchema(
      currentContentTypeLayout,
      {
        components: get__default.default(allLayoutData, "components", {})
      },
      { isCreatingEntry, isDraft: false, isFromComponent: false }
    );
    const draftCount = await onDraftRelationCheck();
    if (!publishConfirmation.show && draftCount > 0) {
      dispatch({
        type: "SET_PUBLISH_CONFIRMATION",
        publishConfirmation: {
          show: true,
          draftCount
        }
      });
      return;
    }
    dispatch({
      type: "RESET_PUBLISH_CONFIRMATION"
    });
    let errors = {};
    try {
      await schema.validate(modifiedData, { abortEarly: false });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        errors = helperPlugin.getYupInnerErrors(err);
      }
    }
    try {
      if (isEmpty__default.default(errors)) {
        reactDom.flushSync(() => {
          setIsSaving(true);
        });
        await onPublish();
        setIsSaving(false);
      }
    } catch (err) {
      setIsSaving(false);
      errors = {
        ...errors,
        // @ts-expect-error – we'll remove this deprecated function later anyway.
        ...helperPlugin.getAPIInnerErrors(err, { getTranslation })
      };
    }
    dispatch({
      type: "SET_FORM_ERRORS",
      errors
    });
  }, [
    allLayoutData,
    currentContentTypeLayout,
    isCreatingEntry,
    modifiedData,
    publishConfirmation.show,
    onPublish,
    onDraftRelationCheck
  ]);
  const shouldCheckDZErrors = React__namespace.useCallback(
    (dzName) => {
      const doesDZHaveError = Object.keys(formErrors).some((key) => key.split(".")[0] === dzName);
      const shouldCheckErrors2 = !isEmpty__default.default(formErrors) && doesDZHaveError;
      return shouldCheckErrors2;
    },
    [formErrors]
  );
  const moveComponentDown = React__namespace.useCallback(
    (dynamicZoneName, currentIndex) => {
      trackUsage("changeComponentsOrder");
      dispatch({
        type: "MOVE_COMPONENT_DOWN",
        dynamicZoneName,
        currentIndex,
        shouldCheckErrors: shouldCheckDZErrors(dynamicZoneName)
      });
    },
    [shouldCheckDZErrors, trackUsage]
  );
  const moveComponentUp = React__namespace.useCallback(
    (dynamicZoneName, currentIndex) => {
      trackUsage("changeComponentsOrder");
      dispatch({
        type: "MOVE_COMPONENT_UP",
        dynamicZoneName,
        currentIndex,
        shouldCheckErrors: shouldCheckDZErrors(dynamicZoneName)
      });
    },
    [shouldCheckDZErrors, trackUsage]
  );
  const moveComponentField = React__namespace.useCallback(
    ({
      name: name2,
      newIndex,
      currentIndex
    }) => {
      dispatch({
        type: "MOVE_COMPONENT_FIELD",
        keys: name2.split("."),
        newIndex,
        oldIndex: currentIndex
      });
    },
    []
  );
  const relationDisconnect = React__namespace.useCallback(({ name: name2, id }) => {
    dispatch({
      type: "DISCONNECT_RELATION",
      keys: name2.split("."),
      id
    });
  }, []);
  const relationReorder = React__namespace.useCallback(
    ({ name: name2, oldIndex, newIndex }) => {
      dispatch({
        type: "REORDER_RELATION",
        keys: name2.split("."),
        oldIndex,
        newIndex
      });
    },
    []
  );
  const removeComponentFromDynamicZone = React__namespace.useCallback(
    (dynamicZoneName, index) => {
      trackUsage("removeComponentFromDynamicZone");
      dispatch({
        type: "REMOVE_COMPONENT_FROM_DYNAMIC_ZONE",
        dynamicZoneName,
        index,
        shouldCheckErrors: shouldCheckDZErrors(dynamicZoneName)
      });
    },
    [shouldCheckDZErrors, trackUsage]
  );
  const removeComponentFromField = React__namespace.useCallback((keys) => {
    dispatch({
      type: "REMOVE_COMPONENT_FROM_FIELD",
      keys: keys.split(".")
    });
  }, []);
  const removeRepeatableField = React__namespace.useCallback((keys) => {
    dispatch({
      type: "REMOVE_REPEATABLE_FIELD",
      keys: keys.split(".")
    });
  }, []);
  const triggerFormValidation = React__namespace.useCallback(() => {
    dispatch({
      type: "TRIGGER_FORM_VALIDATION"
    });
  }, []);
  if (shouldRedirectToHomepageWhenEditingEntry) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to: from });
  }
  if (!modifiedData) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    helperPlugin.ContentManagerEditViewDataManagerContext.Provider,
    {
      value: {
        // @ts-expect-error – issue with the provider being in the helper-plugin and not having access to the "unique" layout type
        addComponentToDynamicZone,
        // @ts-expect-error – issue with the provider being in the helper-plugin and not having access to the "unique" layout type
        addNonRepeatableComponentToField,
        // @ts-expect-error – issue with the provider being in the helper-plugin and not having access to the "unique" layout type
        addRepeatableComponentToField,
        // @ts-expect-error – issue with the provider being in the helper-plugin and not having access to the "unique" layout type
        allLayoutData,
        checkFormErrors,
        createActionAllowedFields,
        formErrors,
        hasDraftAndPublish,
        initialData,
        isCreatingEntry,
        isSingleType,
        shouldNotRunValidations,
        status,
        // @ts-expect-error – issue with the provider being in the helper-plugin and not having access to the "unique" layout type
        layout: currentContentTypeLayout,
        modifiedData,
        moveComponentField,
        /**
         * @deprecated use `moveComponentField` instead. This will be removed in v5.
         */
        moveComponentDown,
        /**
         * @deprecated use `moveComponentField` instead. This will be removed in v5.
         */
        moveComponentUp,
        onChange: handleChange,
        onPublish: handlePublish,
        onUnpublish,
        readActionAllowedFields,
        redirectToPreviousPage,
        removeComponentFromDynamicZone,
        removeComponentFromField,
        removeRepeatableField,
        relationConnect,
        relationDisconnect,
        relationLoad,
        relationReorder,
        slug,
        triggerFormValidation,
        updateActionAllowedFields,
        onPublishPromptDismissal: handlePublishPromptDismissal,
        publishConfirmation
      },
      children: isLoadingForData || !isCreatingEntry && !initialData.id && !isSingleType ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Main, { "aria-busy": "true", children: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {}) }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        !isSaving ? /* @__PURE__ */ jsxRuntime.jsx(
          reactRouterDom.Prompt,
          {
            when: !isEqual__default.default(modifiedData, initialData),
            message: formatMessage({ id: "global.prompt.unsaved" })
          }
        ) : null,
        /* @__PURE__ */ jsxRuntime.jsx("form", { noValidate: true, onSubmit: handleSubmit, children })
      ] })
    }
  );
};
const DeleteLink = ({ onDelete }) => {
  const { hasDraftAndPublish, modifiedData } = helperPlugin.useCMEditViewDataManager();
  const trackerProperty = hasDraftAndPublish ? typeof modifiedData.publishedAt === "string" ? { status: "draft" } : { status: "published" } : {};
  const [displayDeleteConfirmation, setDisplayDeleteConfirmation] = React__namespace.useState(false);
  const [isModalConfirmButtonLoading, setIsModalConfirmButtonLoading] = React__namespace.useState(false);
  const { formatMessage } = reactIntl.useIntl();
  const { formatAPIError } = helperPlugin.useAPIErrorHandler(getTranslation);
  const toggleNotification = helperPlugin.useNotification();
  const toggleWarningDelete = () => setDisplayDeleteConfirmation((prevState) => !prevState);
  const handleConfirmDelete = async () => {
    try {
      setIsModalConfirmButtonLoading(true);
      await onDelete(trackerProperty);
      setIsModalConfirmButtonLoading(false);
      toggleWarningDelete();
    } catch (err) {
      setIsModalConfirmButtonLoading(false);
      toggleWarningDelete();
      if (axios.isAxiosError(err)) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(err)
        });
      }
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { onClick: toggleWarningDelete, size: "S", startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Trash, {}), variant: "danger-light", children: formatMessage({
      id: getTranslation("containers.Edit.delete-entry"),
      defaultMessage: "Delete this entry"
    }) }),
    /* @__PURE__ */ jsxRuntime.jsx(
      helperPlugin.ConfirmDialog,
      {
        isConfirmButtonLoading: isModalConfirmButtonLoading,
        isOpen: displayDeleteConfirmation,
        onConfirm: handleConfirmDelete,
        onToggleDialog: toggleWarningDelete
      }
    )
  ] });
};
const DraftAndPublishBadge = () => {
  const { initialData, hasDraftAndPublish } = helperPlugin.useCMEditViewDataManager();
  const { formatMessage } = reactIntl.useIntl();
  if (!hasDraftAndPublish) {
    return null;
  }
  const isPublished = typeof initialData.publishedAt === "string";
  const colors = {
    draft: {
      textColor: "secondary700",
      bulletColor: "secondary600",
      box: {
        background: "secondary100",
        borderColor: "secondary200"
      }
    },
    published: {
      textColor: "success700",
      bulletColor: "success600",
      box: {
        background: "success100",
        borderColor: "success200"
      }
    }
  };
  const colorProps = isPublished ? colors.published : colors.draft;
  return /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.Box,
    {
      hasRadius: true,
      as: "aside",
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 5,
      paddingRight: 5,
      ...colorProps.box,
      children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { as: designSystem.Flex, children: [
        /* @__PURE__ */ jsxRuntime.jsx(CustomBullet, { $bulletColor: colorProps.bulletColor }),
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { paddingLeft: 3, children: [
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { textColor: colorProps.textColor, children: [
            formatMessage({
              id: getTranslation("containers.Edit.information.editing"),
              defaultMessage: "Editing"
            }),
            " "
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { fontWeight: "bold", textColor: colorProps.textColor, children: [
            isPublished && formatMessage({
              id: getTranslation("containers.Edit.information.publishedVersion"),
              defaultMessage: "published version"
            }),
            !isPublished && formatMessage({
              id: getTranslation("containers.Edit.information.draftVersion"),
              defaultMessage: "draft version"
            })
          ] })
        ] })
      ] })
    }
  );
};
const CustomBullet = styled__default.default(Icons.Dot)`
  width: ${helperPlugin.pxToRem(6)};
  height: ${helperPlugin.pxToRem(6)};
  * {
    fill: ${({ theme, $bulletColor }) => theme.colors[$bulletColor]};
  }
`;
const Header = ({ allowedActions: { canUpdate, canCreate, canPublish } }) => {
  const {
    initialData,
    isCreatingEntry,
    isSingleType,
    status,
    layout,
    hasDraftAndPublish,
    modifiedData,
    onPublish,
    onUnpublish,
    publishConfirmation: { show: showPublishConfirmation, draftCount } = {},
    onPublishPromptDismissal
  } = helperPlugin.useCMEditViewDataManager();
  const { goBack } = reactRouterDom.useHistory();
  const [showWarningUnpublish, setWarningUnpublish] = React__namespace.useState(false);
  const { formatMessage } = reactIntl.useIntl();
  const currentContentTypeMainField = get__default.default(layout, ["settings", "mainField"], "id");
  const currentContentTypeName = get__default.default(layout, ["info", "displayName"], "NOT FOUND");
  const didChangeData = !isEqual__default.default(initialData, modifiedData) || isCreatingEntry && Object.keys(modifiedData).length > 0;
  const createEntryIntlTitle = formatMessage({
    id: getTranslation("containers.Edit.pluginHeader.title.new"),
    defaultMessage: "Create an entry"
  });
  let title = createEntryIntlTitle;
  if (!isCreatingEntry && !isSingleType) {
    title = initialData[currentContentTypeMainField] || currentContentTypeName;
  }
  if (isSingleType) {
    title = currentContentTypeName;
  }
  let primaryAction = null;
  if (isCreatingEntry && canCreate) {
    primaryAction = /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, children: [
      hasDraftAndPublish && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { disabled: true, startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Check, {}), variant: "secondary", children: formatMessage({ id: "app.utils.publish", defaultMessage: "Publish" }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { disabled: !didChangeData, loading: status === "submit-pending", type: "submit", children: formatMessage({
        id: getTranslation("containers.Edit.submit"),
        defaultMessage: "Save"
      }) })
    ] });
  }
  if (!isCreatingEntry && canUpdate) {
    const shouldShowPublishButton = hasDraftAndPublish && canPublish;
    const isPublished = typeof initialData.publishedAt === "string";
    const isPublishButtonLoading = isPublished ? status === "unpublish-pending" : status === "publish-pending";
    const pubishButtonLabel = isPublished ? { id: "app.utils.unpublish", defaultMessage: "Unpublish" } : { id: "app.utils.publish", defaultMessage: "Publish" };
    const onClick = isPublished ? () => setWarningUnpublish(true) : () => onPublish?.();
    primaryAction = /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { children: [
      shouldShowPublishButton && /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.Button,
        {
          disabled: didChangeData,
          loading: isPublishButtonLoading,
          onClick,
          startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Check, {}),
          variant: "secondary",
          children: formatMessage(pubishButtonLabel)
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingLeft: shouldShowPublishButton ? 2 : 0, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { disabled: !didChangeData, loading: status === "submit-pending", type: "submit", children: formatMessage({
        id: getTranslation("containers.Edit.submit"),
        defaultMessage: "Save"
      }) }) })
    ] });
  }
  const toggleWarningUnpublish = () => setWarningUnpublish((prevState) => !prevState);
  const handleUnpublish = () => {
    toggleWarningUnpublish();
    onUnpublish?.();
  };
  const subtitle = `${formatMessage({
    id: getTranslation("api.id"),
    defaultMessage: "API ID"
    // @ts-expect-error – issue comes from the context not having the correct layout from the admin.
  })}: ${layout?.apiID}`;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.HeaderLayout,
      {
        title: title.toString(),
        primaryAction,
        subtitle,
        navigationAction: /* @__PURE__ */ jsxRuntime.jsx(
          v2.Link,
          {
            startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.ArrowLeft, {}),
            onClick: (e) => {
              e.preventDefault();
              goBack();
            },
            as: reactRouterDom.NavLink,
            to: "/",
            children: formatMessage({
              id: "global.back",
              defaultMessage: "Back"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(
      designSystem.Dialog,
      {
        onClose: toggleWarningUnpublish,
        title: "Confirmation",
        "aria-labelledby": "confirmation",
        "aria-describedby": "confirm-description",
        isOpen: showWarningUnpublish,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.DialogBody, { icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.ExclamationMarkCircle, {}), children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 2, children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", style: { textAlign: "center" }, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { id: "confirm-description", children: formatMessage({
              id: getTranslation("popUpWarning.warning.unpublish"),
              defaultMessage: "Unpublish this content will automatically change it to a draft."
            }) }) }),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", style: { textAlign: "center" }, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { id: "confirm-description", children: formatMessage({
              id: getTranslation("popUpWarning.warning.unpublish-question"),
              defaultMessage: "Are you sure you want to unpublish it?"
            }) }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.DialogFooter,
            {
              startAction: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { onClick: toggleWarningUnpublish, variant: "tertiary", children: formatMessage({
                id: "components.popUpWarning.button.cancel",
                defaultMessage: "Cancel"
              }) }),
              endAction: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { variant: "danger-light", onClick: handleUnpublish, children: formatMessage({
                id: "components.popUpWarning.button.confirm",
                defaultMessage: "Confirm"
              }) })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(
      designSystem.Dialog,
      {
        onClose: onPublishPromptDismissal,
        title: formatMessage({
          id: getTranslation(`popUpWarning.warning.has-draft-relations.title`),
          defaultMessage: "Confirmation"
        }),
        labelledBy: "confirmation",
        describedBy: "confirm-description",
        isOpen: showPublishConfirmation,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.DialogBody, { icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.ExclamationMarkCircle, {}), children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 2, children: [
            /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { textAlign: "center", id: "confirm-description", children: [
              draftCount,
              formatMessage(
                {
                  id: getTranslation(`popUpwarning.warning.has-draft-relations.message`),
                  defaultMessage: "<b>{count, plural, one { relation is} other { relations are}}</b> not published yet and might lead to unexpected behavior."
                },
                {
                  b: (chunks) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", children: chunks }),
                  count: draftCount
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textAlign: "center", id: "confirm-description", children: formatMessage({
              id: getTranslation("popUpWarning.warning.publish-question"),
              defaultMessage: "Do you still want to publish?"
            }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.DialogFooter,
            {
              startAction: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { onClick: onPublishPromptDismissal, variant: "tertiary", children: formatMessage({
                id: "components.popUpWarning.button.cancel",
                defaultMessage: "Cancel"
              }) }),
              endAction: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { variant: "success", onClick: onPublish, children: formatMessage({
                id: getTranslation("popUpwarning.warning.has-draft-relations.button-confirm"),
                defaultMessage: "Publish"
              }) })
            }
          )
        ]
      }
    )
  ] });
};
const getDisplayName = ({
  firstname,
  lastname,
  username,
  email
}, formatMessage) => {
  if (username) {
    return username;
  }
  if (firstname) {
    return formatMessage(
      {
        id: "global.fullname",
        defaultMessage: "{firstname} {lastname}"
      },
      {
        firstname,
        lastname
      }
    ).trim();
  }
  return email;
};
const Root = ({ children }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 4, children });
};
const Title = () => {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 2, children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", textColor: "neutral600", id: "additional-information", children: formatMessage({
      id: getTranslation("containers.Edit.information"),
      defaultMessage: "Information"
    }) }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Divider, {}) })
  ] });
};
const Body = () => {
  const { formatMessage, formatRelativeTime } = reactIntl.useIntl();
  const { initialData, isCreatingEntry } = helperPlugin.useCMEditViewDataManager();
  const currentTime = React__namespace.useRef(Date.now());
  const getFieldInfo = (atField, byField) => {
    const user = initialData[byField];
    const at = initialData[atField];
    const displayName = user ? getDisplayName(user, formatMessage) : "-";
    const timestamp = at ? new Date(at).getTime() : Date.now();
    const elapsed = timestamp - currentTime.current;
    const { unit, value } = getUnits(-elapsed);
    return {
      at: formatRelativeTime(value, unit, { numeric: "auto" }),
      by: isCreatingEntry ? "-" : displayName
    };
  };
  const updated = getFieldInfo("updatedAt", "updatedBy");
  const created = getFieldInfo("createdAt", "createdBy");
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 4, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 2, as: "dl", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        KeyValuePair,
        {
          label: formatMessage({
            id: getTranslation("containers.Edit.information.created"),
            defaultMessage: "Created"
          }),
          value: created.at
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        KeyValuePair,
        {
          label: formatMessage({
            id: getTranslation("containers.Edit.information.by"),
            defaultMessage: "By"
          }),
          value: created.by
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 2, as: "dl", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        KeyValuePair,
        {
          label: formatMessage({
            id: getTranslation("containers.Edit.information.lastUpdate"),
            defaultMessage: "Last update"
          }),
          value: updated.at
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        KeyValuePair,
        {
          label: formatMessage({
            id: getTranslation("containers.Edit.information.by"),
            defaultMessage: "By"
          }),
          value: updated.by
        }
      )
    ] })
  ] });
};
const KeyValuePair = ({ label, value = "-" }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { justifyContent: "space-between", children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "dt", fontWeight: "bold", textColor: "neutral800", variant: "pi", children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "dd", variant: "pi", textColor: "neutral600", children: value })
  ] });
};
const MINUTE = 60 * 1e3;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = DAY * 365;
const getUnits = (value) => {
  if (value < MINUTE) {
    return { unit: "second", value: -Math.round(value / 1e3) };
  }
  if (value < HOUR) {
    return { unit: "minute", value: -Math.round(value / MINUTE) };
  }
  if (value < DAY) {
    return { unit: "hour", value: -Math.round(value / HOUR) };
  }
  if (value < MONTH) {
    return { unit: "day", value: -Math.round(value / DAY) };
  }
  if (value < YEAR) {
    return { unit: "month", value: -Math.round(value / MONTH) };
  }
  return { unit: "year", value: -Math.round(value / YEAR) };
};
const Information = {
  Root,
  Title,
  Body
};
const InformationBoxCE = () => {
  return /* @__PURE__ */ jsxRuntime.jsxs(Information.Root, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(Information.Title, {}),
    /* @__PURE__ */ jsxRuntime.jsx(Information.Body, {})
  ] });
};
const CTB_PERMISSIONS = [{ action: "plugin::content-type-builder.read", subject: null }];
const EditViewPage = ({
  allowedActions,
  history: { goBack },
  match: {
    params: { slug, collectionType, id, origin }
  },
  userPermissions = []
}) => {
  const { trackUsage } = helperPlugin.useTracking();
  const { formatMessage } = reactIntl.useIntl();
  const permissions2 = useTypedSelector((state) => state.admin_app.permissions);
  const location = reactRouterDom.useLocation();
  const toggleNotification = helperPlugin.useNotification();
  const Information2 = useEnterprise(
    InformationBoxCE,
    async () => (await Promise.resolve().then(() => require("./InformationBoxEE-qvqEExpV.js"))).InformationBoxEE
  );
  useOnce(() => {
    if (location?.state && "error" in location.state) {
      toggleNotification({
        type: "warning",
        message: location.state.error,
        timeout: 5e3
      });
    }
  });
  const formattedContentTypeLayout = useTypedSelector(selectAttributesLayout);
  const customFieldUids = useTypedSelector(selectCustomFieldUids);
  const { isLazyLoading, lazyComponentStore } = useLazyComponents(customFieldUids);
  const { createActionAllowedFields, readActionAllowedFields, updateActionAllowedFields } = getFieldsActionMatchingPermissions(userPermissions, slug);
  const configurationPermissions = (collectionType === "single-types" ? permissions2.contentManager?.singleTypesConfigurations : permissions2.contentManager?.collectionTypesConfigurations) ?? [];
  const isDynamicZone = (block) => {
    return block.every((subBlock) => {
      return subBlock.every((obj) => obj.fieldSchema.type === "dynamiczone");
    });
  };
  if (isLazyLoading) {
    return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {});
  }
  if (!Information2) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(ContentTypeFormWrapper, { collectionType, slug, id, origin, children: ({
    componentsDataStructure,
    contentTypeDataStructure,
    data,
    isCreatingEntry,
    isLoadingForData,
    onDelete,
    onPost,
    onPublish,
    onDraftRelationCheck,
    onPut,
    onUnpublish,
    redirectionLink,
    status
  }) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      EditViewDataManagerProvider,
      {
        allowedActions,
        createActionAllowedFields,
        componentsDataStructure,
        contentTypeDataStructure,
        from: redirectionLink,
        initialValues: data,
        isCreatingEntry,
        isLoadingForData,
        isSingleType: collectionType === "single-types",
        onPost,
        onPublish,
        onDraftRelationCheck,
        onPut,
        onUnpublish,
        readActionAllowedFields,
        redirectToPreviousPage: goBack,
        slug,
        status,
        updateActionAllowedFields,
        children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { "aria-busy": status !== "resolved", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Header, { allowedActions }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.ContentLayout, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Grid, { gap: 4, children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 9, s: 12, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 6, children: formattedContentTypeLayout.map((row, index) => {
              if (isDynamicZone(row)) {
                const [[{ name: name2, fieldSchema, metadatas, ...restProps }]] = row;
                return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid, { gap: 4, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 12, s: 12, xs: 12, children: /* @__PURE__ */ jsxRuntime.jsx(
                  DynamicZone,
                  {
                    name: name2,
                    fieldSchema,
                    metadatas,
                    ...restProps
                  }
                ) }) }) }, index);
              }
              return /* @__PURE__ */ jsxRuntime.jsx(
                designSystem.Box,
                {
                  hasRadius: true,
                  background: "neutral0",
                  shadow: "tableShadow",
                  paddingLeft: 6,
                  paddingRight: 6,
                  paddingTop: 6,
                  paddingBottom: 6,
                  borderColor: "neutral150",
                  children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 6, children: row.map((columns, gridRowIndex) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid, { gap: 4, children: columns.map(
                    ({
                      fieldSchema,
                      metadatas,
                      name: name2,
                      size,
                      queryInfos,
                      ...restProps
                    }) => {
                      const isComponent = fieldSchema.type === "component";
                      if (isComponent) {
                        const {
                          component,
                          max,
                          min,
                          repeatable = false,
                          required = false
                        } = fieldSchema;
                        return /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: size, s: 12, xs: 12, children: /* @__PURE__ */ jsxRuntime.jsx(
                          FieldComponent,
                          {
                            componentUid: component,
                            isRepeatable: repeatable,
                            intlLabel: {
                              id: metadatas.label,
                              defaultMessage: metadatas.label
                            },
                            max,
                            min,
                            name: name2,
                            required,
                            ...restProps
                          }
                        ) }, component);
                      }
                      return /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: size, s: 12, xs: 12, children: /* @__PURE__ */ jsxRuntime.jsx(
                        Inputs,
                        {
                          size,
                          fieldSchema,
                          keys: name2,
                          metadatas,
                          queryInfos,
                          customFieldInputs: lazyComponentStore,
                          ...restProps
                        }
                      ) }, name2);
                    }
                  ) }, gridRowIndex)) })
                },
                index
              );
            }) }) }),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 3, s: 12, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 2, children: [
              /* @__PURE__ */ jsxRuntime.jsx(DraftAndPublishBadge, {}),
              /* @__PURE__ */ jsxRuntime.jsxs(
                designSystem.Box,
                {
                  as: "aside",
                  "aria-labelledby": "additional-information",
                  background: "neutral0",
                  borderColor: "neutral150",
                  hasRadius: true,
                  paddingBottom: 4,
                  paddingLeft: 4,
                  paddingRight: 4,
                  paddingTop: 6,
                  shadow: "tableShadow",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(Information2, {}),
                    /* @__PURE__ */ jsxRuntime.jsx(InjectionZone, { area: "contentManager.editView.informations" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { as: "aside", "aria-labelledby": "links", children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 2, children: [
                /* @__PURE__ */ jsxRuntime.jsx(InjectionZone, { area: "contentManager.editView.right-links", slug }),
                slug !== "strapi::administrator" && /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.CheckPermissions, { permissions: CTB_PERMISSIONS, children: /* @__PURE__ */ jsxRuntime.jsx(
                  helperPlugin.LinkButton,
                  {
                    onClick: () => {
                      trackUsage("willEditEditLayout");
                    },
                    size: "S",
                    startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Pencil, {}),
                    style: { width: "100%" },
                    to: `/plugins/content-type-builder/content-types/${slug}`,
                    variant: "secondary",
                    children: formatMessage({
                      id: getTranslation("link-to-ctb"),
                      defaultMessage: "Edit the model"
                    })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.CheckPermissions, { permissions: configurationPermissions, children: /* @__PURE__ */ jsxRuntime.jsx(
                  helperPlugin.LinkButton,
                  {
                    size: "S",
                    startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Layer, {}),
                    style: { width: "100%" },
                    to: `/content-manager/${collectionType}/${slug}/configurations/edit`,
                    variant: "secondary",
                    children: formatMessage({
                      id: "app.links.configure-view",
                      defaultMessage: "Configure the view"
                    })
                  }
                ) }),
                allowedActions.canDelete && !isCreatingEntry && /* @__PURE__ */ jsxRuntime.jsx(DeleteLink, { onDelete })
              ] }) })
            ] }) })
          ] }) })
        ] })
      }
    );
  } });
};
const selectAttributesLayout = toolkit.createSelector(
  (state) => state["content-manager_editViewLayoutManager"].currentLayout,
  (layout) => {
    const currentContentTypeLayoutData = layout?.contentType;
    if (!currentContentTypeLayoutData) {
      return [];
    }
    const currentLayout = currentContentTypeLayoutData.layouts.edit;
    let currentRowIndex = 0;
    const newLayout = [];
    currentLayout.forEach((row) => {
      const hasDynamicZone = row.some(
        ({ name: name2 }) => currentContentTypeLayoutData.attributes[name2]["type"] === "dynamiczone"
      );
      if (!newLayout[currentRowIndex]) {
        newLayout[currentRowIndex] = [];
      }
      if (hasDynamicZone) {
        currentRowIndex = currentRowIndex === 0 && newLayout[0].length === 0 ? 0 : currentRowIndex + 1;
        if (!newLayout[currentRowIndex]) {
          newLayout[currentRowIndex] = [];
        }
        newLayout[currentRowIndex].push(row);
        currentRowIndex += 1;
      } else {
        newLayout[currentRowIndex].push(row);
      }
    });
    return newLayout.filter((arr) => arr.length > 0);
  }
);
const selectCustomFieldUids = toolkit.createSelector(
  (state) => state["content-manager_editViewLayoutManager"].currentLayout,
  (layout) => {
    if (!layout.contentType)
      return [];
    const allFields = [
      ...layout.contentType.layouts.edit,
      ...Object.values(layout.components).flatMap((component) => component.layouts.edit)
    ].flat();
    const customFieldUids = allFields.filter((field) => field.fieldSchema.customField).map((customField) => customField.fieldSchema.customField);
    const uniqueCustomFieldUids = [...new Set(customFieldUids)];
    return uniqueCustomFieldUids;
  }
);
const ProtectedEditViewPage = ({
  userPermissions = [],
  ...restProps
}) => {
  const viewPermissions = React__namespace.useMemo(
    () => generatePermissionsObject(restProps.match.params.slug),
    [restProps.match.params.slug]
  );
  const { isLoading, allowedActions } = helperPlugin.useRBAC(
    viewPermissions,
    // TODO: just make usePermissions undefined by default in the reducer?
    userPermissions
  );
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    EditViewPage,
    {
      ...restProps,
      allowedActions,
      userPermissions
    }
  );
};
const { MUTATE_EDIT_VIEW_LAYOUT: MUTATE_EDIT_VIEW_LAYOUT$1 } = HOOKS;
const EditViewLayoutManager = ({ layout, ...rest }) => {
  const currentLayout = useTypedSelector(
    (state) => state["content-manager_editViewLayoutManager"].currentLayout
  );
  const dispatch = useTypedDispatch();
  const [{ query }] = helperPlugin.useQueryParams();
  const { runHookWaterfall } = helperPlugin.useStrapiApp();
  const { permissions: permissions2, isValid: isValidPermissions } = useSyncRbac(
    query,
    rest.match.params.slug,
    "editView"
  );
  React__namespace.useEffect(() => {
    const mutatedLayout = runHookWaterfall(MUTATE_EDIT_VIEW_LAYOUT$1, { layout, query });
    dispatch(setLayout$1(mutatedLayout.layout, query));
    return () => {
      dispatch(resetProps$1());
    };
  }, [layout, dispatch, query, runHookWaterfall]);
  if (!currentLayout.contentType || !isValidPermissions) {
    return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsx(ProtectedEditViewPage, { ...rest, userPermissions: permissions2 ?? [] });
};
const RESET_PROPS$1 = "ContentManager/EditViewLayoutManager/RESET_PROPS";
const resetProps$1 = () => ({ type: RESET_PROPS$1 });
const SET_LAYOUT = "ContentManager/EditViewLayoutManager/SET_LAYOUT";
const setLayout$1 = (layout, query) => ({
  type: SET_LAYOUT,
  layout,
  query
});
const initialState$4 = {
  currentLayout: {
    components: {},
    contentType: null
  }
};
const reducer$4 = (state = initialState$4, action) => produce__default.default(state, (draftState) => {
  switch (action.type) {
    case RESET_PROPS$1: {
      draftState.currentLayout = initialState$4.currentLayout;
      break;
    }
    case SET_LAYOUT: {
      draftState.currentLayout = action.layout;
      break;
    }
    default:
      return draftState;
  }
});
const checkIfAttributeIsDisplayable = (attribute) => {
  const { type } = attribute;
  if (type === "relation") {
    return !attribute.relation.toLowerCase().includes("morph");
  }
  return !["json", "dynamiczone", "richtext", "password", "blocks"].includes(type) && !!type;
};
const HeaderContainer = styled__default.default(designSystem.Flex)`
  svg {
    width: ${32 / 16}rem;
    height: ${24 / 16}rem;
    margin-right: ${({ theme }) => theme.spaces[3]};
  }
`;
const EditFieldForm = ({
  attributes,
  fieldForm,
  fieldToEdit,
  onCloseModal,
  onChangeEditLabel,
  onSubmit,
  type
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const relationType = attributes[fieldToEdit].relationType;
  let shouldDisplaySortToggle = !["media", "relation"].includes(type);
  if (["oneWay", "oneToOne", "manyToOne"].includes(relationType)) {
    shouldDisplaySortToggle = true;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.ModalLayout, { onClose: onCloseModal, labelledBy: "title", children: /* @__PURE__ */ jsxRuntime.jsxs("form", { onSubmit, children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.ModalHeader, { children: /* @__PURE__ */ jsxRuntime.jsxs(HeaderContainer, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(FieldTypeIcon, { type }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title", children: formatMessage(
        {
          id: getTranslation("containers.ListSettingsView.modal-form.edit-label"),
          defaultMessage: "Edit {fieldName}"
        },
        { fieldName: upperFirst__default.default(fieldToEdit) }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.ModalBody, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Grid, { gap: 4, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { s: 12, col: 6, children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.TextInput,
        {
          id: "label-input",
          label: formatMessage({
            id: getTranslation("form.Input.label"),
            defaultMessage: "Label"
          }),
          name: "label",
          onChange: (e) => onChangeEditLabel(e),
          value: fieldForm.label,
          hint: formatMessage({
            id: getTranslation("form.Input.label.inputDescription"),
            defaultMessage: "This value overrides the label displayed in the table's head"
          })
        }
      ) }),
      shouldDisplaySortToggle && /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { s: 12, col: 6, children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.ToggleInput,
        {
          "data-testid": "Enable sort on this field",
          checked: fieldForm.sortable,
          label: formatMessage({
            id: getTranslation("form.Input.sort.field"),
            defaultMessage: "Enable sort on this field"
          }),
          name: "sortable",
          onChange: (e) => onChangeEditLabel({ target: { name: "sortable", value: e.target.checked } }),
          onLabel: formatMessage({
            id: "app.components.ToggleCheckbox.on-label",
            defaultMessage: "on"
          }),
          offLabel: formatMessage({
            id: "app.components.ToggleCheckbox.off-label",
            defaultMessage: "off"
          })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.ModalFooter,
      {
        startActions: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { onClick: onCloseModal, variant: "tertiary", children: formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" }) }),
        endActions: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { type: "submit", children: formatMessage({ id: "global.finish", defaultMessage: "Finish" }) })
      }
    )
  ] }) });
};
EditFieldForm.propTypes = {
  attributes: PropTypes__default.default.objectOf(
    PropTypes__default.default.shape({
      relationType: PropTypes__default.default.string
    })
  ).isRequired,
  fieldForm: PropTypes__default.default.shape({
    label: PropTypes__default.default.string,
    sortable: PropTypes__default.default.bool
  }).isRequired,
  fieldToEdit: PropTypes__default.default.string.isRequired,
  onChangeEditLabel: PropTypes__default.default.func.isRequired,
  onCloseModal: PropTypes__default.default.func.isRequired,
  onSubmit: PropTypes__default.default.func.isRequired,
  type: PropTypes__default.default.string.isRequired
};
const Settings = ({
  contentTypeOptions,
  modifiedData,
  onChange,
  sortOptions: sortOptionsCE
}) => {
  const { formatMessage, locale } = reactIntl.useIntl();
  const formatter = helperPlugin.useCollator(locale, {
    sensitivity: "base"
  });
  const sortOptions = useEnterprise(
    sortOptionsCE,
    async () => (await Promise.resolve().then(() => require("./constants-WbeIIlk3.js"))).REVIEW_WORKFLOW_STAGE_SORT_OPTION_NAME,
    {
      combine(ceOptions, eeOption) {
        return [...ceOptions, { ...eeOption, label: formatMessage(eeOption.label) }];
      },
      defaultValue: sortOptionsCE,
      enabled: !!contentTypeOptions?.reviewWorkflows
    }
  );
  const sortOptionsSorted = sortOptions.sort((a, b) => formatter.compare(a.label, b.label));
  const { settings } = modifiedData;
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 4, children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "delta", as: "h2", children: formatMessage({
      id: getTranslation("containers.SettingPage.settings"),
      defaultMessage: "Settings"
    }) }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { justifyContent: "space-between", gap: 4, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { width: "100%", children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.ToggleInput,
        {
          label: formatMessage({
            id: getTranslation("form.Input.search"),
            defaultMessage: "Enable search"
          }),
          onChange: (e) => {
            onChange({ target: { name: "settings.searchable", value: e.target.checked } });
          },
          onLabel: formatMessage({
            id: "app.components.ToggleCheckbox.on-label",
            defaultMessage: "on"
          }),
          offLabel: formatMessage({
            id: "app.components.ToggleCheckbox.off-label",
            defaultMessage: "off"
          }),
          name: "settings.searchable",
          checked: settings.searchable
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { width: "100%", children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.ToggleInput,
        {
          label: formatMessage({
            id: getTranslation("form.Input.filters"),
            defaultMessage: "Enable filters"
          }),
          onChange: (e) => {
            onChange({ target: { name: "settings.filterable", value: e.target.checked } });
          },
          onLabel: formatMessage({
            id: "app.components.ToggleCheckbox.on-label",
            defaultMessage: "on"
          }),
          offLabel: formatMessage({
            id: "app.components.ToggleCheckbox.off-label",
            defaultMessage: "off"
          }),
          name: "settings.filterable",
          checked: settings.filterable
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { width: "100%", children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.ToggleInput,
        {
          label: formatMessage({
            id: getTranslation("form.Input.bulkActions"),
            defaultMessage: "Enable bulk actions"
          }),
          onChange: (e) => {
            onChange({ target: { name: "settings.bulkable", value: e.target.checked } });
          },
          onLabel: formatMessage({
            id: "app.components.ToggleCheckbox.on-label",
            defaultMessage: "on"
          }),
          offLabel: formatMessage({
            id: "app.components.ToggleCheckbox.off-label",
            defaultMessage: "off"
          }),
          name: "settings.bulkable",
          checked: settings.bulkable
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Grid, { gap: 4, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { s: 12, col: 6, children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.Select,
        {
          label: formatMessage({
            id: getTranslation("form.Input.pageEntries"),
            defaultMessage: "Entries per page"
          }),
          hint: formatMessage({
            id: getTranslation("form.Input.pageEntries.inputDescription"),
            defaultMessage: "Note: You can override this value in the Collection Type settings page."
          }),
          onChange: (value) => onChange({ target: { name: "settings.pageSize", value } }),
          name: "settings.pageSize",
          value: modifiedData.settings.pageSize || "",
          children: [10, 20, 50, 100].map((pageSize) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Option, { value: pageSize, children: pageSize }, pageSize))
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { s: 12, col: 3, children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.Select,
        {
          label: formatMessage({
            id: getTranslation("form.Input.defaultSort"),
            defaultMessage: "Default sort attribute"
          }),
          onChange: (value) => onChange({ target: { name: "settings.defaultSortBy", value } }),
          name: "settings.defaultSortBy",
          value: modifiedData.settings.defaultSortBy || "",
          children: sortOptionsSorted.map(({ value, label }) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Option, { value, children: label }, value))
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { s: 12, col: 3, children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.Select,
        {
          label: formatMessage({
            id: getTranslation("form.Input.sort.order"),
            defaultMessage: "Default sort order"
          }),
          onChange: (value) => onChange({ target: { name: "settings.defaultSortOrder", value } }),
          name: "settings.defaultSortOrder",
          value: modifiedData.settings.defaultSortOrder || "",
          children: ["ASC", "DESC"].map((order) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Option, { value: order, children: order }, order))
        }
      ) })
    ] })
  ] });
};
Settings.defaultProps = {
  modifiedData: {},
  sortOptions: []
};
Settings.propTypes = {
  contentTypeOptions: PropTypes__default.default.object.isRequired,
  modifiedData: PropTypes__default.default.object,
  onChange: PropTypes__default.default.func.isRequired,
  sortOptions: PropTypes__default.default.arrayOf(
    PropTypes__default.default.shape({
      value: PropTypes__default.default.string,
      label: PropTypes__default.default.string
    }).isRequired
  )
};
const ActionButton = styled__default.default.button`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.spaces[7]};

  &:last-child {
    padding: 0 ${({ theme }) => theme.spaces[3]};
  }
`;
const DragButton = styled__default.default(ActionButton)`
  padding: 0 ${({ theme }) => theme.spaces[3]};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12 / 16}rem;
    height: ${12 / 16}rem;
  }
`;
const FieldContainer = styled__default.default(designSystem.Flex)`
  max-height: ${32 / 16}rem;
  cursor: pointer;

  svg {
    width: ${10 / 16}rem;
    height: ${10 / 16}rem;

    path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary100};
    border-color: ${({ theme }) => theme.colors.primary200};

    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary600};
      }
    }

    ${designSystem.Typography} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    ${DragButton} {
      border-right: 1px solid ${({ theme }) => theme.colors.primary200};
    }
  }
`;
const FieldWrapper = styled__default.default(designSystem.Box)`
  &:last-child {
    padding-right: ${({ theme }) => theme.spaces[3]};
  }
`;
const DraggableCard = ({
  index,
  isDraggingSibling,
  labelField,
  onClickEditField,
  onMoveField,
  onRemoveField,
  name: name2,
  setIsDraggingSibling
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const dragRef = React.useRef(null);
  const dropRef = React.useRef(null);
  const [, forceRerenderAfterDnd] = React.useState(false);
  const editButtonRef = React.useRef();
  const handleClickEditRow = () => {
    if (editButtonRef.current) {
      editButtonRef.current.click();
    }
  };
  const [, drop] = reactDnd.useDrop({
    accept: ItemTypes.FIELD,
    hover(item, monitor) {
      if (!dropRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;
      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        return;
      }
      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }
      onMoveField(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag, preview] = reactDnd.useDrag({
    type: ItemTypes.FIELD,
    item() {
      return { index, labelField, name: name2 };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
    end() {
      setIsDraggingSibling(false);
    }
  });
  React.useEffect(() => {
    preview(reactDndHtml5Backend.getEmptyImage(), { captureDraggingState: false });
  }, [preview]);
  React.useEffect(() => {
    if (isDragging) {
      setIsDraggingSibling(true);
    }
  }, [isDragging, setIsDraggingSibling]);
  React.useEffect(() => {
    if (!isDraggingSibling) {
      forceRerenderAfterDnd((prev) => !prev);
    }
  }, [isDraggingSibling]);
  const refs = {
    dragRef: drag(dragRef),
    dropRef: drop(dropRef)
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(FieldWrapper, { ref: refs ? refs.dropRef : null, children: [
    isDragging && /* @__PURE__ */ jsxRuntime.jsx(CardDragPreview, { labelField }),
    !isDragging && isDraggingSibling && /* @__PURE__ */ jsxRuntime.jsx(CardDragPreview, { isSibling: true, labelField }),
    !isDragging && !isDraggingSibling && /* @__PURE__ */ jsxRuntime.jsxs(
      FieldContainer,
      {
        borderColor: "neutral150",
        background: "neutral100",
        hasRadius: true,
        justifyContent: "space-between",
        onClick: handleClickEditRow,
        isDragging,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 3, children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              DragButton,
              {
                as: "span",
                "aria-label": formatMessage(
                  {
                    id: getTranslation("components.DraggableCard.move.field"),
                    defaultMessage: "Move {item}"
                  },
                  { item: labelField }
                ),
                onClick: (e) => e.stopPropagation(),
                ref: refs.dragRef,
                type: "button",
                children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Drag, {})
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", children: labelField })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { paddingLeft: 3, children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              ActionButton,
              {
                ref: editButtonRef,
                onClick: (e) => {
                  e.stopPropagation();
                  onClickEditField(name2);
                },
                "aria-label": formatMessage(
                  {
                    id: getTranslation("components.DraggableCard.edit.field"),
                    defaultMessage: "Edit {item}"
                  },
                  { item: labelField }
                ),
                type: "button",
                children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Pencil, {})
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              ActionButton,
              {
                onClick: onRemoveField,
                "data-testid": `delete-${name2}`,
                "aria-label": formatMessage(
                  {
                    id: getTranslation("components.DraggableCard.delete.field"),
                    defaultMessage: "Delete {item}"
                  },
                  { item: labelField }
                ),
                type: "button",
                children: /* @__PURE__ */ jsxRuntime.jsx(Icons.Cross, {})
              }
            )
          ] })
        ]
      }
    )
  ] });
};
DraggableCard.propTypes = {
  index: PropTypes__default.default.number.isRequired,
  isDraggingSibling: PropTypes__default.default.bool.isRequired,
  labelField: PropTypes__default.default.string.isRequired,
  name: PropTypes__default.default.string.isRequired,
  onClickEditField: PropTypes__default.default.func.isRequired,
  onMoveField: PropTypes__default.default.func.isRequired,
  onRemoveField: PropTypes__default.default.func.isRequired,
  setIsDraggingSibling: PropTypes__default.default.func.isRequired
};
const SortDisplayedFields = ({
  displayedFields,
  listRemainingFields,
  metadatas,
  onAddField,
  onClickEditField,
  onMoveField,
  onRemoveField
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const [isDraggingSibling, setIsDraggingSibling] = React.useState(false);
  const [lastAction, setLastAction] = React.useState(null);
  const scrollableContainerRef = React.useRef();
  function handleAddField(...args) {
    setLastAction("add");
    onAddField(...args);
  }
  function handleRemoveField(...args) {
    setLastAction("remove");
    onRemoveField(...args);
  }
  React.useEffect(() => {
    if (lastAction === "add" && scrollableContainerRef?.current) {
      scrollableContainerRef.current.scrollLeft = scrollableContainerRef.current.scrollWidth;
    }
  }, [displayedFields, lastAction]);
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { alignItems: "stretch", direction: "column", gap: 4, children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "delta", as: "h2", children: formatMessage({
      id: getTranslation("containers.SettingPage.view"),
      defaultMessage: "View"
    }) }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { padding: 4, borderColor: "neutral300", borderStyle: "dashed", borderWidth: "1px", hasRadius: true, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { flex: "1", overflow: "scroll hidden", ref: scrollableContainerRef, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { gap: 3, children: displayedFields.map((field, index) => /* @__PURE__ */ jsxRuntime.jsx(
        DraggableCard,
        {
          index,
          isDraggingSibling,
          onMoveField,
          onClickEditField,
          onRemoveField: (e) => handleRemoveField(e, index),
          name: field,
          labelField: metadatas[field].list.label || field,
          setIsDraggingSibling
        },
        field
      )) }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(v2.Menu.Root, { children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          v2.Menu.Trigger,
          {
            paddingLeft: 2,
            paddingRight: 2,
            justifyContent: "center",
            endIcon: null,
            disabled: listRemainingFields.length <= 0,
            variant: "tertiary",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.VisuallyHidden, { as: "span", children: formatMessage({
                id: getTranslation("components.FieldSelect.label"),
                defaultMessage: "Add a field"
              }) }),
              /* @__PURE__ */ jsxRuntime.jsx(Icons.Plus, { "aria-hidden": true, focusable: false, style: { position: "relative", top: 2 } })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(v2.Menu.Content, { children: listRemainingFields.map((field) => /* @__PURE__ */ jsxRuntime.jsx(v2.Menu.Item, { onSelect: () => handleAddField(field), children: metadatas[field].list.label || field }, field)) })
      ] })
    ] })
  ] });
};
SortDisplayedFields.propTypes = {
  displayedFields: PropTypes.PropTypes.array.isRequired,
  listRemainingFields: PropTypes.PropTypes.array.isRequired,
  metadatas: PropTypes.PropTypes.objectOf(
    PropTypes.PropTypes.shape({
      list: PropTypes.PropTypes.shape({
        label: PropTypes.PropTypes.string
      })
    })
  ).isRequired,
  onAddField: PropTypes.PropTypes.func.isRequired,
  onClickEditField: PropTypes.PropTypes.func.isRequired,
  onMoveField: PropTypes.PropTypes.func.isRequired,
  onRemoveField: PropTypes.PropTypes.func.isRequired
};
const EXCLUDED_SORT_ATTRIBUTE_TYPES = [
  "media",
  "richtext",
  "dynamiczone",
  "relation",
  "component",
  "json",
  "blocks"
];
const initialState$3 = {
  fieldForm: {},
  fieldToEdit: "",
  initialData: {},
  modifiedData: {}
};
const reducer$3 = (state = initialState$3, action) => (
  // eslint-disable-next-line consistent-return
  produce__default.default(state, (draftState) => {
    const layoutFieldListPath = ["modifiedData", "layouts", "list"];
    switch (action.type) {
      case "ADD_FIELD": {
        const layoutFieldList = get__default.default(state, layoutFieldListPath, []);
        set__default.default(draftState, layoutFieldListPath, [...layoutFieldList, action.item]);
        break;
      }
      case "MOVE_FIELD": {
        const layoutFieldList = get__default.default(state, layoutFieldListPath, []);
        const { originalIndex, atIndex } = action;
        set__default.default(
          draftState,
          layoutFieldListPath,
          arrayMoveItem(layoutFieldList, originalIndex, atIndex)
        );
        break;
      }
      case "ON_CHANGE": {
        set__default.default(draftState, ["modifiedData", ...action.keys.split(".")], action.value);
        break;
      }
      case "ON_CHANGE_FIELD_METAS": {
        set__default.default(draftState, ["fieldForm", action.name], action.value);
        break;
      }
      case "REMOVE_FIELD": {
        const layoutFieldList = get__default.default(state, layoutFieldListPath, []);
        set__default.default(
          draftState,
          layoutFieldListPath,
          layoutFieldList.filter((_, index) => action.index !== index)
        );
        break;
      }
      case "SET_FIELD_TO_EDIT": {
        const { fieldToEdit } = action;
        draftState.fieldToEdit = fieldToEdit;
        draftState.fieldForm.label = get__default.default(
          draftState,
          ["modifiedData", "metadatas", fieldToEdit, "list", "label"],
          ""
        );
        draftState.fieldForm.sortable = get__default.default(
          draftState,
          ["modifiedData", "metadatas", fieldToEdit, "list", "sortable"],
          ""
        );
        break;
      }
      case "UNSET_FIELD_TO_EDIT": {
        draftState.fieldForm = {};
        draftState.fieldToEdit = "";
        break;
      }
      case "SUBMIT_FIELD_FORM": {
        const fieldMetadataPath = ["modifiedData", "metadatas", state.fieldToEdit, "list"];
        set__default.default(draftState, [...fieldMetadataPath, "label"], state.fieldForm.label);
        set__default.default(draftState, [...fieldMetadataPath, "sortable"], state.fieldForm.sortable);
        break;
      }
      default:
        return draftState;
    }
  })
);
const ListSettingsView = ({ layout, slug }) => {
  const { put } = helperPlugin.useFetchClient();
  const { formatMessage } = reactIntl.useIntl();
  const { trackUsage } = helperPlugin.useTracking();
  const [{ query }] = helperPlugin.useQueryParams();
  const toggleNotification = helperPlugin.useNotification();
  const { refetchData } = React__namespace.useContext(ModelsContext);
  const [{ fieldToEdit, fieldForm, initialData, modifiedData }, dispatch] = React__namespace.useReducer(
    reducer$3,
    initialState$3,
    () => ({
      ...initialState$3,
      initialData: layout,
      modifiedData: layout
    })
  );
  const isModalFormOpen = Object.keys(fieldForm).length !== 0;
  const { attributes, options: options2 } = layout;
  const displayedFields = modifiedData.layouts.list;
  const handleChange = ({ target: { name: name2, value } }) => {
    dispatch({
      type: "ON_CHANGE",
      keys: name2,
      value: name2 === "settings.pageSize" ? parseInt(value, 10) : value
    });
  };
  const { isLoading: isSubmittingForm, mutate } = reactQuery.useMutation(
    (body) => put(`/content-manager/content-types/${slug}/configuration`, body),
    {
      onSuccess() {
        trackUsage("didEditListSettings");
        refetchData();
      },
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
    }
  );
  const handleAddField = (item) => {
    dispatch({
      type: "ADD_FIELD",
      item
    });
  };
  const handleRemoveField = (e, index) => {
    e.stopPropagation();
    if (displayedFields.length === 1) {
      toggleNotification({
        type: "info",
        message: { id: getTranslation("notification.info.minimumFields") }
      });
    } else {
      dispatch({
        type: "REMOVE_FIELD",
        index
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { layouts, settings, metadatas } = modifiedData;
    mutate({
      layouts,
      settings,
      metadatas
    });
    trackUsage("willSaveContentTypeLayout");
  };
  const handleClickEditField = (fieldToEdit2) => {
    dispatch({
      type: "SET_FIELD_TO_EDIT",
      fieldToEdit: fieldToEdit2
    });
  };
  const handleCloseModal = () => {
    dispatch({
      type: "UNSET_FIELD_TO_EDIT"
    });
  };
  const handleSubmitFieldEdit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SUBMIT_FIELD_FORM"
    });
    handleCloseModal();
  };
  const handleChangeEditLabel = ({ target: { name: name2, value } }) => {
    dispatch({
      type: "ON_CHANGE_FIELD_METAS",
      name: name2,
      value
    });
  };
  const listRemainingFields = Object.entries(attributes).filter(
    ([name2, attribute]) => checkIfAttributeIsDisplayable(attribute) && !displayedFields.includes(name2)
  ).map(([name2]) => name2).sort();
  const sortOptions = Object.entries(attributes).filter(([, attribute]) => !EXCLUDED_SORT_ATTRIBUTE_TYPES.includes(attribute.type)).map(([name2]) => ({
    value: name2,
    label: layout.metadatas[name2].list.label
  }));
  const move = (originalIndex, atIndex) => {
    dispatch({
      type: "MOVE_FIELD",
      originalIndex,
      atIndex
    });
  };
  const {
    settings: { pageSize, defaultSortBy, defaultSortOrder },
    kind,
    uid
  } = initialData;
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Layout, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { "aria-busy": isSubmittingForm, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.HeaderLayout,
        {
          navigationAction: /* @__PURE__ */ jsxRuntime.jsx(
            helperPlugin.Link,
            {
              startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.ArrowLeft, {}),
              to: {
                pathname: `/content-manager/${kind}/${uid}`,
                search: qs.stringify(
                  {
                    page: 1,
                    pageSize,
                    sort: `${defaultSortBy}:${defaultSortOrder}`,
                    plugins: query.plugins
                  },
                  {
                    encode: false
                  }
                )
              },
              id: "go-back",
              children: formatMessage({ id: "global.back", defaultMessage: "Back" })
            }
          ),
          primaryAction: /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.Button,
            {
              size: "S",
              startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Check, {}),
              disabled: isEqual__default.default(modifiedData, initialData),
              type: "submit",
              children: formatMessage({ id: "global.save", defaultMessage: "Save" })
            }
          ),
          subtitle: formatMessage({
            id: getTranslation(
              "components.SettingsViewWrapper.pluginHeader.description.list-settings"
            ),
            defaultMessage: "Define the settings of the list view."
          }),
          title: formatMessage(
            {
              id: getTranslation("components.SettingsViewWrapper.pluginHeader.title"),
              defaultMessage: "Configure the view - {name}"
            },
            { name: upperFirst__default.default(modifiedData.info.displayName) }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.ContentLayout, { children: /* @__PURE__ */ jsxRuntime.jsxs(
        designSystem.Flex,
        {
          alignItems: "stretch",
          background: "neutral0",
          direction: "column",
          gap: 6,
          hasRadius: true,
          shadow: "tableShadow",
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 7,
          paddingRight: 7,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              Settings,
              {
                contentTypeOptions: options2,
                modifiedData,
                onChange: handleChange,
                sortOptions
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Divider, {}),
            /* @__PURE__ */ jsxRuntime.jsx(
              SortDisplayedFields,
              {
                listRemainingFields,
                displayedFields,
                onAddField: handleAddField,
                onClickEditField: handleClickEditField,
                onMoveField: move,
                onRemoveField: handleRemoveField,
                metadatas: modifiedData.metadatas
              }
            )
          ]
        }
      ) })
    ] }),
    isModalFormOpen && /* @__PURE__ */ jsxRuntime.jsx(
      EditFieldForm,
      {
        attributes,
        fieldForm,
        fieldToEdit,
        onChangeEditLabel: handleChangeEditLabel,
        onCloseModal: handleCloseModal,
        onSubmit: handleSubmitFieldEdit,
        type: attributes?.[fieldToEdit]?.type ?? "text"
      }
    )
  ] }) });
};
ListSettingsView.propTypes = {
  layout: PropTypes__default.default.shape({
    uid: PropTypes__default.default.string.isRequired,
    settings: PropTypes__default.default.shape({
      bulkable: PropTypes__default.default.bool,
      defaultSortBy: PropTypes__default.default.string,
      defaultSortOrder: PropTypes__default.default.string,
      filterable: PropTypes__default.default.bool,
      pageSize: PropTypes__default.default.number,
      searchable: PropTypes__default.default.bool
    }).isRequired,
    metadatas: PropTypes__default.default.object.isRequired,
    options: PropTypes__default.default.object.isRequired,
    attributes: PropTypes__default.default.objectOf(
      PropTypes__default.default.shape({
        type: PropTypes__default.default.string
      })
    ).isRequired
  }).isRequired,
  slug: PropTypes__default.default.string.isRequired
};
const usersService = adminApi.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * users
     */
    createUser: builder.mutation({
      query: (body) => ({
        url: "/admin/users",
        method: "POST",
        data: body
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ["LicenseLimits", { type: "User", id: "LIST" }]
    }),
    updateUser: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/admin/users/${id}`,
        method: "PUT",
        data: body
      }),
      invalidatesTags: (_res, _err, { id }) => [
        { type: "User", id },
        { type: "User", id: "LIST" }
      ]
    }),
    getUsers: builder.query({
      query: ({ id, ...params } = {}) => ({
        url: `/admin/users/${id ?? ""}`,
        method: "GET",
        config: {
          params
        }
      }),
      transformResponse: (res) => {
        let users = [];
        if (res.data) {
          if ("results" in res.data) {
            if (Array.isArray(res.data.results)) {
              users = res.data.results;
            }
          } else {
            users = [res.data];
          }
        }
        return {
          users,
          pagination: "pagination" in res.data ? res.data.pagination : null
        };
      },
      providesTags: (res, _err, arg) => {
        if (typeof arg === "object" && "id" in arg) {
          return [{ type: "User", id: arg.id }];
        } else {
          return [
            ...res?.users.map(({ id }) => ({ type: "User", id })) ?? [],
            { type: "User", id: "LIST" }
          ];
        }
      }
    }),
    deleteManyUsers: builder.mutation({
      query: (body) => ({
        url: "/admin/users/batch-delete",
        method: "POST",
        data: body
      }),
      transformResponse: (res) => res.data,
      invalidatesTags: ["LicenseLimits", { type: "User", id: "LIST" }]
    }),
    /**
     * roles
     */
    createRole: builder.mutation({
      query: (body) => ({
        url: "/admin/roles",
        method: "POST",
        data: body
      }),
      transformResponse: (res) => res.data,
      invalidatesTags: [{ type: "Role", id: "LIST" }]
    }),
    getRoles: builder.query({
      query: ({ id, ...params } = {}) => ({
        url: `/admin/roles/${id ?? ""}`,
        method: "GET",
        config: {
          params
        }
      }),
      transformResponse: (res) => {
        let roles = [];
        if (res.data) {
          if (Array.isArray(res.data)) {
            roles = res.data;
          } else {
            roles = [res.data];
          }
        }
        return roles;
      },
      providesTags: (res, _err, arg) => {
        if (typeof arg === "object" && "id" in arg) {
          return [{ type: "Role", id: arg.id }];
        } else {
          return [
            ...res?.map(({ id }) => ({ type: "Role", id })) ?? [],
            { type: "Role", id: "LIST" }
          ];
        }
      }
    }),
    updateRole: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/admin/roles/${id}`,
        method: "PUT",
        data: body
      }),
      transformResponse: (res) => res.data,
      invalidatesTags: (_res, _err, { id }) => [{ type: "Role", id }]
    }),
    getRolePermissions: builder.query({
      query: ({ id, ...params }) => ({
        url: `/admin/roles/${id}/permissions`,
        method: "GET",
        config: {
          params
        }
      }),
      transformResponse: (res) => res.data,
      providesTags: (_res, _err, { id }) => [{ type: "RolePermissions", id }]
    }),
    updateRolePermissions: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/admin/roles/${id}/permissions`,
        method: "PUT",
        data: body
      }),
      transformResponse: (res) => res.data,
      invalidatesTags: (_res, _err, { id }) => [{ type: "RolePermissions", id }]
    }),
    /**
     * Permissions
     */
    getRolePermissionLayout: builder.query({
      query: (params) => ({
        url: "/admin/permissions",
        method: "GET",
        config: {
          params
        }
      }),
      transformResponse: (res) => res.data
    })
  }),
  overrideExisting: false
});
const {
  useCreateUserMutation,
  useGetUsersQuery,
  useUpdateUserMutation,
  useDeleteManyUsersMutation,
  useGetRolesQuery,
  useCreateRoleMutation,
  useUpdateRoleMutation,
  useGetRolePermissionsQuery,
  useGetRolePermissionLayoutQuery,
  useUpdateRolePermissionsMutation
} = usersService;
const useAdminUsers = useGetUsersQuery;
const AdminUsersFilter = ({ value, onChange }) => {
  const { formatMessage } = reactIntl.useIntl();
  const { data, isLoading } = useAdminUsers();
  const users = data?.users || [];
  return /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.Combobox,
    {
      value,
      "aria-label": formatMessage({
        id: "content-manager.components.Filters.usersSelect.label",
        defaultMessage: "Search and select an user to filter"
      }),
      onChange,
      loading: isLoading,
      children: users.map((user) => {
        return /* @__PURE__ */ jsxRuntime.jsx(designSystem.ComboboxOption, { value: user.id.toString(), children: getDisplayName(user, formatMessage) }, user.id);
      })
    }
  );
};
const AutoCloneFailureModal = ({
  onClose,
  entryId,
  prohibitedFields,
  pluginQueryParams
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const { pathname } = reactRouterDom.useLocation();
  if (!entryId) {
    return null;
  }
  const editPath = `${pathname}/create/clone/${entryId}?${pluginQueryParams}`;
  const getDefaultErrorMessage = (reason) => {
    switch (reason) {
      case "relation":
        return "Duplicating the relation could remove it from the original entry.";
      case "unique":
        return "Identical values in a unique field are not allowed";
      default:
        return reason;
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.ModalLayout, { onClose, labelledBy: "title", children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.ModalHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "omega", fontWeight: "bold", as: "h2", id: "title", children: formatMessage({
      id: getTranslation("containers.ListPage.autoCloneModal.header"),
      defaultMessage: "Duplicate"
    }) }) }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.ModalBody, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "beta", children: formatMessage({
        id: getTranslation("containers.ListPage.autoCloneModal.title"),
        defaultMessage: "This entry can't be duplicated directly."
      }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { marginTop: 2, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral600", children: formatMessage({
        id: getTranslation("containers.ListPage.autoCloneModal.description"),
        defaultMessage: "A new entry will be created with the same content, but you'll have to change the following fields to save it."
      }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { marginTop: 6, gap: 2, direction: "column", alignItems: "stretch", children: prohibitedFields.map(([fieldPath, reason]) => /* @__PURE__ */ jsxRuntime.jsxs(
        designSystem.Flex,
        {
          direction: "column",
          gap: 2,
          alignItems: "flex-start",
          borderColor: "neutral200",
          hasRadius: true,
          padding: 6,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { direction: "row", as: "ol", children: fieldPath.map((pathSegment, index) => /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { fontWeight: "semiBold", as: "li", children: [
              pathSegment,
              index !== fieldPath.length - 1 && /* @__PURE__ */ jsxRuntime.jsx(
                designSystem.Icon,
                {
                  as: Icons.ChevronRight,
                  color: "neutral500",
                  height: 2,
                  width: 2,
                  marginLeft: 2,
                  marginRight: 2
                }
              )
            ] }, index)) }),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "p", textColor: "neutral600", children: formatMessage({
              id: getTranslation(`containers.ListPage.autoCloneModal.error.${reason}`),
              defaultMessage: getDefaultErrorMessage(reason)
            }) })
          ]
        },
        fieldPath.join()
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.ModalFooter,
      {
        startActions: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { onClick: onClose, variant: "tertiary", children: formatMessage({
          id: "cancel",
          defaultMessage: "Cancel"
        }) }),
        endActions: (
          // @ts-expect-error - types are not inferred correctly through the as prop.
          /* @__PURE__ */ jsxRuntime.jsx(v2.LinkButton, { as: reactRouterDom.NavLink, to: editPath, children: formatMessage({
            id: getTranslation("containers.ListPage.autoCloneModal.create"),
            defaultMessage: "Create"
          }) })
        )
      }
    )
  ] });
};
const Filter = ({ displayedFilters }) => {
  const [isVisible, setIsVisible] = React__namespace.useState(false);
  const { formatMessage } = reactIntl.useIntl();
  const buttonRef = React__namespace.useRef(null);
  const { trackUsage } = helperPlugin.useTracking();
  const handleToggle = () => {
    if (!isVisible) {
      trackUsage("willFilterEntries");
    }
    setIsVisible((prev) => !prev);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Button,
      {
        variant: "tertiary",
        ref: buttonRef,
        startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Filter, {}),
        onClick: handleToggle,
        size: "S",
        children: formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
      }
    ),
    isVisible && /* @__PURE__ */ jsxRuntime.jsx(
      helperPlugin.FilterPopoverURLQuery,
      {
        displayedFilters,
        isVisible,
        onToggle: handleToggle,
        source: buttonRef
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.FilterListURLQuery, { filtersSchema: displayedFilters })
  ] });
};
const CellValue = ({ type, value }) => {
  const { formatDate, formatTime, formatNumber } = reactIntl.useIntl();
  let formattedValue = value;
  if (type === "date") {
    formattedValue = formatDate(parseISO__default.default(value), { dateStyle: "full" });
  }
  if (type === "datetime") {
    formattedValue = formatDate(value, { dateStyle: "full", timeStyle: "short" });
  }
  if (type === "time") {
    const [hour, minute, second] = value.split(":");
    const date = /* @__PURE__ */ new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);
    formattedValue = formatTime(date, {
      timeStyle: "short"
    });
  }
  if (["float", "decimal"].includes(type)) {
    formattedValue = formatNumber(value, {
      // Should be kept in sync with the corresponding value
      // in the design-system/NumberInput: https://github.com/strapi/design-system/blob/main/packages/strapi-design-system/src/NumberInput/NumberInput.js#L53
      maximumFractionDigits: 20
    });
  }
  if (["integer", "biginteger"].includes(type)) {
    formattedValue = formatNumber(value, { maximumFractionDigits: 0 });
  }
  return toString__default.default(formattedValue);
};
const SingleComponent = ({ content, metadatas }) => {
  const { mainField } = metadatas;
  if (!mainField) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tooltip, { label: content[mainField.name], children: /* @__PURE__ */ jsxRuntime.jsx(SingleComponentTypography, { textColor: "neutral800", ellipsis: true, children: /* @__PURE__ */ jsxRuntime.jsx(CellValue, { type: mainField?.type, value: content[mainField.name] }) }) });
};
const SingleComponentTypography = styled__default.default(designSystem.Typography)`
  max-width: 250px;
`;
const RepeatableComponent = ({ content, metadatas }) => {
  const { formatMessage } = reactIntl.useIntl();
  const { mainField } = metadatas;
  if (!mainField) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(v2.Menu.Root, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(MenuTrigger$1, { onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Badge, { children: content.length }),
      " ",
      formatMessage(
        {
          id: "content-manager.containers.ListPage.items",
          defaultMessage: "{number, plural, =0 {items} one {item} other {items}}"
        },
        { number: content.length }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(v2.Menu.Content, { children: content.map((item) => /* @__PURE__ */ jsxRuntime.jsx(v2.Menu.Item, { disabled: true, children: /* @__PURE__ */ jsxRuntime.jsx(RepeatableComponentTypography, { ellipsis: true, children: /* @__PURE__ */ jsxRuntime.jsx(CellValue, { type: mainField.type, value: item[mainField.name] }) }) }, item.id)) })
  ] });
};
const RepeatableComponentTypography = styled__default.default(designSystem.Typography)`
  max-width: 500px;
`;
const MenuTrigger$1 = styled__default.default(v2.Menu.Trigger)`
  svg {
    width: ${6 / 16}rem;
    height: ${4 / 16}rem;
  }
`;
const MediaSingle = ({ url, mime, alternativeText, name: name2, ext, formats }) => {
  const fileURL = helperPlugin.prefixFileUrlWithBackendUrl(url);
  if (mime.includes("image")) {
    const thumbnail = formats?.thumbnail?.url;
    const mediaURL = helperPlugin.prefixFileUrlWithBackendUrl(thumbnail) || fileURL;
    return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Avatar, { src: mediaURL, alt: alternativeText || name2, preview: true });
  }
  const fileExtension = helperPlugin.getFileExtension(ext);
  const fileName = name2.length > 100 ? `${name2.substring(0, 100)}...` : name2;
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tooltip, { description: fileName, children: /* @__PURE__ */ jsxRuntime.jsx(FileWrapper, { children: fileExtension }) });
};
const FileWrapper = ({ children }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.Flex,
    {
      as: "span",
      position: "relative",
      borderRadius: "50%",
      width: "26px",
      height: "26px",
      borderColor: "neutral200",
      background: "neutral150",
      paddingLeft: "1px",
      justifyContent: "center",
      alignItems: "center",
      children: /* @__PURE__ */ jsxRuntime.jsx(FileTypography, { variant: "sigma", textColor: "neutral600", children })
    }
  );
};
const FileTypography = styled__default.default(designSystem.Typography)`
  font-size: 0.6rem;
  line-height: 0.6rem;
`;
const MediaMultiple = ({ content }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.AvatarGroup, { children: content.map((file, index) => {
    const key = `${file.id}${index}`;
    if (index === 3) {
      const remainingFiles = `+${content.length - 3}`;
      return /* @__PURE__ */ jsxRuntime.jsx(FileWrapper, { children: remainingFiles }, key);
    }
    if (index > 3) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(MediaSingle, { ...file }, key);
  }) });
};
const RelationSingle = ({ metadatas, content }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(TypographyMaxWidth$1, { textColor: "neutral800", ellipsis: true, children: /* @__PURE__ */ jsxRuntime.jsx(
    CellValue,
    {
      type: metadatas.mainField?.type ?? "integer",
      value: metadatas.mainField?.name ? content[metadatas.mainField?.name] : content.id
    }
  ) });
};
const TypographyMaxWidth$1 = styled__default.default(designSystem.Typography)`
  max-width: 500px;
`;
const RelationMultiple = ({ metadatas, name: name2, entityId, content, uid }) => {
  const { formatMessage } = reactIntl.useIntl();
  const { notifyStatus } = designSystem.useNotifyAT();
  const [isOpen, setIsOpen] = React__namespace.useState(false);
  const { get: get2 } = helperPlugin.useFetchClient();
  const [fieldName] = name2.split(".");
  const { data, isLoading } = reactQuery.useQuery(
    [uid, entityId, fieldName],
    async () => {
      const { data: data2 } = await get2(
        `/content-manager/relations/${uid}/${entityId}/${fieldName}`
      );
      if ("data" in data2 && data2.data) {
        return {
          results: [data2.data]
        };
      }
      if ("results" in data2) {
        return { results: data2.results, pagination: data2.pagination };
      }
      throw new Error(
        `/content-manager/relations/${uid}/${entityId}/${fieldName} returned an error object with a success code.`
      );
    },
    {
      enabled: isOpen,
      staleTime: 0,
      select: (data2) => ({
        ...data2,
        results: [...data2.results].reverse()
      })
    }
  );
  React__namespace.useEffect(() => {
    if (data) {
      notifyStatus(
        formatMessage({
          id: getTranslation("DynamicTable.relation-loaded"),
          defaultMessage: "Relations have been loaded"
        })
      );
    }
  }, [data, formatMessage, notifyStatus]);
  return /* @__PURE__ */ jsxRuntime.jsxs(v2.Menu.Root, { onOpenChange: (isOpen2) => setIsOpen(isOpen2), children: [
    /* @__PURE__ */ jsxRuntime.jsx(MenuTrigger, { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 1, wrap: "nowrap", children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Badge, { children: content.count }),
      formatMessage(
        {
          id: "content-manager.containers.ListPage.items",
          defaultMessage: "{number, plural, =0 {items} one {item} other {items}}"
        },
        { number: content.count }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsxs(v2.Menu.Content, { children: [
      isLoading && /* @__PURE__ */ jsxRuntime.jsx(v2.Menu.Item, { disabled: true, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Loader, { small: true, children: formatMessage({
        id: getTranslation("ListViewTable.relation-loading"),
        defaultMessage: "Relations are loading"
      }) }) }),
      data?.results && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        data.results.map((entry) => /* @__PURE__ */ jsxRuntime.jsx(v2.Menu.Item, { disabled: true, children: /* @__PURE__ */ jsxRuntime.jsx(TypographyMaxWidth$1, { ellipsis: true, children: /* @__PURE__ */ jsxRuntime.jsx(
          CellValue,
          {
            type: metadatas.mainField?.type ?? "integer",
            value: metadatas.mainField?.name ? entry[metadatas.mainField.name] : entry.id
          }
        ) }) }, entry.id)),
        data?.pagination && data?.pagination.total > 10 && /* @__PURE__ */ jsxRuntime.jsx(
          v2.Menu.Item,
          {
            "aria-disabled": true,
            "aria-label": formatMessage({
              id: getTranslation("ListViewTable.relation-more"),
              defaultMessage: "This relation contains more entities than displayed"
            }),
            children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: "…" })
          }
        )
      ] })
    ] })
  ] });
};
const MenuTrigger = styled__default.default(v2.Menu.Trigger)`
  svg {
    width: ${6 / 16}rem;
    height: ${4 / 16}rem;
  }
`;
const CellContent = ({
  content,
  fieldSchema,
  metadatas,
  name: name2,
  rowId,
  contentType
}) => {
  if (!hasContent(content, metadatas, fieldSchema)) {
    return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral800", children: "-" });
  }
  switch (fieldSchema.type) {
    case "media":
      if (!fieldSchema.multiple) {
        return /* @__PURE__ */ jsxRuntime.jsx(MediaSingle, { ...content });
      }
      return /* @__PURE__ */ jsxRuntime.jsx(MediaMultiple, { content });
    case "relation": {
      if (isSingleRelation(fieldSchema.relation)) {
        return /* @__PURE__ */ jsxRuntime.jsx(RelationSingle, { metadatas, content });
      }
      return /* @__PURE__ */ jsxRuntime.jsx(
        RelationMultiple,
        {
          metadatas,
          content,
          name: name2,
          entityId: rowId,
          uid: contentType.uid
        }
      );
    }
    case "component":
      if (fieldSchema.repeatable === true) {
        return /* @__PURE__ */ jsxRuntime.jsx(RepeatableComponent, { content, metadatas });
      }
      return /* @__PURE__ */ jsxRuntime.jsx(SingleComponent, { content, metadatas });
    case "string":
      return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tooltip, { description: content, children: /* @__PURE__ */ jsxRuntime.jsx(TypographyMaxWidth, { ellipsis: true, textColor: "neutral800", children: /* @__PURE__ */ jsxRuntime.jsx(CellValue, { type: fieldSchema.type, value: content }) }) });
    default:
      return /* @__PURE__ */ jsxRuntime.jsx(TypographyMaxWidth, { ellipsis: true, textColor: "neutral800", children: /* @__PURE__ */ jsxRuntime.jsx(CellValue, { type: fieldSchema.type, value: content }) });
  }
};
const TypographyMaxWidth = styled__default.default(designSystem.Typography)`
  max-width: 300px;
`;
const hasContent = (content, metadatas, fieldSchema) => {
  if (fieldSchema.type === "component") {
    const { mainField } = metadatas;
    if (fieldSchema?.repeatable || !mainField) {
      return content && Array.isArray(content) && content.length > 0;
    }
    const value = content?.[mainField.name];
    if (mainField.name === "id" && ![void 0, null].includes(value)) {
      return true;
    }
    if (isFieldTypeNumber(mainField.type) && mainField.type !== "biginteger" && mainField.name !== "id") {
      return typeof value === "number";
    }
    return !isEmpty__default.default(value);
  }
  if (fieldSchema.type === "relation") {
    if (isSingleRelation(fieldSchema.relation)) {
      return !isEmpty__default.default(content);
    }
    return content?.count > 0;
  }
  if (isFieldTypeNumber(fieldSchema.type) && fieldSchema.type !== "biginteger") {
    return typeof content === "number";
  }
  if (fieldSchema.type === "boolean") {
    return content !== null;
  }
  return !isEmpty__default.default(content);
};
const isSingleRelation = (type) => ["oneToOne", "manyToOne", "oneToOneMorph"].includes(type);
const ViewSettingsMenu = ({ slug }) => {
  const [isVisible, setIsVisible] = React__namespace.default.useState(false);
  const cogButtonRef = React__namespace.default.useRef(null);
  const permissions2 = useTypedSelector((state) => state.admin_app.permissions);
  const { formatMessage } = reactIntl.useIntl();
  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.IconButton,
      {
        icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Cog, {}),
        label: formatMessage({
          id: "components.ViewSettings.tooltip",
          defaultMessage: "View Settings"
        }),
        ref: cogButtonRef,
        onClick: handleToggle
      }
    ),
    isVisible && /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Popover,
      {
        placement: "bottom-end",
        source: cogButtonRef,
        onDismiss: handleToggle,
        spacing: 4,
        padding: 3,
        children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { alignItems: "stretch", direction: "column", gap: 3, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            helperPlugin.CheckPermissions,
            {
              permissions: permissions2.contentManager?.collectionTypesConfigurations,
              children: /* @__PURE__ */ jsxRuntime.jsx(
                v2.LinkButton,
                {
                  size: "S",
                  startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Layer, {}),
                  variant: "secondary",
                  as: reactRouterDom.NavLink,
                  to: `${slug}/configurations/list`,
                  children: formatMessage({
                    id: "app.links.configure-view",
                    defaultMessage: "Configure the view"
                  })
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(FieldPicker, {})
        ] })
      }
    )
  ] });
};
const selectDisplayedHeaderKeys = toolkit.createSelector(
  (state) => state["content-manager_listView"].displayedHeaders,
  (displayedHeaders) => displayedHeaders.map(({ name: name2 }) => name2)
);
const FieldPicker = () => {
  const dispatch = useTypedDispatch();
  const displayedHeadersKeys = useTypedSelector(selectDisplayedHeaderKeys);
  const contentTypeLayout = useTypedSelector(
    (state) => state["content-manager_listView"].contentType
  );
  const { trackUsage } = helperPlugin.useTracking();
  const { formatMessage, locale } = reactIntl.useIntl();
  const formatter = helperPlugin.useCollator(locale, {
    sensitivity: "base"
  });
  const columns = Object.keys(contentTypeLayout.attributes).filter((name2) => checkIfAttributeIsDisplayable(contentTypeLayout.attributes[name2])).map((name2) => ({
    name: name2,
    label: contentTypeLayout.metadatas[name2].list.label ?? ""
  })).sort((a, b) => formatter.compare(a.label, b.label));
  const handleChange = (name2) => {
    trackUsage("didChangeDisplayedFields");
    dispatch(onChangeListHeaders({ name: name2, value: displayedHeadersKeys.includes(name2) }));
  };
  const handleReset = () => {
    dispatch(onResetListHeaders());
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { as: "fieldset", direction: "column", alignItems: "stretch", gap: 3, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "legend", variant: "pi", fontWeight: "bold", children: formatMessage({
        id: "containers.ListPage.displayedFields",
        defaultMessage: "Displayed fields"
      }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.TextButton, { onClick: handleReset, children: formatMessage({
        id: "app.components.Button.reset",
        defaultMessage: "Reset"
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { direction: "column", alignItems: "stretch", children: columns.map((header) => {
      const isActive = displayedHeadersKeys.includes(header.name);
      return /* @__PURE__ */ jsxRuntime.jsxs(
        ChackboxWrapper,
        {
          wrap: "wrap",
          gap: 2,
          as: "label",
          background: isActive ? "primary100" : "transparent",
          hasRadius: true,
          padding: 2,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.BaseCheckbox,
              {
                onChange: () => handleChange(header.name),
                value: isActive,
                name: header.name
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontSize: 1, children: header.label })
          ]
        },
        header.name
      );
    }) })
  ] });
};
const ChackboxWrapper = styled__default.default(designSystem.Flex)`
  :hover {
    background-color: ${(props) => props.theme.colors.primary100};
  }
`;
const NOT_ALLOWED_FILTERS = [
  "json",
  "component",
  "media",
  "richtext",
  "dynamiczone",
  "password",
  "blocks"
];
const DEFAULT_ALLOWED_FILTERS = ["createdAt", "updatedAt"];
const useAllowedAttributes = (contentType, slug) => {
  const { allPermissions } = helperPlugin.useRBACProvider();
  const readPermissionsForSlug = helperPlugin.findMatchingPermissions(allPermissions, [
    {
      action: "plugin::content-manager.explorer.read",
      subject: slug
    }
  ]);
  const canReadAdminUsers = helperPlugin.findMatchingPermissions(allPermissions, [
    {
      action: "admin::users.read",
      subject: null
    }
  ]).length > 0;
  const attributesWithReadPermissions = readPermissionsForSlug?.[0]?.properties?.fields ?? [];
  const allowedAttributes = attributesWithReadPermissions.filter((attr) => {
    const current = contentType?.attributes?.[attr] ?? {};
    if (!current.type) {
      return false;
    }
    if (NOT_ALLOWED_FILTERS.includes(current.type)) {
      return false;
    }
    return true;
  });
  return [
    "id",
    ...allowedAttributes,
    ...DEFAULT_ALLOWED_FILTERS,
    ...canReadAdminUsers ? CREATOR_FIELDS : []
  ];
};
const { INJECT_COLUMN_IN_TABLE: INJECT_COLUMN_IN_TABLE$1 } = HOOKS;
const REVIEW_WORKFLOW_COLUMNS_CE = null;
const REVIEW_WORKFLOW_COLUMNS_CELL_CE = {
  ReviewWorkflowsStageEE: () => null,
  ReviewWorkflowsAssigneeEE: () => null
};
const REVIEW_WORKFLOW_FILTER_CE = [];
const USER_FILTER_ATTRIBUTES = [...CREATOR_FIELDS, "strapi_assignee"];
const ListViewPage = ({
  canCreate,
  canDelete,
  canRead,
  canPublish,
  layout,
  slug
}) => {
  const dispatch = useTypedDispatch();
  const { pagination, isLoading, data } = useTypedSelector(
    (state) => state["content-manager_listView"]
  );
  const { total } = pagination;
  const { contentType } = layout;
  const {
    info,
    options: options2,
    metadatas,
    settings: { bulkable: isBulkable, filterable: isFilterable, searchable: isSearchable }
  } = contentType;
  const [isConfirmDeleteRowOpen, setIsConfirmDeleteRowOpen] = React__namespace.useState(false);
  const toggleNotification = helperPlugin.useNotification();
  const { trackUsage } = helperPlugin.useTracking();
  const { allPermissions, refetchPermissions } = helperPlugin.useRBACProvider();
  const { notifyStatus } = designSystem.useNotifyAT();
  const { formatAPIError } = helperPlugin.useAPIErrorHandler(getTranslation);
  const allowedAttributes = useAllowedAttributes(contentType, slug);
  const [{ query }] = helperPlugin.useQueryParams();
  const { pathname } = reactRouterDom.useLocation();
  const { push } = reactRouterDom.useHistory();
  const { formatMessage, locale } = reactIntl.useIntl();
  const { get: get2, post, del } = helperPlugin.useFetchClient();
  const formatter = helperPlugin.useCollator(locale, {
    sensitivity: "base"
  });
  const selectedUserIds = query?.filters?.$and?.reduce((acc, filter) => {
    const [key, value] = Object.entries(filter)[0];
    const id = value.id?.$eq || value.id?.$ne;
    if (id && USER_FILTER_ATTRIBUTES.includes(key) && !acc.includes(id)) {
      acc.push(id);
    }
    return acc;
  }, []) ?? [];
  const { data: userData, isLoading: isLoadingAdminUsers } = useAdminUsers(
    { filters: { id: { $in: selectedUserIds } } },
    {
      // fetch the list of admin users only if the filter contains users and the
      // current user has permissions to display users
      skip: selectedUserIds.length === 0 || helperPlugin.findMatchingPermissions(allPermissions, [
        {
          action: "admin::users.read",
          subject: null
        }
      ]).length === 0
    }
  );
  const { users = [] } = userData ?? {};
  helperPlugin.useFocusWhenNavigate();
  const params = React__namespace.useMemo(() => buildValidGetParams(query), [query]);
  const pluginsQueryParams = qs.stringify({ plugins: query.plugins }, { encode: false });
  const displayedAttributeFilters = allowedAttributes.map((name2) => {
    const attribute = contentType.attributes[name2];
    const trackedEvent = {
      name: "didFilterEntries",
      properties: { useRelation: attribute.type === "relation" }
    };
    const { mainField, label } = metadatas[name2].list;
    const filter = {
      name: name2,
      metadatas: { label: formatMessage({ id: label, defaultMessage: label }) },
      fieldSchema: {
        type: attribute.type,
        options: "enum" in attribute ? attribute.enum : [],
        mainField
      },
      trackedEvent
    };
    if (attribute.type === "relation" && "target" in attribute && attribute.target === "admin::user") {
      filter.metadatas = {
        ...filter.metadatas,
        customOperators: [
          {
            intlLabel: {
              id: "components.FilterOptions.FILTER_TYPES.$eq",
              defaultMessage: "is"
            },
            value: "$eq"
          },
          {
            intlLabel: {
              id: "components.FilterOptions.FILTER_TYPES.$ne",
              defaultMessage: "is not"
            },
            value: "$ne"
          }
        ],
        customInput: AdminUsersFilter,
        options: users.map((user) => ({
          label: getDisplayName(user, formatMessage),
          customValue: user.id.toString()
        }))
      };
      filter.fieldSchema.mainField = {
        ...mainField,
        name: "id"
      };
    }
    return filter;
  });
  const hasDraftAndPublish = options2?.draftAndPublish ?? false;
  const hasReviewWorkflows = options2?.reviewWorkflows ?? false;
  const reviewWorkflowColumns = useEnterprise(
    REVIEW_WORKFLOW_COLUMNS_CE,
    async () => (await Promise.resolve().then(() => require("./constants-m4J9xcls.js"))).REVIEW_WORKFLOW_COLUMNS_EE,
    {
      enabled: !!options2?.reviewWorkflows
    }
  );
  const ReviewWorkflowsColumns = useEnterprise(
    REVIEW_WORKFLOW_COLUMNS_CELL_CE,
    async () => {
      const { ReviewWorkflowsStageEE, ReviewWorkflowsAssigneeEE } = await Promise.resolve().then(() => require("./ReviewWorkflowsColumn-LKOJyUDI.js"));
      return { ReviewWorkflowsStageEE, ReviewWorkflowsAssigneeEE };
    },
    {
      enabled: hasReviewWorkflows
    }
  );
  const reviewWorkflowFilter = useEnterprise(
    REVIEW_WORKFLOW_FILTER_CE,
    async () => (await Promise.resolve().then(() => require("./constants-m4J9xcls.js"))).REVIEW_WORKFLOW_FILTERS,
    {
      combine(ceFilters, eeFilters) {
        return [
          ...ceFilters,
          ...eeFilters.filter((eeFilter) => {
            if (eeFilter.name === "strapi_assignee") {
              return helperPlugin.findMatchingPermissions(allPermissions, [
                {
                  action: "admin::users.read",
                  subject: null
                }
              ]).length > 0;
            }
            return true;
          }).map((eeFilter) => ({
            ...eeFilter,
            metadatas: {
              ...eeFilter.metadatas,
              // the stage filter needs the current content-type uid to fetch
              // the list of stages that can be assigned to this content-type
              ...eeFilter.name === "strapi_stage" ? { uid: contentType.uid } : {},
              // translate the filter label
              label: formatMessage(eeFilter.metadatas.label),
              // `options` allows the filter-tag to render the displayname
              // of a user over a plain id
              options: eeFilter.name === "strapi_assignee" ? users.map((user) => ({
                label: getDisplayName(user, formatMessage),
                customValue: user.id.toString()
              })) : void 0
            }
          }))
        ];
      },
      defaultValue: [],
      // we have to wait for admin users to be fully loaded, because otherwise
      // combine is called to early and does not contain the latest state of
      // the users array
      enabled: hasReviewWorkflows && !isLoadingAdminUsers
    }
    /**
     * this is cast because the data returns MessageDescriptor
     * as `metadatas.label` _then_ we turn it to a string.
     */
  );
  const { refetch } = reactQuery.useQuery(
    ["content-manager", "collection-types", slug, params],
    async () => {
      dispatch(getData());
      const { data: data2 } = await get2(
        `/content-manager/collection-types/${slug}`,
        { params }
      );
      return data2;
    },
    {
      enabled: canRead,
      onError(err) {
        const resStatus = err?.response?.status ?? null;
        if (resStatus === 403) {
          refetchPermissions();
          toggleNotification({
            type: "info",
            message: { id: getTranslation("permissions.not-allowed.update") }
          });
          push("/");
          return;
        }
        toggleNotification({
          type: "warning",
          message: { id: getTranslation("error.model.fetch") }
        });
      },
      onSuccess({ pagination: pagination2, results }) {
        if (pagination2.page && pagination2.page > pagination2.pageCount && pagination2.pageCount > 0) {
          const query2 = {
            ...params,
            page: pagination2.pageCount
          };
          push({
            pathname,
            state: { from: pathname },
            search: qs.stringify(query2)
          });
          return;
        }
        notifyStatus(
          formatMessage(
            {
              id: getTranslation("utils.data-loaded"),
              defaultMessage: "{number, plural, =1 {# entry has} other {# entries have}} successfully been loaded"
            },
            // Using the plural form
            { number: pagination2.pageSize }
          )
        );
        dispatch(getDataSucceeded(pagination2, results));
      }
    }
  );
  const handleConfirmDeleteData = React__namespace.useCallback(
    async (idToDelete) => {
      try {
        await del(
          `/content-manager/collection-types/${slug}/${idToDelete}`
        );
        await refetch();
        toggleNotification({
          type: "success",
          message: { id: getTranslation("success.record.delete") }
        });
      } catch (err) {
        if (err instanceof axios.AxiosError) {
          toggleNotification({
            type: "warning",
            message: formatAPIError(err)
          });
        }
      }
    },
    [slug, toggleNotification, formatAPIError, del, refetch]
  );
  const defaultHeaderLayoutTitle = formatMessage({
    id: getTranslation("header.name"),
    defaultMessage: "Content"
  });
  const headerLayoutTitle = formatMessage({
    id: info.displayName,
    defaultMessage: info.displayName || defaultHeaderLayoutTitle
  });
  const { runHookWaterfall } = helperPlugin.useStrapiApp();
  const displayedHeaders = useTypedSelector(
    (state) => state["content-manager_listView"].displayedHeaders
  );
  const tableHeaders = React__namespace.useMemo(() => {
    const headers = runHookWaterfall(INJECT_COLUMN_IN_TABLE$1, {
      displayedHeaders,
      layout
    });
    const formattedHeaders = headers.displayedHeaders.map((header) => {
      if (header.fieldSchema.type === "relation") {
        return {
          ...header,
          metadatas: {
            ...header.metadatas,
            label: formatMessage({
              id: getTranslation(`containers.ListPage.table-headers.${header.name}`),
              defaultMessage: header.metadatas.label
            })
          },
          name: `${header.name}.${header.metadatas.mainField?.name ?? ""}`
        };
      }
      return {
        ...header,
        metadatas: {
          ...header.metadatas,
          label: formatMessage({
            id: getTranslation(`containers.ListPage.table-headers.${header.name}`),
            defaultMessage: header.metadatas.label
          })
        }
      };
    });
    if (hasDraftAndPublish) {
      formattedHeaders.push({
        key: "__published_at_temp_key__",
        name: "publishedAt",
        fieldSchema: {
          type: "custom"
        },
        metadatas: {
          label: formatMessage({
            id: getTranslation(`containers.ListPage.table-headers.publishedAt`),
            defaultMessage: "publishedAt"
          }),
          searchable: false,
          sortable: true
        }
      });
    }
    if (reviewWorkflowColumns) {
      formattedHeaders.push(
        ...reviewWorkflowColumns.map((column) => {
          return {
            ...column,
            metadatas: {
              ...column.metadatas,
              label: formatMessage(column.metadatas.label)
            }
          };
        })
      );
    }
    return formattedHeaders;
  }, [
    runHookWaterfall,
    displayedHeaders,
    layout,
    reviewWorkflowColumns,
    hasDraftAndPublish,
    formatMessage
  ]);
  const handleRowClick = (id) => () => {
    trackUsage("willEditEntryFromList");
    push({
      pathname: `${pathname}/${id}`,
      state: { from: pathname },
      search: pluginsQueryParams
    });
  };
  const [clonedEntryId, setClonedEntryId] = React__namespace.useState(null);
  const [prohibitedCloningFields, setProhibitedCloningFields] = React__namespace.useState([]);
  const handleCloneClick = (id) => async () => {
    try {
      const { data: data2 } = await post(
        `/content-manager/collection-types/${contentType.uid}/auto-clone/${id}?${pluginsQueryParams}`
      );
      if ("id" in data2) {
        push({
          pathname: `${pathname}/${data2.id}`,
          state: { from: pathname },
          search: pluginsQueryParams
        });
      }
    } catch (err) {
      if (err instanceof axios.AxiosError) {
        const { prohibitedFields } = err.response?.data.error.details;
        setClonedEntryId(id);
        setProhibitedCloningFields(prohibitedFields);
      }
    }
  };
  const colCount = tableHeaders.length + 2;
  if (!ReviewWorkflowsColumns) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { "aria-busy": isLoading, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.HeaderLayout,
      {
        primaryAction: canCreate ? /* @__PURE__ */ jsxRuntime.jsx(
          CreateButton,
          {
            hasDraftAndPublish,
            params: query.plugins ? pluginsQueryParams : ""
          }
        ) : null,
        subtitle: canRead ? formatMessage(
          {
            id: getTranslation("pages.ListView.header-subtitle"),
            defaultMessage: "{number, plural, =0 {# entries} one {# entry} other {# entries}} found"
          },
          { number: total }
        ) : void 0,
        title: headerLayoutTitle,
        navigationAction: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.Link, { startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.ArrowLeft, {}), to: "/content-manager/", children: formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        }) })
      }
    ),
    !canRead && /* @__PURE__ */ jsxRuntime.jsx(designSystem.ActionLayout, { endActions: /* @__PURE__ */ jsxRuntime.jsx(InjectionZone, { area: "contentManager.listView.actions" }) }),
    canRead && /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.ActionLayout,
      {
        endActions: /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(InjectionZone, { area: "contentManager.listView.actions" }),
          /* @__PURE__ */ jsxRuntime.jsx(ViewSettingsMenu, { slug })
        ] }),
        startActions: /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          isSearchable && /* @__PURE__ */ jsxRuntime.jsx(
            helperPlugin.SearchURLQuery,
            {
              label: formatMessage(
                { id: "app.component.search.label", defaultMessage: "Search for {target}" },
                { target: headerLayoutTitle }
              ),
              placeholder: formatMessage({
                id: "global.search",
                defaultMessage: "Search"
              }),
              trackedEvent: "didSearch"
            }
          ),
          isFilterable && !isLoadingAdminUsers && /* @__PURE__ */ jsxRuntime.jsx(
            Filter,
            {
              displayedFilters: [...displayedAttributeFilters, ...reviewWorkflowFilter].sort(
                (a, b) => formatter.compare(a.metadatas.label, b.metadatas.label)
              )
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.ContentLayout, { children: canRead ? /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 4, direction: "column", alignItems: "stretch", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(helperPlugin.Table.Root, { rows: data, isLoading, colCount, children: [
        /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.Table.ActionBar, { children: /* @__PURE__ */ jsxRuntime.jsx(BulkActionsRenderer, {}) }),
        /* @__PURE__ */ jsxRuntime.jsxs(helperPlugin.Table.Content, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(helperPlugin.Table.Head, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.Table.HeaderCheckboxCell, {}),
            tableHeaders.map(({ fieldSchema, key, name: name2, metadatas: metadatas2 }) => /* @__PURE__ */ jsxRuntime.jsx(
              helperPlugin.Table.HeaderCell,
              {
                name: name2,
                fieldSchemaType: fieldSchema.type,
                relationFieldName: metadatas2.mainField?.name,
                isSortable: metadatas2.sortable,
                label: metadatas2.label
              },
              key
            )),
            /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.Table.HeaderHiddenActionsCell, {})
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.Table.LoadingBody, {}),
          /* @__PURE__ */ jsxRuntime.jsx(
            helperPlugin.Table.EmptyBody,
            {
              contentType: headerLayoutTitle,
              action: canCreate ? /* @__PURE__ */ jsxRuntime.jsx(
                CreateButton,
                {
                  variant: "secondary",
                  hasDraftAndPublish,
                  params: query.plugins ? pluginsQueryParams : ""
                }
              ) : null
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            AutoCloneFailureModal,
            {
              entryId: clonedEntryId,
              onClose: () => setClonedEntryId(null),
              prohibitedFields: prohibitedCloningFields,
              pluginQueryParams: pluginsQueryParams
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Table.Root,
            {
              onConfirmDelete: handleConfirmDeleteData,
              isConfirmDeleteRowOpen,
              setIsConfirmDeleteRowOpen,
              children: data.map((rowData, index) => {
                return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Tr, { cursor: "pointer", onClick: handleRowClick(rowData.id), children: [
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(Table.CheckboxDataCell, { rowId: rowData.id, index }) }),
                  tableHeaders.map(({ key, name: name2, cellFormatter, ...rest }) => {
                    if (hasDraftAndPublish && name2 === "publishedAt") {
                      return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(
                        designSystem.Status,
                        {
                          width: "min-content",
                          showBullet: false,
                          variant: rowData.publishedAt ? "success" : "secondary",
                          size: "S",
                          children: /* @__PURE__ */ jsxRuntime.jsx(
                            designSystem.Typography,
                            {
                              fontWeight: "bold",
                              textColor: `${rowData.publishedAt ? "success" : "secondary"}700`,
                              children: formatMessage({
                                id: getTranslation(
                                  `containers.List.${rowData.publishedAt ? "published" : "draft"}`
                                ),
                                defaultMessage: rowData.publishedAt ? "Published" : "Draft"
                              })
                            }
                          )
                        }
                      ) }, key);
                    }
                    if (hasReviewWorkflows) {
                      if (name2 === "strapi_stage") {
                        return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: rowData.strapi_stage ? /* @__PURE__ */ jsxRuntime.jsx(
                          ReviewWorkflowsColumns.ReviewWorkflowsStageEE,
                          {
                            color: rowData.strapi_stage.color ?? designSystem.lightTheme.colors.primary600,
                            name: rowData.strapi_stage.name
                          }
                        ) : /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral800", children: "-" }) }, key);
                      }
                      if (name2 === "strapi_assignee") {
                        return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: rowData.strapi_assignee ? /* @__PURE__ */ jsxRuntime.jsx(
                          ReviewWorkflowsColumns.ReviewWorkflowsAssigneeEE,
                          {
                            user: rowData.strapi_assignee
                          }
                        ) : /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral800", children: "-" }) }, key);
                      }
                    }
                    if (["createdBy", "updatedBy"].includes(name2.split(".")[0])) {
                      return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral800", children: rowData[name2.split(".")[0]] ? getDisplayName(rowData[name2.split(".")[0]], formatMessage) : "-" }) }, key);
                    }
                    if (typeof cellFormatter === "function") {
                      return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: cellFormatter(rowData, { key, name: name2, ...rest }) }, key);
                    }
                    return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(
                      CellContent,
                      {
                        content: rowData[name2.split(".")[0]],
                        name: name2,
                        contentType: layout.contentType,
                        rowId: rowData.id,
                        ...rest
                      }
                    ) }, key);
                  }),
                  (canDelete || canPublish) && isBulkable && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(
                    Table.EntityActionsDataCell,
                    {
                      rowId: rowData.id,
                      index,
                      setIsConfirmDeleteRowOpen,
                      canCreate,
                      canDelete,
                      handleCloneClick
                    }
                  ) })
                ] }, rowData.id);
              })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { alignItems: "flex-end", justifyContent: "space-between", children: [
        /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.PageSizeURLQuery, { trackedEvent: "willChangeNumberOfEntriesPerPage" }),
        /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.PaginationURLQuery, { pagination: { pageCount: pagination?.pageCount || 1 } })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.NoPermissions, {}) })
  ] });
};
const CreateButton = ({ hasDraftAndPublish = false, params = "", variant }) => {
  const { formatMessage } = reactIntl.useIntl();
  const { trackUsage } = helperPlugin.useTracking();
  const { pathname } = reactRouterDom.useLocation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.Button,
    {
      variant,
      forwardedAs: reactRouterDom.Link,
      onClick: () => {
        const trackerProperty = hasDraftAndPublish ? { status: "draft" } : {};
        trackUsage("willCreateEntry", trackerProperty);
      },
      startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Plus, {}),
      style: { textDecoration: "none" },
      to: {
        pathname: `${pathname}/create`,
        search: params
      },
      children: formatMessage({
        id: getTranslation("HeaderLayout.button.label-add-entry"),
        defaultMessage: "Create new entry"
      })
    }
  );
};
const ProtectedListViewPage = ({ permissions: permissions2, ...restProps }) => {
  const viewPermissions = React__namespace.useMemo(
    () => generatePermissionsObject(restProps.slug),
    [restProps.slug]
  );
  const { isLoading, allowedActions } = helperPlugin.useRBAC(viewPermissions, permissions2 ?? []);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsx(ListViewPage, { ...restProps, ...allowedActions });
};
const ListViewLayoutManager = ({ layout, ...props }) => {
  const dispatch = useTypedDispatch();
  const { replace } = reactRouterDom.useHistory();
  const [{ query, rawQuery }] = helperPlugin.useQueryParams();
  const { permissions: permissions2, isValid: isValidPermissions } = useSyncRbac(query, props.slug, "listView");
  const redirectionLink = useFindRedirectionLink(props.slug);
  React__namespace.useEffect(() => {
    if (!rawQuery) {
      replace(redirectionLink);
    }
  }, [rawQuery, replace, redirectionLink]);
  React__namespace.useEffect(() => {
    dispatch(setLayout(layout));
  }, [dispatch, layout]);
  React__namespace.useEffect(() => {
    return () => {
      dispatch(resetProps());
    };
  }, [dispatch]);
  if (!isValidPermissions) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(ProtectedListViewPage, { ...props, layout, permissions: permissions2 });
};
const GET_DATA = "ContentManager/ListView/GET_DATA";
const GET_DATA_SUCCEEDED = "ContentManager/ListView/GET_DATA_SUCCEEDED";
const RESET_PROPS = "ContentManager/ListView/RESET_PROPS";
const ON_CHANGE_LIST_HEADERS = "ContentManager/ListView/ON_CHANGE_LIST_HEADERS ";
const ON_RESET_LIST_HEADERS = "ContentManager/ListView/ON_RESET_LIST_HEADERS ";
const SET_LIST_LAYOUT = "ContentManager/ListView/SET_LIST_LAYOUT ";
const initialState$2 = {
  data: [],
  isLoading: true,
  components: {},
  contentType: null,
  initialDisplayedHeaders: [],
  displayedHeaders: [],
  pagination: {
    page: 0,
    pageCount: 0,
    pageSize: 0,
    total: 0
  }
};
const getData = () => ({ type: GET_DATA });
const getDataSucceeded = (pagination, data) => ({
  type: GET_DATA_SUCCEEDED,
  pagination,
  data
});
const onResetListHeaders = () => ({ type: ON_RESET_LIST_HEADERS });
function resetProps() {
  return { type: RESET_PROPS };
}
const setLayout = ({
  components,
  contentType
}) => ({
  contentType,
  components,
  displayedHeaders: contentType.layouts.list,
  type: SET_LIST_LAYOUT
});
const onChangeListHeaders = (target) => ({ type: ON_CHANGE_LIST_HEADERS, target });
const reducer$2 = (state = initialState$2, action) => produce__default.default(state, (draftState) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...initialState$2,
        contentType: state.contentType,
        components: state.components,
        initialDisplayedHeaders: state.initialDisplayedHeaders,
        displayedHeaders: state.displayedHeaders
      };
    }
    case GET_DATA_SUCCEEDED: {
      draftState.pagination = action.pagination;
      draftState.data = action.data;
      draftState.isLoading = false;
      break;
    }
    case ON_CHANGE_LIST_HEADERS: {
      const {
        target: { name: name2, value }
      } = action;
      if (!value && state.contentType) {
        const { metadatas, attributes, uid } = state.contentType;
        const metas = metadatas[name2].list;
        const header = {
          name: name2,
          fieldSchema: attributes[name2],
          metadatas: metas,
          key: `__${name2}_key__`
        };
        const attribute = attributes[name2];
        switch (attribute.type) {
          case "component": {
            const componentName = attribute.component;
            const mainFieldName = state.components[componentName]?.settings.mainField ?? null;
            const mainFieldAttribute = state.components[componentName]?.attributes[mainFieldName];
            draftState.displayedHeaders.push({
              ...header,
              metadatas: {
                ...metas,
                mainField: {
                  ...mainFieldAttribute,
                  name: mainFieldName
                }
              }
            });
            break;
          }
          case "relation":
            draftState.displayedHeaders.push({
              ...header,
              // @ts-expect-error – i don't think we need this anymore...
              queryInfos: {
                defaultParams: {},
                endPoint: `collection-types/${uid}`
              }
            });
            break;
          default:
            draftState.displayedHeaders.push(header);
        }
      } else {
        const headerIndexToRemove = state.displayedHeaders.findIndex(
          (head) => head.name === name2
        );
        draftState.displayedHeaders.splice(headerIndexToRemove, 1);
      }
      break;
    }
    case ON_RESET_LIST_HEADERS: {
      draftState.displayedHeaders = state.initialDisplayedHeaders;
      break;
    }
    case RESET_PROPS: {
      return initialState$2;
    }
    case SET_LIST_LAYOUT: {
      const { contentType, components, displayedHeaders } = action;
      draftState.contentType = contentType;
      draftState.components = components;
      draftState.displayedHeaders = displayedHeaders;
      draftState.initialDisplayedHeaders = displayedHeaders;
      break;
    }
    default:
      return draftState;
  }
});
const CollectionTypePages = (props) => {
  const {
    match: {
      params: { collectionType, slug },
      path
    }
  } = props;
  const permissions2 = useTypedSelector((state) => state.admin_app.permissions);
  const { isLoading, layout, updateLayout } = useContentTypeLayout$1(slug);
  const { rawContentTypeLayout, rawComponentsLayouts } = React__namespace.useMemo(() => {
    let rawContentTypeLayout2 = null;
    let rawComponentsLayouts2 = null;
    if (layout?.contentType) {
      rawContentTypeLayout2 = formatLayoutForSettingsView(layout.contentType);
    }
    if (layout?.components) {
      rawComponentsLayouts2 = Object.keys(layout.components).reduce((acc, current) => {
        acc[current] = formatLayoutForSettingsView(layout.components[current]);
        return acc;
      }, {});
    }
    return { rawContentTypeLayout: rawContentTypeLayout2, rawComponentsLayouts: rawComponentsLayouts2 };
  }, [layout]);
  if (collectionType !== "collection-types" && collectionType !== "single-types") {
    return /* @__PURE__ */ jsxRuntime.jsx(NotFoundPage, {});
  }
  if (isLoading || !layout) {
    return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {});
  }
  const currentPath = path;
  return /* @__PURE__ */ jsxRuntime.jsxs(reactRouterDom.Switch, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      reactRouterDom.Route,
      {
        path: currentPath,
        exact: true,
        render: (props2) => collectionType === "collection-types" ? /* @__PURE__ */ jsxRuntime.jsx(ListViewLayoutManager, { slug, layout }) : /* @__PURE__ */ jsxRuntime.jsx(EditViewLayoutManager, { layout, ...props2 })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { exact: true, path: `${currentPath}/configurations/edit`, children: /* @__PURE__ */ jsxRuntime.jsx(
      helperPlugin.CheckPagePermissions,
      {
        permissions: permissions2.contentManager?.collectionTypesConfigurations,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          EditSettingsView,
          {
            components: rawComponentsLayouts,
            isContentTypeView: true,
            mainLayout: rawContentTypeLayout,
            slug,
            updateLayout
          }
        )
      }
    ) }),
    collectionType === "collection-types" ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: `${currentPath}/configurations/list`, children: /* @__PURE__ */ jsxRuntime.jsx(
        helperPlugin.CheckPagePermissions,
        {
          permissions: permissions2.contentManager?.collectionTypesConfigurations,
          children: /* @__PURE__ */ jsxRuntime.jsx(
            ListSettingsView,
            {
              layout: rawContentTypeLayout,
              slug,
              updateLayout
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        reactRouterDom.Route,
        {
          path: `${currentPath}/create/clone/:origin`,
          exact: true,
          render: (props2) => /* @__PURE__ */ jsxRuntime.jsx(EditViewLayoutManager, { layout, ...props2 })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        reactRouterDom.Route,
        {
          path: [`${currentPath}/create`, `${currentPath}/:id`],
          exact: true,
          render: (props2) => /* @__PURE__ */ jsxRuntime.jsx(EditViewLayoutManager, { layout, ...props2 })
        }
      )
    ] }) : null
  ] });
};
const initialState$1 = {
  componentsDataStructure: {},
  contentTypeDataStructure: {},
  isLoading: true,
  data: null,
  status: "resolved",
  setModifiedDataOnly: false
};
const reducer$1 = (state = initialState$1, action) => produce__default.default(state, (draftState) => {
  switch (action.type) {
    case GET_DATA$1: {
      draftState.isLoading = true;
      draftState.data = null;
      break;
    }
    case GET_DATA_SUCCEEDED$1: {
      draftState.isLoading = false;
      draftState.data = action.data;
      draftState.setModifiedDataOnly = action.setModifiedDataOnly ?? false;
      break;
    }
    case INIT_FORM: {
      if (action.data) {
        draftState.isLoading = false;
        draftState.data = action.data;
        break;
      }
      draftState.isLoading = false;
      draftState.data = state.contentTypeDataStructure;
      break;
    }
    case RESET_PROPS$2: {
      return initialState$1;
    }
    case SET_DATA_STRUCTURES: {
      draftState.componentsDataStructure = action.componentsDataStructure;
      draftState.contentTypeDataStructure = action.contentTypeDataStructure;
      break;
    }
    case SET_STATUS: {
      draftState.status = action.status;
      break;
    }
    case SUBMIT_SUCCEEDED: {
      draftState.data = action.data;
      break;
    }
    case CLEAR_SET_MODIFIED_DATA_ONLY: {
      draftState.setModifiedDataOnly = false;
      break;
    }
    default:
      return draftState;
  }
});
const ComponentSettingsView = () => {
  const [{ isLoading, data: layout }, dispatch] = React__namespace.useReducer(reducer$1, initialState$1);
  const schemas = useTypedSelector(selectSchemas);
  const permissions2 = useTypedSelector((state) => state.admin_app.permissions);
  const { uid } = reactRouterDom.useParams();
  const { get: get2 } = helperPlugin.useFetchClient();
  React__namespace.useEffect(() => {
    const CancelToken = axios__default.default.CancelToken;
    const source = CancelToken.source();
    const fetchData = async (source2) => {
      try {
        dispatch(getData$1());
        const {
          data: { data }
        } = await get2(`/content-manager/components/${uid}/configuration`, {
          cancelToken: source2.token
        });
        dispatch(getDataSucceeded$1(mergeMetasWithSchema(data, schemas, "component")));
      } catch (err) {
        if (axios__default.default.isCancel(err)) {
          return;
        }
        console.error(err);
      }
    };
    fetchData(source);
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [uid, schemas, get2]);
  if (isLoading || !layout) {
    return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.CheckPagePermissions, { permissions: permissions2.contentManager?.componentsConfigurations, children: /* @__PURE__ */ jsxRuntime.jsx(EditSettingsView, { components: layout.components, mainLayout: layout.component, slug: uid }) });
};
const NoContentType = () => {
  const { formatMessage } = reactIntl.useIntl();
  helperPlugin.useFocusWhenNavigate();
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.HeaderLayout,
      {
        title: formatMessage({
          id: getTranslation("header.name"),
          defaultMessage: "Content"
        })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.ContentLayout, { children: /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.EmptyStateLayout,
      {
        action: /* @__PURE__ */ jsxRuntime.jsx(
          v2.LinkButton,
          {
            as: reactRouterDom.NavLink,
            variant: "secondary",
            startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Plus, {}),
            to: "/plugins/content-type-builder/content-types/create-content-type",
            children: formatMessage({
              id: "app.components.HomePage.create",
              defaultMessage: "Create your first Content-type"
            })
          }
        ),
        content: formatMessage({
          id: "content-manager.pages.NoContentType.text",
          defaultMessage: "You don't have any content yet, we recommend you to create your first Content-Type."
        }),
        hasRadius: true,
        icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.EmptyDocuments, { width: "10rem" }),
        shadow: "tableShadow"
      }
    ) })
  ] });
};
const NoPermissions = () => {
  const { formatMessage } = reactIntl.useIntl();
  helperPlugin.useFocusWhenNavigate();
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.HeaderLayout,
      {
        title: formatMessage({
          id: getTranslation("header.name"),
          defaultMessage: "Content"
        })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.ContentLayout, { children: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.NoPermissions, {}) })
  ] });
};
const App = () => {
  const contentTypeMatch = reactRouterDom.useRouteMatch(`/content-manager/:kind/:uid`);
  const { status, collectionTypeLinks, singleTypeLinks, models, refetchData } = useContentManagerInitData();
  const authorisedModels = [...collectionTypeLinks, ...singleTypeLinks].sort(
    (a, b) => a.title.localeCompare(b.title)
  );
  const { pathname } = reactRouterDom.useLocation();
  const { formatMessage } = reactIntl.useIntl();
  const { startSection } = helperPlugin.useGuidedTour();
  const startSectionRef = React__namespace.useRef(startSection);
  const permissions2 = useTypedSelector((state) => state.admin_app.permissions);
  React__namespace.useEffect(() => {
    if (startSectionRef.current) {
      startSectionRef.current("contentManager");
    }
  }, []);
  if (status === "loading") {
    return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { "aria-busy": "true", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        reactHelmet.Helmet,
        {
          title: formatMessage({
            id: getTranslation("plugin.name"),
            defaultMessage: "Content Manager"
          })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.HeaderLayout,
        {
          title: formatMessage({
            id: getTranslation("header.name"),
            defaultMessage: "Content"
          })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {})
    ] });
  }
  const supportedModelsToDisplay = models.filter(({ isDisplayed }) => isDisplayed);
  if (authorisedModels.length === 0 && supportedModelsToDisplay.length > 0 && pathname !== "/content-manager/403") {
    return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to: "/content-manager/403" });
  }
  if (supportedModelsToDisplay.length === 0 && pathname !== "/content-manager/no-content-types") {
    return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to: "/content-manager/no-content-types" });
  }
  if (!contentTypeMatch && authorisedModels.length > 0) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      reactRouterDom.Redirect,
      {
        to: {
          pathname: authorisedModels[0].to,
          search: authorisedModels[0].search ?? ""
        }
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      reactHelmet.Helmet,
      {
        title: formatMessage({
          id: getTranslation("plugin.name"),
          defaultMessage: "Content Manager"
        })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Layout, { sideNav: /* @__PURE__ */ jsxRuntime.jsx(LeftMenu, {}), children: [
      /* @__PURE__ */ jsxRuntime.jsx(DragLayer, { renderItem: renderDraglayerItem }),
      /* @__PURE__ */ jsxRuntime.jsx(ModelsContext.Provider, { value: { refetchData }, children: /* @__PURE__ */ jsxRuntime.jsxs(reactRouterDom.Switch, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: "/content-manager/components/:uid/configurations/edit", children: /* @__PURE__ */ jsxRuntime.jsx(
          helperPlugin.CheckPagePermissions,
          {
            permissions: permissions2.contentManager?.componentsConfigurations,
            children: /* @__PURE__ */ jsxRuntime.jsx(ComponentSettingsView, {})
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          reactRouterDom.Redirect,
          {
            from: "/content-manager/collectionType/:slug",
            to: "/content-manager/collection-types/:slug"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          reactRouterDom.Redirect,
          {
            from: "/content-manager/singleType/:slug",
            to: "/content-manager/single-types/:slug"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: "/content-manager/:collectionType/:slug", component: CollectionTypePages }),
        /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: "/content-manager/403", children: /* @__PURE__ */ jsxRuntime.jsx(NoPermissions, {}) }),
        /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: "/content-manager/no-content-types", children: /* @__PURE__ */ jsxRuntime.jsx(NoContentType, {}) }),
        /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: "", component: helperPlugin.AnErrorOccurred })
      ] }) })
    ] })
  ] });
};
function renderDraglayerItem({ type, item }) {
  if (!type || type && typeof type !== "string") {
    return null;
  }
  const [actualType] = type.split("_");
  switch (actualType) {
    case ItemTypes.EDIT_FIELD:
    case ItemTypes.FIELD:
      return /* @__PURE__ */ jsxRuntime.jsx(CardDragPreview, { labelField: item.labelField });
    case ItemTypes.COMPONENT:
    case ItemTypes.DYNAMIC_ZONE:
      return /* @__PURE__ */ jsxRuntime.jsx(ComponentDragPreview, { displayedValue: item.displayedValue });
    case ItemTypes.RELATION:
      return /* @__PURE__ */ jsxRuntime.jsx(
        RelationDragPreview,
        {
          displayedValue: item.displayedValue,
          status: item.status,
          width: item.width
        }
      );
    default:
      return null;
  }
}
const GET_INIT_DATA = "ContentManager/App/GET_INIT_DATA";
const RESET_INIT_DATA = "ContentManager/App/RESET_INIT_DATA";
const SET_INIT_DATA = "ContentManager/App/SET_INIT_DATA";
const initialState = {
  collectionTypeLinks: [],
  components: [],
  fieldSizes: {},
  models: [],
  singleTypeLinks: [],
  status: "loading"
};
const selectSchemas = toolkit.createSelector(
  (state) => state["content-manager_app"],
  ({ components, models }) => {
    return [...components, ...models];
  }
);
const reducer = (state = initialState, action) => produce__default.default(state, (draftState) => {
  switch (action.type) {
    case GET_INIT_DATA: {
      draftState.status = "loading";
      break;
    }
    case RESET_INIT_DATA: {
      return initialState;
    }
    case SET_INIT_DATA: {
      draftState.collectionTypeLinks = action.data.authorizedCollectionTypeLinks.filter(
        ({ isDisplayed }) => isDisplayed
      );
      draftState.singleTypeLinks = action.data.authorizedSingleTypeLinks.filter(
        ({ isDisplayed }) => isDisplayed
      );
      draftState.components = action.data.components;
      draftState.models = action.data.contentTypeSchemas;
      draftState.fieldSizes = action.data.fieldSizes;
      draftState.status = "resolved";
      break;
    }
    default:
      return draftState;
  }
});
const App$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  App,
  reducer,
  selectSchemas
}, Symbol.toStringTag, { value: "Module" }));
const staticReducers = {
  [adminApi.reducerPath]: adminApi.reducer,
  admin_app: reducer$9,
  rbacProvider: RBACReducer,
  "content-manager_app": reducer,
  "content-manager_listView": reducer$2,
  "content-manager_rbacManager": reducer$7,
  "content-manager_editViewLayoutManager": reducer$4,
  "content-manager_editViewCrudReducer": reducer$1
};
const injectReducerStoreEnhancer = (appReducers) => (next) => (...args) => {
  const store = next(...args);
  const asyncReducers = {};
  return {
    ...store,
    asyncReducers,
    injectReducer: (key, asyncReducer) => {
      asyncReducers[key] = asyncReducer;
      store.replaceReducer(
        // @ts-expect-error we dynamically add reducers which makes the types uncomfortable.
        toolkit.combineReducers({
          ...appReducers,
          ...asyncReducers
        })
      );
    }
  };
};
const configureStoreImpl = (preloadedState = {}, appMiddlewares = [], injectedReducers = {}) => {
  const coreReducers = { ...staticReducers, ...injectedReducers };
  const defaultMiddlewareOptions = {};
  if (process.env.NODE_ENV === "test") {
    defaultMiddlewareOptions.serializableCheck = false;
    defaultMiddlewareOptions.immutableCheck = false;
  }
  const store = toolkit.configureStore({
    preloadedState: {
      admin_app: preloadedState.admin_app
    },
    reducer: coreReducers,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(defaultMiddlewareOptions),
      adminApi.middleware,
      ...appMiddlewares.map((m) => m())
    ],
    enhancers: [injectReducerStoreEnhancer(coreReducers)]
  });
  return store;
};
const getBasename = () => (process.env.ADMIN_PATH ?? "").replace(window.location.origin, "");
const createHook = () => {
  const _handlers = [];
  return {
    register(fn) {
      _handlers.push(fn);
    },
    delete(handler) {
      _handlers.splice(_handlers.indexOf(handler), 1);
    },
    runWaterfall(args, store) {
      return _handlers.reduce((acc, fn) => fn(acc, store), args);
    },
    async runWaterfallAsync(args, store) {
      let result = args;
      for (const fn of _handlers) {
        result = await fn(result, store);
      }
      return result;
    },
    runSeries(...args) {
      return _handlers.map((fn) => fn(...args));
    },
    async runSeriesAsync(...args) {
      const result = [];
      for (const fn of _handlers) {
        result.push(await fn(...args));
      }
      return result;
    },
    runParallel(...args) {
      return Promise.all(
        _handlers.map((fn) => {
          return fn(...args);
        })
      );
    }
  };
};
const languageNativeNames = {
  ar: "العربية",
  ca: "Català",
  cs: "Čeština",
  de: "Deutsch",
  dk: "Dansk",
  en: "English",
  es: "Español",
  eu: "Euskara",
  fr: "Français",
  gu: "Gujarati",
  he: "עברית",
  hu: "Magyar",
  id: "Indonesian",
  it: "Italiano",
  ja: "日本語",
  ko: "한국어",
  ml: "Malayalam",
  ms: "Melayu",
  nl: "Nederlands",
  no: "Norwegian",
  pl: "Polski",
  "pt-BR": "Português (Brasil)",
  pt: "Português (Portugal)",
  ru: "Русский",
  sk: "Slovenčina",
  sv: "Swedish",
  th: "ไทย",
  tr: "Türkçe",
  uk: "Українська",
  vi: "Tiếng Việt",
  "zh-Hans": "中文 (简体)",
  zh: "中文 (繁體)",
  sa: "संस्कृत",
  hi: "हिन्दी"
};
const {
  INJECT_COLUMN_IN_TABLE,
  MUTATE_COLLECTION_TYPES_LINKS,
  MUTATE_EDIT_VIEW_LAYOUT,
  MUTATE_SINGLE_TYPES_LINKS
} = HOOKS;
class StrapiApp {
  admin;
  appPlugins;
  configurations;
  customBootstrapConfiguration;
  customConfigurations;
  customFields;
  hooksDict;
  library;
  menu;
  middlewares;
  plugins;
  reducers;
  settings;
  translations;
  /**
   * APIs
   */
  contentManager = new ContentManagerPlugin();
  constructor({ adminConfig, appPlugins } = {}) {
    this.customConfigurations = adminConfig?.config ?? {};
    this.customBootstrapConfiguration = adminConfig?.bootstrap;
    this.configurations = {
      authLogo: StrapiLogo,
      head: { favicon: "" },
      locales: ["en"],
      menuLogo: StrapiLogo,
      notifications: { releases: true },
      themes: { light: designSystem.lightTheme, dark: designSystem.darkTheme },
      translations: {},
      tutorials: true
    };
    this.appPlugins = appPlugins || {};
    this.library = {
      components: new Components(),
      fields: new Fields()
    };
    this.middlewares = new Middlewares();
    this.plugins = {};
    this.reducers = new Reducers();
    this.translations = {};
    this.hooksDict = {};
    this.admin = {
      injectionZones: INJECTION_ZONES
    };
    this.customFields = new CustomFields();
    this.menu = [];
    this.settings = {
      global: {
        id: "global",
        intlLabel: {
          id: "Settings.global",
          defaultMessage: "Global Settings"
        },
        links: []
      }
    };
    this.registerPlugin(this.contentManager.config);
  }
  addComponents = (components) => {
    if (Array.isArray(components)) {
      components.map((compo) => this.library.components.add(compo));
    } else {
      this.library.components.add(components);
    }
  };
  addCorePluginMenuLink = (link) => {
    const stringifiedLink = JSON.stringify(link);
    invariant__default.default(link.to, `link.to should be defined for ${stringifiedLink}`);
    invariant__default.default(
      typeof link.to === "string",
      `Expected link.to to be a string instead received ${typeof link.to}`
    );
    invariant__default.default(
      ["/plugins/content-type-builder", "/plugins/upload"].includes(link.to),
      "This method is not available for your plugin"
    );
    invariant__default.default(
      link.intlLabel?.id && link.intlLabel?.defaultMessage,
      `link.intlLabel.id & link.intlLabel.defaultMessage for ${stringifiedLink}`
    );
    this.menu.push(link);
  };
  addFields = (fields) => {
    if (Array.isArray(fields)) {
      fields.map((field) => this.library.fields.add(field));
    } else {
      this.library.fields.add(fields);
    }
  };
  addMenuLink = (link) => {
    const stringifiedLink = JSON.stringify(link);
    invariant__default.default(link.to, `link.to should be defined for ${stringifiedLink}`);
    invariant__default.default(
      typeof link.to === "string",
      `Expected link.to to be a string instead received ${typeof link.to}`
    );
    invariant__default.default(
      link.intlLabel?.id && link.intlLabel?.defaultMessage,
      `link.intlLabel.id & link.intlLabel.defaultMessage for ${stringifiedLink}`
    );
    invariant__default.default(
      link.Component && typeof link.Component === "function",
      `link.Component should be a valid React Component`
    );
    invariant__default.default(
      link.icon && typeof link.icon === "function",
      `link.Icon should be a valid React Component`
    );
    this.menu.push(link);
  };
  addMiddlewares = (middlewares) => {
    middlewares.forEach((middleware) => {
      this.middlewares.add(middleware);
    });
  };
  addReducers = (reducers) => {
    Object.keys(reducers).forEach((reducerName) => {
      this.reducers.add(reducerName, reducers[reducerName]);
    });
  };
  addSettingsLink = (sectionId, link) => {
    invariant__default.default(this.settings[sectionId], "The section does not exist");
    const stringifiedLink = JSON.stringify(link);
    invariant__default.default(link.id, `link.id should be defined for ${stringifiedLink}`);
    invariant__default.default(
      link.intlLabel?.id && link.intlLabel?.defaultMessage,
      `link.intlLabel.id & link.intlLabel.defaultMessage for ${stringifiedLink}`
    );
    invariant__default.default(link.to, `link.to should be defined for ${stringifiedLink}`);
    invariant__default.default(
      link.Component && typeof link.Component === "function",
      `link.Component should be a valid React Component`
    );
    this.settings[sectionId].links.push(link);
  };
  addSettingsLinks = (sectionId, links) => {
    invariant__default.default(this.settings[sectionId], "The section does not exist");
    invariant__default.default(Array.isArray(links), "TypeError expected links to be an array");
    links.forEach((link) => {
      this.addSettingsLink(sectionId, link);
    });
  };
  async bootstrap() {
    Object.keys(this.appPlugins).forEach((plugin) => {
      const bootstrap = this.appPlugins[plugin].bootstrap;
      if (bootstrap) {
        bootstrap({
          addSettingsLink: this.addSettingsLink,
          addSettingsLinks: this.addSettingsLinks,
          getPlugin: this.getPlugin,
          injectContentManagerComponent: this.injectContentManagerComponent,
          injectAdminComponent: this.injectAdminComponent,
          registerHook: this.registerHook
        });
      }
    });
    if (isFunction__default.default(this.customBootstrapConfiguration)) {
      this.customBootstrapConfiguration({
        addComponents: this.addComponents,
        addFields: this.addFields,
        addMenuLink: this.addMenuLink,
        addReducers: this.addReducers,
        addSettingsLink: this.addSettingsLink,
        addSettingsLinks: this.addSettingsLinks,
        getPlugin: this.getPlugin,
        injectContentManagerComponent: this.injectContentManagerComponent,
        injectAdminComponent: this.injectAdminComponent,
        registerHook: this.registerHook
      });
    }
  }
  bootstrapAdmin = async () => {
    await this.createCustomConfigurations();
    this.createHook(INJECT_COLUMN_IN_TABLE);
    this.createHook(MUTATE_COLLECTION_TYPES_LINKS);
    this.createHook(MUTATE_SINGLE_TYPES_LINKS);
    this.createHook(MUTATE_EDIT_VIEW_LAYOUT);
    return Promise.resolve();
  };
  createCustomConfigurations = async () => {
    if (this.customConfigurations?.locales) {
      this.configurations.locales = [
        "en",
        ...this.customConfigurations.locales?.filter((loc) => loc !== "en") || []
      ];
    }
    if (this.customConfigurations?.auth?.logo) {
      this.configurations.authLogo = this.customConfigurations.auth.logo;
    }
    if (this.customConfigurations?.menu?.logo) {
      this.configurations.menuLogo = this.customConfigurations.menu.logo;
    }
    if (this.customConfigurations?.head?.favicon) {
      this.configurations.head.favicon = this.customConfigurations.head.favicon;
    }
    if (this.customConfigurations?.theme) {
      const darkTheme2 = this.customConfigurations.theme.dark;
      const lightTheme2 = this.customConfigurations.theme.light;
      if (!darkTheme2 && !lightTheme2) {
        console.warn(
          `[deprecated] In future versions, Strapi will stop supporting this theme customization syntax. The theme configuration accepts a light and a dark key to customize each theme separately. See https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#theme-extension.`
        );
        merge__default.default(this.configurations.themes.light, this.customConfigurations.theme);
      }
      if (lightTheme2)
        merge__default.default(this.configurations.themes.light, lightTheme2);
      if (darkTheme2)
        merge__default.default(this.configurations.themes.dark, darkTheme2);
    }
    if (this.customConfigurations?.notifications?.releases !== void 0) {
      this.configurations.notifications.releases = this.customConfigurations.notifications.releases;
    }
    if (this.customConfigurations?.tutorials !== void 0) {
      this.configurations.tutorials = this.customConfigurations.tutorials;
    }
  };
  createHook = (name2) => {
    this.hooksDict[name2] = createHook();
  };
  createSettingSection = (section, links) => {
    invariant__default.default(section.id, "section.id should be defined");
    invariant__default.default(
      section.intlLabel?.id && section.intlLabel?.defaultMessage,
      "section.intlLabel should be defined"
    );
    invariant__default.default(Array.isArray(links), "TypeError expected links to be an array");
    invariant__default.default(this.settings[section.id] === void 0, "A similar section already exists");
    this.settings[section.id] = { ...section, links: [] };
    links.forEach((link) => {
      this.addSettingsLink(section.id, link);
    });
  };
  createStore = (preloadedState) => {
    const store = configureStoreImpl(
      preloadedState,
      this.middlewares.middlewares,
      this.reducers.reducers
    );
    return store;
  };
  getAdminInjectedComponents = (moduleName, containerName, blockName) => {
    try {
      return this.admin.injectionZones[moduleName][containerName][blockName] || [];
    } catch (err) {
      console.error("Cannot get injected component", err);
      return [];
    }
  };
  getPlugin = (pluginId) => {
    return this.plugins[pluginId];
  };
  async initialize() {
    Object.keys(this.appPlugins).forEach((plugin) => {
      this.appPlugins[plugin].register(this);
    });
  }
  injectContentManagerComponent = (containerName, blockName, component) => {
    invariant__default.default(
      this.admin.injectionZones.contentManager[containerName]?.[blockName],
      `The ${containerName} ${String(blockName)} zone is not defined in the content manager`
    );
    invariant__default.default(component, "A Component must be provided");
    this.admin.injectionZones.contentManager[containerName][blockName].push(component);
  };
  injectAdminComponent = (containerName, blockName, component) => {
    invariant__default.default(
      this.admin.injectionZones.admin[containerName]?.[blockName],
      `The ${containerName} ${String(blockName)} zone is not defined in the admin`
    );
    invariant__default.default(component, "A Component must be provided");
    this.admin.injectionZones.admin[containerName][blockName].push(component);
  };
  /**
   * Load the admin translations
   * @returns {Object} The imported admin translations
   */
  async loadAdminTrads() {
    const arrayOfPromises = this.configurations.locales.map((locale) => {
      return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/ar.json": () => Promise.resolve().then(() => require("./ar-qfb99PVh.js")), "./translations/ca.json": () => Promise.resolve().then(() => require("./ca-bQs9dsIc.js")), "./translations/cs.json": () => Promise.resolve().then(() => require("./cs-XYXIcfVY.js")), "./translations/de.json": () => Promise.resolve().then(() => require("./de-elBeWdG2.js")), "./translations/dk.json": () => Promise.resolve().then(() => require("./dk-qvFj0oFG.js")), "./translations/en.json": () => Promise.resolve().then(() => require("./en-UdTZS0x5.js")), "./translations/es.json": () => Promise.resolve().then(() => require("./es-hBQ_pL0X.js")), "./translations/eu.json": () => Promise.resolve().then(() => require("./eu-VH6nNPXY.js")), "./translations/fr.json": () => Promise.resolve().then(() => require("./fr-RVVsyT5B.js")), "./translations/gu.json": () => Promise.resolve().then(() => require("./gu-76mTVAc2.js")), "./translations/he.json": () => Promise.resolve().then(() => require("./he-RmtdSWtw.js")), "./translations/hi.json": () => Promise.resolve().then(() => require("./hi-zD7tX6HS.js")), "./translations/hu.json": () => Promise.resolve().then(() => require("./hu-0pmvoLj1.js")), "./translations/id.json": () => Promise.resolve().then(() => require("./id-yQtHASS7.js")), "./translations/it.json": () => Promise.resolve().then(() => require("./it-RPJqQqp3.js")), "./translations/ja.json": () => Promise.resolve().then(() => require("./ja-5uFhM-kW.js")), "./translations/ko.json": () => Promise.resolve().then(() => require("./ko-JyirX0Lo.js")), "./translations/ml.json": () => Promise.resolve().then(() => require("./ml-QqpcKQgB.js")), "./translations/ms.json": () => Promise.resolve().then(() => require("./ms-wbSWdQJ0.js")), "./translations/nl.json": () => Promise.resolve().then(() => require("./nl-Foqdtl_-.js")), "./translations/no.json": () => Promise.resolve().then(() => require("./no-l_d9yAQN.js")), "./translations/pl.json": () => Promise.resolve().then(() => require("./pl-01EnRFRc.js")), "./translations/pt-BR.json": () => Promise.resolve().then(() => require("./pt-BR-F3FsQI-D.js")), "./translations/pt.json": () => Promise.resolve().then(() => require("./pt-Mve7WzqZ.js")), "./translations/ru.json": () => Promise.resolve().then(() => require("./ru-flezEXdc.js")), "./translations/sa.json": () => Promise.resolve().then(() => require("./sa-gjKCAmHv.js")), "./translations/sk.json": () => Promise.resolve().then(() => require("./sk-xA9DPcmq.js")), "./translations/sv.json": () => Promise.resolve().then(() => require("./sv-be1suA3a.js")), "./translations/th.json": () => Promise.resolve().then(() => require("./th-7ExcBOpr.js")), "./translations/tr.json": () => Promise.resolve().then(() => require("./tr-u4e0KNRe.js")), "./translations/uk.json": () => Promise.resolve().then(() => require("./uk-5Ikxxci1.js")), "./translations/vi.json": () => Promise.resolve().then(() => require("./vi-SYqVl8vH.js")), "./translations/zh-Hans.json": () => Promise.resolve().then(() => require("./zh-Hans-SHNzD0Zk.js")), "./translations/zh.json": () => Promise.resolve().then(() => require("./zh-9728QXZm.js")) }), `./translations/${locale}.json`).then(({ default: data }) => {
        return { data, locale };
      }).catch(() => {
        return { data: null, locale };
      });
    });
    const adminLocales = await Promise.all(arrayOfPromises);
    const translations = adminLocales.reduce(
      (acc, current) => {
        if (current.data) {
          acc[current.locale] = current.data;
        }
        return acc;
      },
      {}
    );
    return translations;
  }
  /**
   * Load the application's translations and merged the custom translations
   * with the default ones.
   *
   */
  async loadTrads() {
    const adminTranslations = await this.loadAdminTrads();
    const arrayOfPromises = Object.keys(this.appPlugins).map((plugin) => {
      const registerTrads = this.appPlugins[plugin].registerTrads;
      if (registerTrads) {
        return registerTrads({ locales: this.configurations.locales });
      }
      return null;
    }).filter((a) => a);
    const pluginsTrads = await Promise.all(arrayOfPromises);
    const mergedTrads = pluginsTrads.reduce(
      (acc, currentPluginTrads) => {
        const pluginTrads = currentPluginTrads.reduce(
          (acc1, current) => {
            acc1[current.locale] = current.data;
            return acc1;
          },
          {}
        );
        Object.keys(pluginTrads).forEach((locale) => {
          acc[locale] = { ...acc[locale], ...pluginTrads[locale] };
        });
        return acc;
      },
      {}
    );
    const translations = this.configurations.locales.reduce((acc, current) => {
      acc[current] = {
        ...adminTranslations[current],
        ...mergedTrads[current] || {},
        ...this.customConfigurations?.translations?.[current] ?? {}
      };
      return acc;
    }, {});
    this.configurations.translations = translations;
    return Promise.resolve();
  }
  registerHook = (name2, fn) => {
    invariant__default.default(
      this.hooksDict[name2],
      `The hook ${name2} is not defined. You are trying to register a hook that does not exist in the application.`
    );
    this.hooksDict[name2].register(fn);
  };
  registerPlugin = (pluginConf) => {
    const plugin = new Plugin(pluginConf);
    this.plugins[plugin.pluginId] = plugin;
  };
  runHookSeries = (name2, asynchronous = false) => asynchronous ? this.hooksDict[name2].runSeriesAsync() : this.hooksDict[name2].runSeries();
  runHookWaterfall = (name2, initialValue, asynchronous = false, store) => {
    return asynchronous ? this.hooksDict[name2].runWaterfallAsync(initialValue, store) : this.hooksDict[name2].runWaterfall(initialValue, store);
  };
  runHookParallel = (name2) => this.hooksDict[name2].runParallel();
  render() {
    const localeNames = pick__default.default(languageNativeNames, this.configurations.locales || []);
    const locale = localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY) || "en";
    const store = this.createStore({
      admin_app: {
        permissions: {},
        theme: {
          availableThemes: [],
          currentTheme: localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || "system"
        },
        language: {
          locale: localeNames[locale] ? locale : "en",
          localeNames
        }
      }
    });
    const {
      components: { components },
      fields: { fields }
    } = this.library;
    return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.BrowserRouter, { basename: getBasename(), children: /* @__PURE__ */ jsxRuntime.jsxs(
      Providers,
      {
        components,
        fields,
        customFields: this.customFields,
        localeNames,
        getAdminInjectedComponents: this.getAdminInjectedComponents,
        getPlugin: this.getPlugin,
        messages: this.configurations.translations,
        menu: this.menu,
        plugins: this.plugins,
        runHookParallel: this.runHookParallel,
        runHookWaterfall: (name2, initialValue, async = false) => {
          return this.runHookWaterfall(name2, initialValue, async, store);
        },
        runHookSeries: this.runHookSeries,
        themes: this.configurations.themes,
        settings: this.settings,
        store,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            reactHelmet.Helmet,
            {
              htmlAttributes: { lang: localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY) || "en" }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            App$2,
            {
              authLogo: this.configurations.authLogo,
              menuLogo: this.configurations.menuLogo,
              showTutorials: this.configurations.tutorials,
              showReleaseNotification: this.configurations.notifications.releases
            }
          )
        ]
      }
    ) });
  }
}
const createAbsoluteUrl = (url) => {
  if (!url) {
    return window.location.origin;
  }
  if (url.startsWith("/")) {
    return new URL(url, window.location.origin).toString();
  } else {
    return url;
  }
};
const renderAdmin = async (mountNode, { plugins, customisations, features }) => {
  if (!mountNode) {
    throw new Error("[@strapi/admin]: Could not find the root element to mount the admin app");
  }
  window.strapi = {
    /**
     * This ENV variable is passed from the strapi instance, by default no url is set
     * in the config and therefore the instance returns you an empty string so URLs are relative.
     *
     * To ensure that the backendURL is always set, we use the window.location.origin as a fallback.
     */
    backendURL: createAbsoluteUrl(process.env.STRAPI_ADMIN_BACKEND_URL),
    isEE: false,
    telemetryDisabled: process.env.STRAPI_TELEMETRY_DISABLED === "true" ? true : false,
    future: {
      isEnabled: (name2) => {
        return features?.future?.[name2] === true;
      }
    },
    // @ts-expect-error – there's pollution from the global scope of Node.
    features: {
      SSO: "sso",
      AUDIT_LOGS: "audit-logs",
      REVIEW_WORKFLOWS: "review-workflows",
      /**
       * If we don't get the license then we know it's not EE
       * so no feature is enabled.
       */
      isEnabled: () => false
    },
    projectType: "Community",
    flags: {
      nps: false,
      promoteEE: true
    }
  };
  const { get: get2 } = helperPlugin.getFetchClient();
  try {
    const {
      data: {
        data: { isEE, features: features2, flags }
      }
    } = await get2("/admin/project-type");
    window.strapi.isEE = isEE;
    window.strapi.flags = flags;
    window.strapi.features = {
      ...window.strapi.features,
      isEnabled: (featureName) => features2.some((feature) => feature.name === featureName)
    };
    window.strapi.projectType = isEE ? "Enterprise" : "Community";
  } catch (err) {
    console.error(err);
  }
  const app = new StrapiApp({
    adminConfig: customisations,
    appPlugins: plugins
  });
  await app.bootstrapAdmin();
  await app.initialize();
  await app.bootstrap();
  await app.loadTrads();
  client.createRoot(mountNode).render(app.render());
  if (typeof module !== "undefined" && module && "hot" in module && typeof module.hot === "object" && module.hot !== null && "accept" in module.hot && typeof module.hot.accept === "function") {
    module.hot.accept();
  }
};
function useDocument() {
  const validate = (entry, { contentType, components, isCreatingEntry = false }) => {
    const schema = createYupSchema(
      // @ts-expect-error - @TODO: createYupSchema types need to be revisited
      contentType,
      { components },
      { isCreatingEntry, isDraft: false, isJSONTestDisabled: true }
    );
    try {
      schema.validateSync(entry, { abortEarly: false });
      return {
        errors: {}
      };
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return {
          errors: helperPlugin.getYupInnerErrors(error)
        };
      }
      throw error;
    }
  };
  return { validate };
}
function useLicenseLimits({ enabled } = { enabled: true }) {
  const { data, isError, isLoading } = useGetLicenseLimitsQuery(void 0, {
    skip: !enabled
  });
  const getFeature = React__namespace.useCallback(
    (name2) => {
      const feature = data?.data?.features.find((feature2) => feature2.name === name2);
      if (feature && "options" in feature) {
        return feature.options;
      } else {
        return {};
      }
    },
    [data]
  );
  return { license: data?.data, getFeature, isError, isLoading };
}
exports.App = App$1;
exports.Column = Column;
exports.DefaultDocument = DefaultDocument;
exports.DragLayer = DragLayer;
exports.Information = Information;
exports.LayoutContent = LayoutContent;
exports.Login = Login;
exports.Logo = Logo;
exports.NotFoundPage = NotFoundPage$1;
exports.NpsSurvey = NpsSurvey;
exports.RBACProvider = RBACProvider;
exports.SETTINGS_LINKS_CE = SETTINGS_LINKS_CE;
exports.StrapiLogo = StrapiLogo;
exports.UnauthenticatedLayout = UnauthenticatedLayout;
exports.adminApi = adminApi;
exports.composeRefs = composeRefs;
exports.createRoute = createRoute;
exports.createTypedSelector = createTypedSelector;
exports.getBasename = getBasename;
exports.getDisplayName = getDisplayName;
exports.getTranslation = getTranslation;
exports.isBaseQueryError = isBaseQueryError;
exports.isObject = isObject;
exports.renderAdmin = renderAdmin;
exports.setAppTheme = setAppTheme;
exports.useAdminUsers = useAdminUsers;
exports.useAuth = useAuth;
exports.useConfiguration = useConfiguration;
exports.useCreateRoleMutation = useCreateRoleMutation;
exports.useCreateUserMutation = useCreateUserMutation;
exports.useDebounce = useDebounce;
exports.useDeleteManyUsersMutation = useDeleteManyUsersMutation;
exports.useDocument = useDocument;
exports.useDragAndDrop = useDragAndDrop;
exports.useEnterprise = useEnterprise;
exports.useGetMyPermissionsQuery = useGetMyPermissionsQuery;
exports.useGetPluginsQuery = useGetPluginsQuery;
exports.useGetProviderOptionsQuery = useGetProviderOptionsQuery;
exports.useGetProvidersQuery = useGetProvidersQuery;
exports.useGetRolePermissionLayoutQuery = useGetRolePermissionLayoutQuery;
exports.useGetRolePermissionsQuery = useGetRolePermissionsQuery;
exports.useGetRolesQuery = useGetRolesQuery;
exports.useInformationQuery = useInformationQuery;
exports.useIsSSOLockedQuery = useIsSSOLockedQuery;
exports.useLicenseLimits = useLicenseLimits;
exports.useOnce = useOnce;
exports.useRegenerateTokenMutation = useRegenerateTokenMutation;
exports.useTypedDispatch = useTypedDispatch;
exports.useTypedSelector = useTypedSelector;
exports.useTypedStore = useTypedStore;
exports.useUpdateMeMutation = useUpdateMeMutation;
exports.useUpdateProviderOptionsMutation = useUpdateProviderOptionsMutation;
exports.useUpdateRoleMutation = useUpdateRoleMutation;
exports.useUpdateRolePermissionsMutation = useUpdateRolePermissionsMutation;
exports.useUpdateUserMutation = useUpdateUserMutation;
//# sourceMappingURL=index-XLp9u_5A.js.map
