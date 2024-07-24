import { Switch } from "@mantine/core";

interface switchboards {
  color: string;
  label: string;
}

export function SwitchToggle({ color, label }: switchboards) {
  return <Switch color={color} label={label} />;
}
