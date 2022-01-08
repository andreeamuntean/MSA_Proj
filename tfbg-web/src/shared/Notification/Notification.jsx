import React from "react";
import moment from "moment";
import { InlineNotification, ToastNotification } from "carbon-components-react";

const Notification = (props) => {
  switch (props.type) {
    case "inline":
      return (
        <InlineNotification
          kind={props.kind}
          subtitle={<span>{props.subtitle}</span>}
          title={props.title}
        />
      );
    case "toast":
      return (
        <ToastNotification
          kind={props.kind}
          caption={moment().format("HH:MM:SS")}
          title={props.title}
          timeout={10000}
          lowContrast
        />
      );
    default:
      return (
        <InlineNotification
          kind={props.kind}
          subtitle={<span>{props.subtitle}</span>}
          title={props.title}
        />
      );
  }
};

export default Notification;
