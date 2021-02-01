export interface Lfo {
	name: string;
	num_points: number;
	points: number[];
	powers: number[];
	smooth: boolean;
}

export interface Modulation {
	destination: string;
	source: string;
}

export interface Sample {
	length: number;
	name: string;
	sample_rate: number;
	samples: string;
}

export interface Keyframe {
	position: number;
	wave_data: string;
}

export interface Component {
	interpolation: number;
	interpolation_style: number;
	keyframes: Keyframe[];
	type: string;
}

export interface Group {
	components: Component[];
}

export interface Wavetable {
	author: string;
	full_normalize: boolean;
	groups: Group[];
	name: string;
	remove_all_dc: boolean;
	version: string;
}

export interface Settings {
	beats_per_minute: number;
	bypass: number;
	chorus_cutoff: number;
	chorus_delay_1: number;
	chorus_delay_2: number;
	chorus_dry_wet: number;
	chorus_feedback: number;
	chorus_frequency: number;
	chorus_mod_depth: number;
	chorus_on: number;
	chorus_spread: number;
	chorus_sync: number;
	chorus_tempo: number;
	chorus_voices: number;
	compressor_attack: number;
	compressor_band_gain: number;
	compressor_band_lower_ratio: number;
	compressor_band_lower_threshold: number;
	compressor_band_upper_ratio: number;
	compressor_band_upper_threshold: number;
	compressor_enabled_bands: number;
	compressor_high_gain: number;
	compressor_high_lower_ratio: number;
	compressor_high_lower_threshold: number;
	compressor_high_upper_ratio: number;
	compressor_high_upper_threshold: number;
	compressor_low_gain: number;
	compressor_low_lower_ratio: number;
	compressor_low_lower_threshold: number;
	compressor_low_upper_ratio: number;
	compressor_low_upper_threshold: number;
	compressor_mix: number;
	compressor_on: number;
	compressor_release: number;
	delay_aux_frequency: number;
	delay_aux_sync: number;
	delay_aux_tempo: number;
	delay_dry_wet: number;
	delay_feedback: number;
	delay_filter_cutoff: number;
	delay_filter_spread: number;
	delay_frequency: number;
	delay_on: number;
	delay_style: number;
	delay_sync: number;
	delay_tempo: number;
	distortion_drive: number;
	distortion_filter_blend: number;
	distortion_filter_cutoff: number;
	distortion_filter_order: number;
	distortion_filter_resonance: number;
	distortion_mix: number;
	distortion_on: number;
	distortion_type: number;
	effect_chain_order: number;
	env_1_attack: number;
	env_1_attack_power: number;
	env_1_decay: number;
	env_1_decay_power: number;
	env_1_delay: number;
	env_1_hold: number;
	env_1_release: number;
	env_1_release_power: number;
	env_1_sustain: number;
	env_2_attack: number;
	env_2_attack_power: number;
	env_2_decay: number;
	env_2_decay_power: number;
	env_2_delay: number;
	env_2_hold: number;
	env_2_release: number;
	env_2_release_power: number;
	env_2_sustain: number;
	env_3_attack: number;
	env_3_attack_power: number;
	env_3_decay: number;
	env_3_decay_power: number;
	env_3_delay: number;
	env_3_hold: number;
	env_3_release: number;
	env_3_release_power: number;
	env_3_sustain: number;
	env_4_attack: number;
	env_4_attack_power: number;
	env_4_decay: number;
	env_4_decay_power: number;
	env_4_delay: number;
	env_4_hold: number;
	env_4_release: number;
	env_4_release_power: number;
	env_4_sustain: number;
	env_5_attack: number;
	env_5_attack_power: number;
	env_5_decay: number;
	env_5_decay_power: number;
	env_5_delay: number;
	env_5_hold: number;
	env_5_release: number;
	env_5_release_power: number;
	env_5_sustain: number;
	env_6_attack: number;
	env_6_attack_power: number;
	env_6_decay: number;
	env_6_decay_power: number;
	env_6_delay: number;
	env_6_hold: number;
	env_6_release: number;
	env_6_release_power: number;
	env_6_sustain: number;
	eq_band_cutoff: number;
	eq_band_gain: number;
	eq_band_mode: number;
	eq_band_resonance: number;
	eq_high_cutoff: number;
	eq_high_gain: number;
	eq_high_mode: number;
	eq_high_resonance: number;
	eq_low_cutoff: number;
	eq_low_gain: number;
	eq_low_mode: number;
	eq_low_resonance: number;
	eq_on: number;
	filter_1_blend: number;
	filter_1_blend_transpose: number;
	filter_1_cutoff: number;
	filter_1_drive: number;
	filter_1_filter_input: number;
	filter_1_formant_resonance: number;
	filter_1_formant_spread: number;
	filter_1_formant_transpose: number;
	filter_1_formant_x: number;
	filter_1_formant_y: number;
	filter_1_keytrack: number;
	filter_1_mix: number;
	filter_1_model: number;
	filter_1_on: number;
	filter_1_resonance: number;
	filter_1_style: number;
	filter_2_blend: number;
	filter_2_blend_transpose: number;
	filter_2_cutoff: number;
	filter_2_drive: number;
	filter_2_filter_input: number;
	filter_2_formant_resonance: number;
	filter_2_formant_spread: number;
	filter_2_formant_transpose: number;
	filter_2_formant_x: number;
	filter_2_formant_y: number;
	filter_2_keytrack: number;
	filter_2_mix: number;
	filter_2_model: number;
	filter_2_on: number;
	filter_2_resonance: number;
	filter_2_style: number;
	filter_fx_blend: number;
	filter_fx_blend_transpose: number;
	filter_fx_cutoff: number;
	filter_fx_drive: number;
	filter_fx_formant_resonance: number;
	filter_fx_formant_spread: number;
	filter_fx_formant_transpose: number;
	filter_fx_formant_x: number;
	filter_fx_formant_y: number;
	filter_fx_keytrack: number;
	filter_fx_mix: number;
	filter_fx_model: number;
	filter_fx_on: number;
	filter_fx_resonance: number;
	filter_fx_style: number;
	flanger_center: number;
	flanger_dry_wet: number;
	flanger_feedback: number;
	flanger_frequency: number;
	flanger_mod_depth: number;
	flanger_on: number;
	flanger_phase_offset: number;
	flanger_sync: number;
	flanger_tempo: number;
	legato: number;
	lfo_1_delay_time: number;
	lfo_1_fade_time: number;
	lfo_1_frequency: number;
	lfo_1_keytrack_transpose: number;
	lfo_1_keytrack_tune: number;
	lfo_1_phase: number;
	lfo_1_smooth_mode: number;
	lfo_1_smooth_time: number;
	lfo_1_stereo: number;
	lfo_1_sync: number;
	lfo_1_sync_type: number;
	lfo_1_tempo: number;
	lfo_2_delay_time: number;
	lfo_2_fade_time: number;
	lfo_2_frequency: number;
	lfo_2_keytrack_transpose: number;
	lfo_2_keytrack_tune: number;
	lfo_2_phase: number;
	lfo_2_smooth_mode: number;
	lfo_2_smooth_time: number;
	lfo_2_stereo: number;
	lfo_2_sync: number;
	lfo_2_sync_type: number;
	lfo_2_tempo: number;
	lfo_3_delay_time: number;
	lfo_3_fade_time: number;
	lfo_3_frequency: number;
	lfo_3_keytrack_transpose: number;
	lfo_3_keytrack_tune: number;
	lfo_3_phase: number;
	lfo_3_smooth_mode: number;
	lfo_3_smooth_time: number;
	lfo_3_stereo: number;
	lfo_3_sync: number;
	lfo_3_sync_type: number;
	lfo_3_tempo: number;
	lfo_4_delay_time: number;
	lfo_4_fade_time: number;
	lfo_4_frequency: number;
	lfo_4_keytrack_transpose: number;
	lfo_4_keytrack_tune: number;
	lfo_4_phase: number;
	lfo_4_smooth_mode: number;
	lfo_4_smooth_time: number;
	lfo_4_stereo: number;
	lfo_4_sync: number;
	lfo_4_sync_type: number;
	lfo_4_tempo: number;
	lfo_5_delay_time: number;
	lfo_5_fade_time: number;
	lfo_5_frequency: number;
	lfo_5_keytrack_transpose: number;
	lfo_5_keytrack_tune: number;
	lfo_5_phase: number;
	lfo_5_smooth_mode: number;
	lfo_5_smooth_time: number;
	lfo_5_stereo: number;
	lfo_5_sync: number;
	lfo_5_sync_type: number;
	lfo_5_tempo: number;
	lfo_6_delay_time: number;
	lfo_6_fade_time: number;
	lfo_6_frequency: number;
	lfo_6_keytrack_transpose: number;
	lfo_6_keytrack_tune: number;
	lfo_6_phase: number;
	lfo_6_smooth_mode: number;
	lfo_6_smooth_time: number;
	lfo_6_stereo: number;
	lfo_6_sync: number;
	lfo_6_sync_type: number;
	lfo_6_tempo: number;
	lfo_7_delay_time: number;
	lfo_7_fade_time: number;
	lfo_7_frequency: number;
	lfo_7_keytrack_transpose: number;
	lfo_7_keytrack_tune: number;
	lfo_7_phase: number;
	lfo_7_smooth_mode: number;
	lfo_7_smooth_time: number;
	lfo_7_stereo: number;
	lfo_7_sync: number;
	lfo_7_sync_type: number;
	lfo_7_tempo: number;
	lfo_8_delay_time: number;
	lfo_8_fade_time: number;
	lfo_8_frequency: number;
	lfo_8_keytrack_transpose: number;
	lfo_8_keytrack_tune: number;
	lfo_8_phase: number;
	lfo_8_smooth_mode: number;
	lfo_8_smooth_time: number;
	lfo_8_stereo: number;
	lfo_8_sync: number;
	lfo_8_sync_type: number;
	lfo_8_tempo: number;
	lfos: Lfo[];
	macro_control_1: number;
	macro_control_2: number;
	macro_control_3: number;
	macro_control_4: number;
	mod_wheel: number;
	modulation_10_amount: number;
	modulation_10_bipolar: number;
	modulation_10_bypass: number;
	modulation_10_power: number;
	modulation_10_stereo: number;
	modulation_11_amount: number;
	modulation_11_bipolar: number;
	modulation_11_bypass: number;
	modulation_11_power: number;
	modulation_11_stereo: number;
	modulation_12_amount: number;
	modulation_12_bipolar: number;
	modulation_12_bypass: number;
	modulation_12_power: number;
	modulation_12_stereo: number;
	modulation_13_amount: number;
	modulation_13_bipolar: number;
	modulation_13_bypass: number;
	modulation_13_power: number;
	modulation_13_stereo: number;
	modulation_14_amount: number;
	modulation_14_bipolar: number;
	modulation_14_bypass: number;
	modulation_14_power: number;
	modulation_14_stereo: number;
	modulation_15_amount: number;
	modulation_15_bipolar: number;
	modulation_15_bypass: number;
	modulation_15_power: number;
	modulation_15_stereo: number;
	modulation_16_amount: number;
	modulation_16_bipolar: number;
	modulation_16_bypass: number;
	modulation_16_power: number;
	modulation_16_stereo: number;
	modulation_17_amount: number;
	modulation_17_bipolar: number;
	modulation_17_bypass: number;
	modulation_17_power: number;
	modulation_17_stereo: number;
	modulation_18_amount: number;
	modulation_18_bipolar: number;
	modulation_18_bypass: number;
	modulation_18_power: number;
	modulation_18_stereo: number;
	modulation_19_amount: number;
	modulation_19_bipolar: number;
	modulation_19_bypass: number;
	modulation_19_power: number;
	modulation_19_stereo: number;
	modulation_1_amount: number;
	modulation_1_bipolar: number;
	modulation_1_bypass: number;
	modulation_1_power: number;
	modulation_1_stereo: number;
	modulation_20_amount: number;
	modulation_20_bipolar: number;
	modulation_20_bypass: number;
	modulation_20_power: number;
	modulation_20_stereo: number;
	modulation_21_amount: number;
	modulation_21_bipolar: number;
	modulation_21_bypass: number;
	modulation_21_power: number;
	modulation_21_stereo: number;
	modulation_22_amount: number;
	modulation_22_bipolar: number;
	modulation_22_bypass: number;
	modulation_22_power: number;
	modulation_22_stereo: number;
	modulation_23_amount: number;
	modulation_23_bipolar: number;
	modulation_23_bypass: number;
	modulation_23_power: number;
	modulation_23_stereo: number;
	modulation_24_amount: number;
	modulation_24_bipolar: number;
	modulation_24_bypass: number;
	modulation_24_power: number;
	modulation_24_stereo: number;
	modulation_25_amount: number;
	modulation_25_bipolar: number;
	modulation_25_bypass: number;
	modulation_25_power: number;
	modulation_25_stereo: number;
	modulation_26_amount: number;
	modulation_26_bipolar: number;
	modulation_26_bypass: number;
	modulation_26_power: number;
	modulation_26_stereo: number;
	modulation_27_amount: number;
	modulation_27_bipolar: number;
	modulation_27_bypass: number;
	modulation_27_power: number;
	modulation_27_stereo: number;
	modulation_28_amount: number;
	modulation_28_bipolar: number;
	modulation_28_bypass: number;
	modulation_28_power: number;
	modulation_28_stereo: number;
	modulation_29_amount: number;
	modulation_29_bipolar: number;
	modulation_29_bypass: number;
	modulation_29_power: number;
	modulation_29_stereo: number;
	modulation_2_amount: number;
	modulation_2_bipolar: number;
	modulation_2_bypass: number;
	modulation_2_power: number;
	modulation_2_stereo: number;
	modulation_30_amount: number;
	modulation_30_bipolar: number;
	modulation_30_bypass: number;
	modulation_30_power: number;
	modulation_30_stereo: number;
	modulation_31_amount: number;
	modulation_31_bipolar: number;
	modulation_31_bypass: number;
	modulation_31_power: number;
	modulation_31_stereo: number;
	modulation_32_amount: number;
	modulation_32_bipolar: number;
	modulation_32_bypass: number;
	modulation_32_power: number;
	modulation_32_stereo: number;
	modulation_33_amount: number;
	modulation_33_bipolar: number;
	modulation_33_bypass: number;
	modulation_33_power: number;
	modulation_33_stereo: number;
	modulation_34_amount: number;
	modulation_34_bipolar: number;
	modulation_34_bypass: number;
	modulation_34_power: number;
	modulation_34_stereo: number;
	modulation_35_amount: number;
	modulation_35_bipolar: number;
	modulation_35_bypass: number;
	modulation_35_power: number;
	modulation_35_stereo: number;
	modulation_36_amount: number;
	modulation_36_bipolar: number;
	modulation_36_bypass: number;
	modulation_36_power: number;
	modulation_36_stereo: number;
	modulation_37_amount: number;
	modulation_37_bipolar: number;
	modulation_37_bypass: number;
	modulation_37_power: number;
	modulation_37_stereo: number;
	modulation_38_amount: number;
	modulation_38_bipolar: number;
	modulation_38_bypass: number;
	modulation_38_power: number;
	modulation_38_stereo: number;
	modulation_39_amount: number;
	modulation_39_bipolar: number;
	modulation_39_bypass: number;
	modulation_39_power: number;
	modulation_39_stereo: number;
	modulation_3_amount: number;
	modulation_3_bipolar: number;
	modulation_3_bypass: number;
	modulation_3_power: number;
	modulation_3_stereo: number;
	modulation_40_amount: number;
	modulation_40_bipolar: number;
	modulation_40_bypass: number;
	modulation_40_power: number;
	modulation_40_stereo: number;
	modulation_41_amount: number;
	modulation_41_bipolar: number;
	modulation_41_bypass: number;
	modulation_41_power: number;
	modulation_41_stereo: number;
	modulation_42_amount: number;
	modulation_42_bipolar: number;
	modulation_42_bypass: number;
	modulation_42_power: number;
	modulation_42_stereo: number;
	modulation_43_amount: number;
	modulation_43_bipolar: number;
	modulation_43_bypass: number;
	modulation_43_power: number;
	modulation_43_stereo: number;
	modulation_44_amount: number;
	modulation_44_bipolar: number;
	modulation_44_bypass: number;
	modulation_44_power: number;
	modulation_44_stereo: number;
	modulation_45_amount: number;
	modulation_45_bipolar: number;
	modulation_45_bypass: number;
	modulation_45_power: number;
	modulation_45_stereo: number;
	modulation_46_amount: number;
	modulation_46_bipolar: number;
	modulation_46_bypass: number;
	modulation_46_power: number;
	modulation_46_stereo: number;
	modulation_47_amount: number;
	modulation_47_bipolar: number;
	modulation_47_bypass: number;
	modulation_47_power: number;
	modulation_47_stereo: number;
	modulation_48_amount: number;
	modulation_48_bipolar: number;
	modulation_48_bypass: number;
	modulation_48_power: number;
	modulation_48_stereo: number;
	modulation_49_amount: number;
	modulation_49_bipolar: number;
	modulation_49_bypass: number;
	modulation_49_power: number;
	modulation_49_stereo: number;
	modulation_4_amount: number;
	modulation_4_bipolar: number;
	modulation_4_bypass: number;
	modulation_4_power: number;
	modulation_4_stereo: number;
	modulation_50_amount: number;
	modulation_50_bipolar: number;
	modulation_50_bypass: number;
	modulation_50_power: number;
	modulation_50_stereo: number;
	modulation_51_amount: number;
	modulation_51_bipolar: number;
	modulation_51_bypass: number;
	modulation_51_power: number;
	modulation_51_stereo: number;
	modulation_52_amount: number;
	modulation_52_bipolar: number;
	modulation_52_bypass: number;
	modulation_52_power: number;
	modulation_52_stereo: number;
	modulation_53_amount: number;
	modulation_53_bipolar: number;
	modulation_53_bypass: number;
	modulation_53_power: number;
	modulation_53_stereo: number;
	modulation_54_amount: number;
	modulation_54_bipolar: number;
	modulation_54_bypass: number;
	modulation_54_power: number;
	modulation_54_stereo: number;
	modulation_55_amount: number;
	modulation_55_bipolar: number;
	modulation_55_bypass: number;
	modulation_55_power: number;
	modulation_55_stereo: number;
	modulation_56_amount: number;
	modulation_56_bipolar: number;
	modulation_56_bypass: number;
	modulation_56_power: number;
	modulation_56_stereo: number;
	modulation_57_amount: number;
	modulation_57_bipolar: number;
	modulation_57_bypass: number;
	modulation_57_power: number;
	modulation_57_stereo: number;
	modulation_58_amount: number;
	modulation_58_bipolar: number;
	modulation_58_bypass: number;
	modulation_58_power: number;
	modulation_58_stereo: number;
	modulation_59_amount: number;
	modulation_59_bipolar: number;
	modulation_59_bypass: number;
	modulation_59_power: number;
	modulation_59_stereo: number;
	modulation_5_amount: number;
	modulation_5_bipolar: number;
	modulation_5_bypass: number;
	modulation_5_power: number;
	modulation_5_stereo: number;
	modulation_60_amount: number;
	modulation_60_bipolar: number;
	modulation_60_bypass: number;
	modulation_60_power: number;
	modulation_60_stereo: number;
	modulation_61_amount: number;
	modulation_61_bipolar: number;
	modulation_61_bypass: number;
	modulation_61_power: number;
	modulation_61_stereo: number;
	modulation_62_amount: number;
	modulation_62_bipolar: number;
	modulation_62_bypass: number;
	modulation_62_power: number;
	modulation_62_stereo: number;
	modulation_63_amount: number;
	modulation_63_bipolar: number;
	modulation_63_bypass: number;
	modulation_63_power: number;
	modulation_63_stereo: number;
	modulation_64_amount: number;
	modulation_64_bipolar: number;
	modulation_64_bypass: number;
	modulation_64_power: number;
	modulation_64_stereo: number;
	modulation_6_amount: number;
	modulation_6_bipolar: number;
	modulation_6_bypass: number;
	modulation_6_power: number;
	modulation_6_stereo: number;
	modulation_7_amount: number;
	modulation_7_bipolar: number;
	modulation_7_bypass: number;
	modulation_7_power: number;
	modulation_7_stereo: number;
	modulation_8_amount: number;
	modulation_8_bipolar: number;
	modulation_8_bypass: number;
	modulation_8_power: number;
	modulation_8_stereo: number;
	modulation_9_amount: number;
	modulation_9_bipolar: number;
	modulation_9_bypass: number;
	modulation_9_power: number;
	modulation_9_stereo: number;
	modulations: Modulation[];
	osc_1_destination: number;
	osc_1_detune_power: number;
	osc_1_detune_range: number;
	osc_1_distortion_amount: number;
	osc_1_distortion_phase: number;
	osc_1_distortion_spread: number;
	osc_1_distortion_type: number;
	osc_1_frame_spread: number;
	osc_1_level: number;
	osc_1_midi_track: number;
	osc_1_on: number;
	osc_1_pan: number;
	osc_1_phase: number;
	osc_1_random_phase: number;
	osc_1_smooth_interpolation: number;
	osc_1_spectral_morph_amount: number;
	osc_1_spectral_morph_spread: number;
	osc_1_spectral_morph_type: number;
	osc_1_spectral_unison: number;
	osc_1_stack_style: number;
	osc_1_stereo_spread: number;
	osc_1_transpose: number;
	osc_1_transpose_quantize: number;
	osc_1_tune: number;
	osc_1_unison_blend: number;
	osc_1_unison_detune: number;
	osc_1_unison_voices: number;
	osc_1_view_2d: number;
	osc_1_wave_frame: number;
	osc_2_destination: number;
	osc_2_detune_power: number;
	osc_2_detune_range: number;
	osc_2_distortion_amount: number;
	osc_2_distortion_phase: number;
	osc_2_distortion_spread: number;
	osc_2_distortion_type: number;
	osc_2_frame_spread: number;
	osc_2_level: number;
	osc_2_midi_track: number;
	osc_2_on: number;
	osc_2_pan: number;
	osc_2_phase: number;
	osc_2_random_phase: number;
	osc_2_smooth_interpolation: number;
	osc_2_spectral_morph_amount: number;
	osc_2_spectral_morph_spread: number;
	osc_2_spectral_morph_type: number;
	osc_2_spectral_unison: number;
	osc_2_stack_style: number;
	osc_2_stereo_spread: number;
	osc_2_transpose: number;
	osc_2_transpose_quantize: number;
	osc_2_tune: number;
	osc_2_unison_blend: number;
	osc_2_unison_detune: number;
	osc_2_unison_voices: number;
	osc_2_view_2d: number;
	osc_2_wave_frame: number;
	osc_3_destination: number;
	osc_3_detune_power: number;
	osc_3_detune_range: number;
	osc_3_distortion_amount: number;
	osc_3_distortion_phase: number;
	osc_3_distortion_spread: number;
	osc_3_distortion_type: number;
	osc_3_frame_spread: number;
	osc_3_level: number;
	osc_3_midi_track: number;
	osc_3_on: number;
	osc_3_pan: number;
	osc_3_phase: number;
	osc_3_random_phase: number;
	osc_3_smooth_interpolation: number;
	osc_3_spectral_morph_amount: number;
	osc_3_spectral_morph_spread: number;
	osc_3_spectral_morph_type: number;
	osc_3_spectral_unison: number;
	osc_3_stack_style: number;
	osc_3_stereo_spread: number;
	osc_3_transpose: number;
	osc_3_transpose_quantize: number;
	osc_3_tune: number;
	osc_3_unison_blend: number;
	osc_3_unison_detune: number;
	osc_3_unison_voices: number;
	osc_3_view_2d: number;
	osc_3_wave_frame: number;
	oversampling: number;
	phaser_blend: number;
	phaser_center: number;
	phaser_dry_wet: number;
	phaser_feedback: number;
	phaser_frequency: number;
	phaser_mod_depth: number;
	phaser_on: number;
	phaser_phase_offset: number;
	phaser_sync: number;
	phaser_tempo: number;
	pitch_bend_range: number;
	pitch_wheel: number;
	polyphony: number;
	portamento_force: number;
	portamento_scale: number;
	portamento_slope: number;
	portamento_time: number;
	random_1_frequency: number;
	random_1_keytrack_transpose: number;
	random_1_keytrack_tune: number;
	random_1_stereo: number;
	random_1_style: number;
	random_1_sync: number;
	random_1_sync_type: number;
	random_1_tempo: number;
	random_2_frequency: number;
	random_2_keytrack_transpose: number;
	random_2_keytrack_tune: number;
	random_2_stereo: number;
	random_2_style: number;
	random_2_sync: number;
	random_2_sync_type: number;
	random_2_tempo: number;
	random_3_frequency: number;
	random_3_keytrack_transpose: number;
	random_3_keytrack_tune: number;
	random_3_stereo: number;
	random_3_style: number;
	random_3_sync: number;
	random_3_sync_type: number;
	random_3_tempo: number;
	random_4_frequency: number;
	random_4_keytrack_transpose: number;
	random_4_keytrack_tune: number;
	random_4_stereo: number;
	random_4_style: number;
	random_4_sync: number;
	random_4_sync_type: number;
	random_4_tempo: number;
	reverb_chorus_amount: number;
	reverb_chorus_frequency: number;
	reverb_decay_time: number;
	reverb_delay: number;
	reverb_dry_wet: number;
	reverb_high_shelf_cutoff: number;
	reverb_high_shelf_gain: number;
	reverb_low_shelf_cutoff: number;
	reverb_low_shelf_gain: number;
	reverb_on: number;
	reverb_pre_high_cutoff: number;
	reverb_pre_low_cutoff: number;
	reverb_size: number;
	sample: Sample;
	sample_bounce: number;
	sample_destination: number;
	sample_keytrack: number;
	sample_level: number;
	sample_loop: number;
	sample_on: number;
	sample_pan: number;
	sample_random_phase: number;
	sample_transpose: number;
	sample_transpose_quantize: number;
	sample_tune: number;
	stereo_mode: number;
	stereo_routing: number;
	velocity_track: number;
	view_spectrogram: number;
	voice_amplitude: number;
	voice_override: number;
	voice_priority: number;
	voice_transpose: number;
	voice_tune: number;
	volume: number;
	wavetables: Wavetable[];
}

export interface RootObject {
	author: string;
	comments: string;
	macro1: string;
	macro2: string;
	macro3: string;
	macro4: string;
	preset_style: string;
	settings: Settings;
	synth_version: string;
}