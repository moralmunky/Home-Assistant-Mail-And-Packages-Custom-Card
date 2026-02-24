import { RegistryPackage } from './types';

export type StatusGroup = 'out_for_delivery' | 'in_transit' | 'detected' | 'delivered';

export const STATUS_ORDER: StatusGroup[] = ['out_for_delivery', 'in_transit', 'detected', 'delivered'];

export const STATUS_LABELS: Record<StatusGroup, string> = {
  out_for_delivery: 'Out for Delivery',
  in_transit: 'In Transit',
  detected: 'Detected',
  delivered: 'Delivered',
};

export const STATUS_ICONS: Record<StatusGroup, string> = {
  out_for_delivery: 'mdi:truck-fast',
  in_transit: 'mdi:package-variant',
  detected: 'mdi:magnify',
  delivered: 'mdi:package-variant-closed-check',
};

export const STATUS_COLORS: Record<StatusGroup, string> = {
  out_for_delivery: '#03a9f4',
  in_transit: '#ff9800',
  detected: '#9e9e9e',
  delivered: '#4caf50',
};

export function groupPackagesByStatus(packages: RegistryPackage[]): Map<StatusGroup, RegistryPackage[]> {
  const groups = new Map<StatusGroup, RegistryPackage[]>();
  for (const status of STATUS_ORDER) {
    groups.set(status, []);
  }
  for (const pkg of packages) {
    if (pkg.status === 'cleared') continue;
    const group = groups.get(pkg.status as StatusGroup);
    if (group) {
      group.push(pkg);
    }
  }
  for (const [, pkgs] of groups) {
    pkgs.sort((a, b) => new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime());
  }
  return groups;
}

export function formatTimeAgo(isoString: string): string {
  const now = new Date();
  const then = new Date(isoString);
  const diffMs = now.getTime() - then.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays === 1) return '1 day ago';
  return `${diffDays} days ago`;
}

export function formatDate(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function truncateTracking(tracking: string, maxLen = 22): string {
  if (tracking.length <= maxLen) return tracking;
  return tracking.substring(0, 10) + '\u2026' + tracking.substring(tracking.length - 6);
}
