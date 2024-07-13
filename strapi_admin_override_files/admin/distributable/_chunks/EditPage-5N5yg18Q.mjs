import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Box, Flex, Typography, Button, Grid, GridItem, TextInput, Textarea, Main, HeaderLayout, ContentLayout } from "@strapi/design-system";
import { Link } from "@strapi/design-system/v2";
import { translatedErrors, useRBAC, LoadingIndicatorPage, useNotification, useOverlayBlocker, useTracking, useAPIErrorHandler, SettingsPageTitle } from "@strapi/helper-plugin";
import { ArrowLeft } from "@strapi/icons";
import { Formik } from "formik";
import { useIntl } from "react-intl";
import { Redirect, useRouteMatch, NavLink } from "react-router-dom";
import * as yup from "yup";
import { j as useTypedSelector, A as useGetRolePermissionLayoutQuery, B as useGetRolePermissionsQuery, G as useUpdateRoleMutation, E as useUpdateRolePermissionsMutation, x as isBaseQueryError } from "./index-9D8SuHYl.mjs";
import { u as useAdminRoles } from "./useAdminRoles-7nwMgmcC.mjs";
import { P as Permissions } from "./Permissions-PosVxVm7.mjs";
import "react-dom/client";
import "invariant";
import "lodash/isFunction";
import "lodash/merge";
import "lodash/pick";
import "react-helmet";
import "react-redux";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query/react";
import "axios";
import "@radix-ui/react-context";
import "lodash/camelCase";
import "styled-components";
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
import "lodash/has";
import "lodash/groupBy";
const RoleForm = ({ disabled, role, values, errors, onChange, onBlur }) => {
  const { formatMessage } = useIntl();
  return /* @__PURE__ */ jsx(Box, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 4, children: [
    /* @__PURE__ */ jsxs(Flex, { justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxs(Box, { children: [
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Typography, { fontWeight: "bold", children: role ? role.name : formatMessage({
          id: "global.details",
          defaultMessage: "Details"
        }) }) }),
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Typography, { textColor: "neutral500", variant: "pi", children: role ? role.description : formatMessage({
          id: "Settings.roles.form.description",
          defaultMessage: "Name and description of the role"
        }) }) })
      ] }),
      /* @__PURE__ */ jsx(Button, { disabled: true, variant: "secondary", children: formatMessage(
        {
          id: "Settings.roles.form.button.users-with-role",
          defaultMessage: "{number, plural, =0 {# users} one {# user} other {# users}} with this role"
        },
        { number: role.usersCount }
      ) })
    ] }),
    /* @__PURE__ */ jsxs(Grid, { gap: 4, children: [
      /* @__PURE__ */ jsx(GridItem, { col: 6, children: /* @__PURE__ */ jsx(
        TextInput,
        {
          disabled,
          name: "name",
          error: errors.name && formatMessage({ id: errors.name }),
          label: formatMessage({
            id: "global.name",
            defaultMessage: "Name"
          }),
          onChange,
          onBlur,
          required: true,
          value: values.name || ""
        }
      ) }),
      /* @__PURE__ */ jsx(GridItem, { col: 6, children: /* @__PURE__ */ jsx(
        Textarea,
        {
          disabled,
          label: formatMessage({
            id: "global.description",
            defaultMessage: "Description"
          }),
          id: "description",
          error: errors.name && formatMessage({ id: errors.name }),
          onChange,
          onBlur,
          children: values.description || ""
        }
      ) })
    ] })
  ] }) });
};
const EDIT_ROLE_SCHEMA = yup.object().shape({
  name: yup.string().required(translatedErrors.required),
  description: yup.string().optional()
});
const EditPage = () => {
  const toggleNotification = useNotification();
  const { formatMessage } = useIntl();
  const match = useRouteMatch("/settings/roles/:id");
  const id = match?.params.id;
  const permissionsRef = React.useRef(null);
  const { lockApp, unlockApp } = useOverlayBlocker();
  const { trackUsage } = useTracking();
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = useAPIErrorHandler();
  const { isLoading: isLoadingPermissionsLayout, data: permissionsLayout } = useGetRolePermissionLayoutQuery({
    /**
     * Role here is a query param so if there's no role we pass an empty string
     * which returns us a default layout.
     */
    role: id ?? ""
  });
  const {
    roles,
    isLoading: isRoleLoading,
    refetch: refetchRole
  } = useAdminRoles(
    { id },
    {
      refetchOnMountOrArgChange: true
    }
  );
  const role = roles[0] ?? {};
  const { data: permissions, isLoading: isLoadingPermissions } = useGetRolePermissionsQuery(
    {
      id
    },
    {
      skip: !id,
      refetchOnMountOrArgChange: true
    }
  );
  const [updateRole] = useUpdateRoleMutation();
  const [updateRolePermissions] = useUpdateRolePermissionsMutation();
  if (!id) {
    return /* @__PURE__ */ jsx(Redirect, { to: "/settings/roles" });
  }
  const handleEditRoleSubmit = async (data, formik) => {
    try {
      lockApp();
      const { permissionsToSend, didUpdateConditions } = permissionsRef.current?.getPermissions() ?? {};
      const res = await updateRole({
        id,
        ...data
      });
      if ("error" in res) {
        if (isBaseQueryError(res.error) && res.error.name === "ValidationError") {
          formik.setErrors(formatValidationErrors(res.error));
        } else {
          toggleNotification({
            type: "warning",
            message: formatAPIError(res.error)
          });
        }
        return;
      }
      if (role.code !== "strapi-super-admin" && permissionsToSend) {
        const updateRes = await updateRolePermissions({
          id: res.data.id,
          permissions: permissionsToSend
        });
        if ("error" in updateRes) {
          if (isBaseQueryError(updateRes.error) && updateRes.error.name === "ValidationError") {
            formik.setErrors(formatValidationErrors(updateRes.error));
          } else {
            toggleNotification({
              type: "warning",
              message: formatAPIError(updateRes.error)
            });
          }
          return;
        }
        if (didUpdateConditions) {
          trackUsage("didUpdateConditions");
        }
      }
      permissionsRef.current?.setFormAfterSubmit();
      await refetchRole();
      toggleNotification({
        type: "success",
        message: { id: "notification.success.saved" }
      });
    } catch (error) {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockApp();
    }
  };
  const isFormDisabled = !isRoleLoading && role.code === "strapi-super-admin";
  return /* @__PURE__ */ jsxs(Main, { children: [
    /* @__PURE__ */ jsx(SettingsPageTitle, { name: "Roles" }),
    /* @__PURE__ */ jsx(
      Formik,
      {
        enableReinitialize: true,
        initialValues: {
          name: role.name ?? "",
          description: role.description ?? ""
        },
        onSubmit: handleEditRoleSubmit,
        validationSchema: EDIT_ROLE_SCHEMA,
        validateOnChange: false,
        children: ({ handleSubmit, values, errors, handleChange, handleBlur, isSubmitting }) => /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsx(
            HeaderLayout,
            {
              primaryAction: /* @__PURE__ */ jsx(Flex, { gap: 2, children: /* @__PURE__ */ jsx(
                Button,
                {
                  type: "submit",
                  disabled: role.code === "strapi-super-admin",
                  loading: isSubmitting,
                  size: "L",
                  children: formatMessage({
                    id: "global.save",
                    defaultMessage: "Save"
                  })
                }
              ) }),
              title: formatMessage({
                id: "Settings.roles.edit.title",
                defaultMessage: "Edit a role"
              }),
              subtitle: formatMessage({
                id: "Settings.roles.create.description",
                defaultMessage: "Define the rights given to the role"
              }),
              navigationAction: (
                // @ts-expect-error – the props from the component passed as `as` are not correctly inferred.
                /* @__PURE__ */ jsx(Link, { as: NavLink, startIcon: /* @__PURE__ */ jsx(ArrowLeft, {}), to: "/settings/roles", children: formatMessage({
                  id: "global.back",
                  defaultMessage: "Back"
                }) })
              )
            }
          ),
          /* @__PURE__ */ jsx(ContentLayout, { children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 6, children: [
            /* @__PURE__ */ jsx(
              RoleForm,
              {
                disabled: isFormDisabled,
                errors,
                values,
                onChange: handleChange,
                onBlur: handleBlur,
                role
              }
            ),
            !isLoadingPermissionsLayout && !isRoleLoading && !isLoadingPermissions && permissionsLayout ? /* @__PURE__ */ jsx(Box, { shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ jsx(
              Permissions,
              {
                isFormDisabled,
                permissions,
                ref: permissionsRef,
                layout: permissionsLayout
              }
            ) }) : /* @__PURE__ */ jsx(Box, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ jsx(LoadingIndicatorPage, {}) })
          ] }) })
        ] })
      }
    )
  ] });
};
const ProtectedEditPage = () => {
  const permissions = useTypedSelector((state) => state.admin_app.permissions.settings?.roles);
  const {
    isLoading,
    allowedActions: { canRead, canUpdate }
  } = useRBAC(permissions);
  if (isLoading) {
    return /* @__PURE__ */ jsx(LoadingIndicatorPage, {});
  }
  if (!canRead && !canUpdate) {
    return /* @__PURE__ */ jsx(Redirect, { to: "/" });
  }
  return /* @__PURE__ */ jsx(EditPage, {});
};
export {
  EditPage,
  ProtectedEditPage
};
//# sourceMappingURL=EditPage-5N5yg18Q.mjs.map
