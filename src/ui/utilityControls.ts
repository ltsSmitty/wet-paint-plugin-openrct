import { checkbox, CheckboxParams, FlexiblePosition, horizontal, label, LabelParams, Scale, spinner, SpinnerParams, WidgetCreator } from "openrct2-flexui";

/**
 * A checkbox with a label on the left side.
 */
export function combinedLabelCheckbox(labelWidth: Scale, params: LabelParams & CheckboxParams): WidgetCreator<FlexiblePosition> {
	const text = params.text;
	params.text = "";
	return horizontal([
		label({
			width: labelWidth,
			disabled: params.disabled,
			tooltip: params.tooltip,
			text
		}),
		checkbox(params)
	]);
}

/**
 * A spinner with a label on the left side.
 */
export function combinedLabelSpinner(labelWidth: Scale, spinnerWidth: Scale, params: LabelParams & SpinnerParams, fallbackDisabledMessage: boolean = true): WidgetCreator<FlexiblePosition> {
	(<FlexiblePosition>params).width = spinnerWidth;
	params.wrapMode ||= "clampThenWrap";
	if (fallbackDisabledMessage) {
		params.disabledMessage ||= "Not available";
	}

	return horizontal([
		label({
			width: labelWidth,
			disabled: params.disabled,
			text: params.text,
			tooltip: params.tooltip
		}),
		spinner(params)
	]);
}
