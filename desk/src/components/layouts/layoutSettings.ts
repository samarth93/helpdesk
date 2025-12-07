import LucideBookOpen from "~icons/lucide/book-open";
import LucideCloudLightning from "~icons/lucide/cloud-lightning";
import LucideContact2 from "~icons/lucide/contact-2";
import LucideTicket from "~icons/lucide/ticket";
import { OrganizationsIcon } from "../icons";
import PhoneIcon from "../icons/PhoneIcon.vue";
import { __ } from "@/translation";

export function getAgentPortalSidebarOptions() {
  return [
    {
      label: __("Tickets"),
      icon: LucideTicket,
      to: "TicketsAgent",
    },
    {
      label: __("Knowledge Base"),
      icon: LucideBookOpen,
      to: "AgentKnowledgeBase",
    },
    {
      label: __("Canned responses"),
      icon: LucideCloudLightning,
      to: "CannedResponses",
    },
    {
      label: __("Customers"),
      icon: OrganizationsIcon,
      to: "CustomerList",
    },
    {
      label: __("Contacts"),
      icon: LucideContact2,
      to: "ContactList",
    },
    {
      label: __("Call Logs"),
      icon: PhoneIcon,
      to: "CallLogs",
    },
  ];
}

export function getCustomerPortalSidebarOptions() {
  return [
    {
      label: __("Tickets"),
      icon: LucideTicket,
      to: "TicketsCustomer",
    },
    {
      label: __("Knowledge Base"),
      icon: LucideBookOpen,
      to: "CustomerKnowledgeBase",
    },
  ];
}

// Keep exports for backward compatibility (will be evaluated at import time)
export const agentPortalSidebarOptions = getAgentPortalSidebarOptions();
export const customerPortalSidebarOptions = getCustomerPortalSidebarOptions();
