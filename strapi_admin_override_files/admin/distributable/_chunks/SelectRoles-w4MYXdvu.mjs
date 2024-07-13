import { jsx } from "react/jsx-runtime";
import { useIntl } from "react-intl";
import { K as getBasename } from "./index-9D8SuHYl.mjs";
import { IconButton, MultiSelect, MultiSelectOption } from "@strapi/design-system";
import { useNotification, useClipboard, ContentBox } from "@strapi/helper-plugin";
import { Duplicate, Loader as Loader$1 } from "@strapi/icons";
import styled, { keyframes } from "styled-components";
import { u as useAdminRoles } from "./useAdminRoles-7nwMgmcC.mjs";
const MagicLinkWrapper = ({ children, target }) => {
  const toggleNotification = useNotification();
  const { formatMessage } = useIntl();
  const { copy } = useClipboard();
  const copyLabel = formatMessage({
    id: "app.component.CopyToClipboard.label",
    defaultMessage: "Copy to clipboard"
  });
  const handleClick = async () => {
    const didCopy = await copy(target);
    if (didCopy) {
      toggleNotification({ type: "info", message: { id: "notification.link-copied" } });
    }
  };
  return /* @__PURE__ */ jsx(
    ContentBox,
    {
      endAction: /* @__PURE__ */ jsx(IconButton, { label: copyLabel, noBorder: true, icon: /* @__PURE__ */ jsx(Duplicate, {}), onClick: handleClick }),
      title: target,
      titleEllipsis: true,
      subtitle: children,
      icon: /* @__PURE__ */ jsx("span", { style: { fontSize: 32 }, children: "✉️" }),
      iconBackground: "neutral100"
    }
  );
};
const MagicLinkCE = ({ registrationToken }) => {
  const { formatMessage } = useIntl();
  const target = `${window.location.origin}${getBasename()}/auth/register?registrationToken=${registrationToken}`;
  return /* @__PURE__ */ jsx(MagicLinkWrapper, { target, children: formatMessage({
    id: "app.components.Users.MagicLink.connect",
    defaultMessage: "Copy and share this link to give access to this user"
  }) });
};
const SelectRoles = ({ disabled, error, onChange, value }) => {
  const { isLoading, roles } = useAdminRoles();
  const { formatMessage } = useIntl();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles",
    defaultMessage: "User's roles"
  });
  const hint = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles.description",
    defaultMessage: "A user can have one or several roles"
  });
  const placeholder = formatMessage({
    id: "app.components.Select.placeholder",
    defaultMessage: "Select"
  });
  return /* @__PURE__ */ jsx(
    MultiSelect,
    {
      id: "roles",
      disabled,
      error: errorMessage,
      hint,
      label,
      name: "roles",
      onChange: (v) => {
        onChange({ target: { name: "roles", value: v } });
      },
      placeholder,
      startIcon: isLoading ? /* @__PURE__ */ jsx(Loader, {}) : void 0,
      value: value.map((v) => v.toString()),
      withTags: true,
      required: true,
      children: roles.map((role) => {
        return /* @__PURE__ */ jsx(MultiSelectOption, { value: role.id.toString(), children: formatMessage({
          id: `global.${role.code}`,
          defaultMessage: role.name
        }) }, role.id);
      })
    }
  );
};
const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const LoadingWrapper = styled.div`
  animation: ${rotation} 2s infinite linear;
`;
const Loader = () => /* @__PURE__ */ jsx(LoadingWrapper, { children: /* @__PURE__ */ jsx(Loader$1, {}) });
export {
  MagicLinkCE as M,
  SelectRoles as S,
  MagicLinkWrapper as a
};
//# sourceMappingURL=SelectRoles-w4MYXdvu.mjs.map
