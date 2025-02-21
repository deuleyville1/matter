'use client'

import type { Device } from "@/lib/schema/device"
import { DeviceDetails } from "./device-details"

export function ClientDeviceDetails({ device }: { device: Device }) {
  return <DeviceDetails device={device} />
} 