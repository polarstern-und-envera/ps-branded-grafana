import { getBuiltInThemes } from '@grafana/data';
import { config } from '@grafana/runtime';

export function getSelectableThemes() {
  const allowedExtraThemes = [];

  if (config.featureToggles.grafanaconThemes) {
    allowedExtraThemes.push('polarstern');
  }

  return getBuiltInThemes(allowedExtraThemes);
}
