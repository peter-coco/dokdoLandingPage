import { useState } from "react";
import "./container.css";
import { ContainerLogo } from "./container-logo/container_logo";
import { ContainerMagazine } from "./container-magazine/container_magazine";
import { ContainerEventScheduleNAlarmZone } from "./container_eventScheduleNAlarmZone/container_eventScheduleNAlarmZone";
import { ContainerNotice } from "./container_notice/container_notice";

export function Container() {
  return (
    <div id="container-wrap">
      <ContainerNotice />
      <ContainerEventScheduleNAlarmZone />
      <ContainerMagazine />
      <ContainerLogo />
    </div>
  );
}
