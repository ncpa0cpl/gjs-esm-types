import type cairo from "gi://cairo?version=1.0";
import type HarfBuzz from "gi://HarfBuzz?version=0.0";
import type freetype2 from "gi://freetype2?version=2.0";
import type GObject from "gi://GObject?version=2.0";
import type GLib from "gi://GLib?version=2.0";
import type Gio from "gi://Gio?version=2.0";

/**
 * Pango-1.0
 */

declare namespace Pango {
  export enum Alignment {
    LEFT,
    CENTER,
    RIGHT,
  }
  export enum AttrType {
    INVALID,
    LANGUAGE,
    FAMILY,
    STYLE,
    WEIGHT,
    VARIANT,
    STRETCH,
    SIZE,
    FONT_DESC,
    FOREGROUND,
    BACKGROUND,
    UNDERLINE,
    STRIKETHROUGH,
    RISE,
    SHAPE,
    SCALE,
    FALLBACK,
    LETTER_SPACING,
    UNDERLINE_COLOR,
    STRIKETHROUGH_COLOR,
    ABSOLUTE_SIZE,
    GRAVITY,
    GRAVITY_HINT,
    FONT_FEATURES,
    FOREGROUND_ALPHA,
    BACKGROUND_ALPHA,
    ALLOW_BREAKS,
    SHOW,
    INSERT_HYPHENS,
    OVERLINE,
    OVERLINE_COLOR,
    LINE_HEIGHT,
    ABSOLUTE_LINE_HEIGHT,
    TEXT_TRANSFORM,
    WORD,
    SENTENCE,
    BASELINE_SHIFT,
    FONT_SCALE,
  }
  export enum BaselineShift {
    NONE,
    SUPERSCRIPT,
    SUBSCRIPT,
  }
  export enum BidiType {
    L,
    LRE,
    LRO,
    R,
    AL,
    RLE,
    RLO,
    PDF,
    EN,
    ES,
    ET,
    AN,
    CS,
    NSM,
    BN,
    B,
    S,
    WS,
    ON,
    LRI,
    RLI,
    FSI,
    PDI,
  }
  export enum CoverageLevel {
    NONE,
    FALLBACK,
    APPROXIMATE,
    EXACT,
  }
  export enum Direction {
    LTR,
    RTL,
    TTB_LTR,
    TTB_RTL,
    WEAK_LTR,
    WEAK_RTL,
    NEUTRAL,
  }
  export enum EllipsizeMode {
    NONE,
    START,
    MIDDLE,
    END,
  }
  export enum FontScale {
    NONE,
    SUPERSCRIPT,
    SUBSCRIPT,
    SMALL_CAPS,
  }
  export enum Gravity {
    SOUTH,
    EAST,
    NORTH,
    WEST,
    AUTO,
  }
  export enum GravityHint {
    NATURAL,
    STRONG,
    LINE,
  }
  export enum LayoutDeserializeError {
    INVALID,
    INVALID_VALUE,
    MISSING_VALUE,
  }
  export enum Overline {
    NONE,
    SINGLE,
  }
  export enum RenderPart {
    FOREGROUND,
    BACKGROUND,
    UNDERLINE,
    STRIKETHROUGH,
    OVERLINE,
  }
  export enum Script {
    INVALID_CODE,
    COMMON,
    INHERITED,
    ARABIC,
    ARMENIAN,
    BENGALI,
    BOPOMOFO,
    CHEROKEE,
    COPTIC,
    CYRILLIC,
    DESERET,
    DEVANAGARI,
    ETHIOPIC,
    GEORGIAN,
    GOTHIC,
    GREEK,
    GUJARATI,
    GURMUKHI,
    HAN,
    HANGUL,
    HEBREW,
    HIRAGANA,
    KANNADA,
    KATAKANA,
    KHMER,
    LAO,
    LATIN,
    MALAYALAM,
    MONGOLIAN,
    MYANMAR,
    OGHAM,
    OLD_ITALIC,
    ORIYA,
    RUNIC,
    SINHALA,
    SYRIAC,
    TAMIL,
    TELUGU,
    THAANA,
    THAI,
    TIBETAN,
    CANADIAN_ABORIGINAL,
    YI,
    TAGALOG,
    HANUNOO,
    BUHID,
    TAGBANWA,
    BRAILLE,
    CYPRIOT,
    LIMBU,
    OSMANYA,
    SHAVIAN,
    LINEAR_B,
    TAI_LE,
    UGARITIC,
    NEW_TAI_LUE,
    BUGINESE,
    GLAGOLITIC,
    TIFINAGH,
    SYLOTI_NAGRI,
    OLD_PERSIAN,
    KHAROSHTHI,
    UNKNOWN,
    BALINESE,
    CUNEIFORM,
    PHOENICIAN,
    PHAGS_PA,
    NKO,
    KAYAH_LI,
    LEPCHA,
    REJANG,
    SUNDANESE,
    SAURASHTRA,
    CHAM,
    OL_CHIKI,
    VAI,
    CARIAN,
    LYCIAN,
    LYDIAN,
    BATAK,
    BRAHMI,
    MANDAIC,
    CHAKMA,
    MEROITIC_CURSIVE,
    MEROITIC_HIEROGLYPHS,
    MIAO,
    SHARADA,
    SORA_SOMPENG,
    TAKRI,
    BASSA_VAH,
    CAUCASIAN_ALBANIAN,
    DUPLOYAN,
    ELBASAN,
    GRANTHA,
    KHOJKI,
    KHUDAWADI,
    LINEAR_A,
    MAHAJANI,
    MANICHAEAN,
    MENDE_KIKAKUI,
    MODI,
    MRO,
    NABATAEAN,
    OLD_NORTH_ARABIAN,
    OLD_PERMIC,
    PAHAWH_HMONG,
    PALMYRENE,
    PAU_CIN_HAU,
    PSALTER_PAHLAVI,
    SIDDHAM,
    TIRHUTA,
    WARANG_CITI,
    AHOM,
    ANATOLIAN_HIEROGLYPHS,
    HATRAN,
    MULTANI,
    OLD_HUNGARIAN,
    SIGNWRITING,
  }
  export enum Stretch {
    ULTRA_CONDENSED,
    EXTRA_CONDENSED,
    CONDENSED,
    SEMI_CONDENSED,
    NORMAL,
    SEMI_EXPANDED,
    EXPANDED,
    EXTRA_EXPANDED,
    ULTRA_EXPANDED,
  }
  export enum Style {
    NORMAL,
    OBLIQUE,
    ITALIC,
  }
  export enum TabAlign {
    LEFT,
    RIGHT,
    CENTER,
    DECIMAL,
  }
  export enum TextTransform {
    NONE,
    LOWERCASE,
    UPPERCASE,
    CAPITALIZE,
  }
  export enum Underline {
    NONE,
    SINGLE,
    DOUBLE,
    LOW,
    ERROR,
    SINGLE_LINE,
    DOUBLE_LINE,
    ERROR_LINE,
  }
  export enum Variant {
    NORMAL,
    SMALL_CAPS,
    ALL_SMALL_CAPS,
    PETITE_CAPS,
    ALL_PETITE_CAPS,
    UNICASE,
    TITLE_CAPS,
  }
  export enum Weight {
    THIN,
    ULTRALIGHT,
    LIGHT,
    SEMILIGHT,
    BOOK,
    NORMAL,
    MEDIUM,
    SEMIBOLD,
    BOLD,
    ULTRABOLD,
    HEAVY,
    ULTRAHEAVY,
  }
  export enum WrapMode {
    WORD,
    CHAR,
    WORD_CHAR,
  }
  export enum FontMask {
    FAMILY,
    STYLE,
    VARIANT,
    WEIGHT,
    STRETCH,
    SIZE,
    GRAVITY,
    VARIATIONS,
  }
  export enum LayoutDeserializeFlags {
    DEFAULT,
    CONTEXT,
  }
  export enum LayoutSerializeFlags {
    DEFAULT,
    CONTEXT,
    OUTPUT,
  }
  export enum ShapeFlags {
    NONE,
    ROUND_POSITIONS,
  }
  export enum ShowFlags {
    NONE,
    SPACES,
    LINE_BREAKS,
    IGNORABLES,
  }
  export const ANALYSIS_FLAG_CENTERED_BASELINE: number;
  export const ANALYSIS_FLAG_IS_ELLIPSIS: number;
  export const ANALYSIS_FLAG_NEED_HYPHEN: number;
  export const ATTR_INDEX_FROM_TEXT_BEGINNING: number;
  export const ATTR_INDEX_TO_TEXT_END: number;
  export const GLYPH_EMPTY: Glyph;
  export const GLYPH_INVALID_INPUT: Glyph;
  export const GLYPH_UNKNOWN_FLAG: Glyph;
  export const SCALE: number;
  export const VERSION_MAJOR: number;
  export const VERSION_MICRO: number;
  export const VERSION_MINOR: number;
  export const VERSION_STRING: string;
  export function attr_allow_breaks_new(allow_breaks: boolean): Attribute;
  export function attr_background_alpha_new(alpha: number): Attribute;
  export function attr_background_new(
    red: number,
    green: number,
    blue: number
  ): Attribute;
  export function attr_baseline_shift_new(shift: number): Attribute;
  export function attr_break(
    text: string,
    length: number,
    attr_list: AttrList,
    offset: number,
    attrs: LogAttr[]
  ): void;
  export function attr_fallback_new(enable_fallback: boolean): Attribute;
  export function attr_family_new(family: string): Attribute;
  export function attr_font_desc_new(desc: FontDescription): Attribute;
  export function attr_font_features_new(features: string): Attribute;
  export function attr_font_scale_new(scale: FontScale): Attribute;
  export function attr_foreground_alpha_new(alpha: number): Attribute;
  export function attr_foreground_new(
    red: number,
    green: number,
    blue: number
  ): Attribute;
  export function attr_gravity_hint_new(hint: GravityHint): Attribute;
  export function attr_gravity_new(gravity: Gravity): Attribute;
  export function attr_insert_hyphens_new(insert_hyphens: boolean): Attribute;
  export function attr_language_new(language: Language): Attribute;
  export function attr_letter_spacing_new(letter_spacing: number): Attribute;
  export function attr_line_height_new(factor: number): Attribute;
  export function attr_line_height_new_absolute(height: number): Attribute;
  export function attr_list_from_string(text: string): AttrList | null;
  export function attr_overline_color_new(
    red: number,
    green: number,
    blue: number
  ): Attribute;
  export function attr_overline_new(overline: Overline): Attribute;
  export function attr_rise_new(rise: number): Attribute;
  export function attr_scale_new(scale_factor: number): Attribute;
  export function attr_sentence_new(): Attribute;
  export function attr_shape_new(
    ink_rect: Rectangle,
    logical_rect: Rectangle
  ): Attribute;
  export function attr_shape_new_with_data(
    ink_rect: Rectangle,
    logical_rect: Rectangle,
    data?: object | null,
    copy_func?: AttrDataCopyFunc | null
  ): Attribute;
  export function attr_show_new(flags: ShowFlags): Attribute;
  export function attr_size_new(size: number): Attribute;
  export function attr_size_new_absolute(size: number): Attribute;
  export function attr_stretch_new(stretch: Stretch): Attribute;
  export function attr_strikethrough_color_new(
    red: number,
    green: number,
    blue: number
  ): Attribute;
  export function attr_strikethrough_new(strikethrough: boolean): Attribute;
  export function attr_style_new(style: Style): Attribute;
  export function attr_text_transform_new(transform: TextTransform): Attribute;
  export function attr_type_get_name(type: AttrType): string | null;
  export function attr_type_register(name: string): AttrType;
  export function attr_underline_color_new(
    red: number,
    green: number,
    blue: number
  ): Attribute;
  export function attr_underline_new(underline: Underline): Attribute;
  export function attr_variant_new(variant: Variant): Attribute;
  export function attr_weight_new(weight: Weight): Attribute;
  export function attr_word_new(): Attribute;
  export function bidi_type_for_unichar(ch: number): BidiType;
  export function break_TODO(
    text: string,
    length: number,
    analysis: Analysis,
    attrs: LogAttr[]
  ): void;
  export function default_break(
    text: string,
    length: number,
    analysis: Analysis | null,
    attrs: LogAttr,
    attrs_len: number
  ): void;
  export function extents_to_pixels(
    inclusive?: Rectangle | null,
    nearest?: Rectangle | null
  ): void;
  export function find_base_dir(text: string, length: number): Direction;
  export function find_paragraph_boundary(
    text: string,
    length: number
  ): [
    /* paragraph_delimiter_index */ number,
    /* next_paragraph_start */ number
  ];
  export function font_description_from_string(str: string): FontDescription;
  export function get_log_attrs(
    text: string,
    length: number,
    level: number,
    language: Language,
    attrs: LogAttr[]
  ): void;
  export function get_mirror_char(ch: number, mirrored_ch: number): boolean;
  export function gravity_get_for_matrix(matrix?: Matrix | null): Gravity;
  export function gravity_get_for_script(
    script: Script,
    base_gravity: Gravity,
    hint: GravityHint
  ): Gravity;
  export function gravity_get_for_script_and_width(
    script: Script,
    wide: boolean,
    base_gravity: Gravity,
    hint: GravityHint
  ): Gravity;
  export function gravity_to_rotation(gravity: Gravity): number;
  export function is_zero_width(ch: number): boolean;
  export function itemize(
    context: Context,
    text: string,
    start_index: number,
    length: number,
    attrs: AttrList,
    cached_iter?: AttrIterator | null
  ): Item[];
  export function itemize_with_base_dir(
    context: Context,
    base_dir: Direction,
    text: string,
    start_index: number,
    length: number,
    attrs: AttrList,
    cached_iter?: AttrIterator | null
  ): Item[];
  export function language_from_string(
    language?: string | null
  ): Language | null;
  export function language_get_default(): Language;
  export function language_get_preferred(): Language[] | null;
  export function layout_deserialize_error_quark(): GLib.Quark;
  export function log2vis_get_embedding_levels(
    text: string,
    length: number,
    pbase_dir: Direction
  ): number;
  export function markup_parser_finish(
    context: GLib.MarkupParseContext
  ): [
    /* returnType */ boolean,
    /* attr_list */ AttrList | null,
    /* text */ string | null,
    /* accel_char */ number | null
  ];
  export function markup_parser_new(
    accel_marker: number
  ): GLib.MarkupParseContext;
  export function parse_enum(
    type: GObject.Type,
    str: string | null,
    warn: boolean
  ): [
    /* returnType */ boolean,
    /* value */ number | null,
    /* possible_values */ string | null
  ];
  export function parse_markup(
    markup_text: string,
    length: number,
    accel_marker: number
  ): [
    /* returnType */ boolean,
    /* attr_list */ AttrList | null,
    /* text */ string | null,
    /* accel_char */ number | null
  ];
  export function parse_stretch(
    str: string,
    warn: boolean
  ): [/* returnType */ boolean, /* stretch */ Stretch];
  export function parse_style(
    str: string,
    warn: boolean
  ): [/* returnType */ boolean, /* style */ Style];
  export function parse_variant(
    str: string,
    warn: boolean
  ): [/* returnType */ boolean, /* variant */ Variant];
  export function parse_weight(
    str: string,
    warn: boolean
  ): [/* returnType */ boolean, /* weight */ Weight];
  export function quantize_line_geometry(
    thickness: number,
    position: number
  ): void;
  export function read_line(stream: object | null, str: GLib.String): number;
  export function reorder_items(items: Item[]): Item[];
  export function scan_int(
    pos: string
  ): [/* returnType */ boolean, /* out */ number];
  export function scan_string(pos: string, out: GLib.String): boolean;
  export function scan_word(pos: string, out: GLib.String): boolean;
  export function script_for_unichar(ch: number): Script;
  export function script_get_sample_language(script: Script): Language | null;
  export function shape(
    text: string,
    length: number,
    analysis: Analysis,
    glyphs: GlyphString
  ): void;
  export function shape_full(
    item_text: string,
    item_length: number,
    paragraph_text: string | null,
    paragraph_length: number,
    analysis: Analysis,
    glyphs: GlyphString
  ): void;
  export function shape_item(
    item: Item,
    paragraph_text: string | null,
    paragraph_length: number,
    log_attrs: LogAttr | null,
    glyphs: GlyphString,
    flags: ShapeFlags
  ): void;
  export function shape_with_flags(
    item_text: string,
    item_length: number,
    paragraph_text: string | null,
    paragraph_length: number,
    analysis: Analysis,
    glyphs: GlyphString,
    flags: ShapeFlags
  ): void;
  export function skip_space(pos: string): boolean;
  export function split_file_list(str: string): string[];
  export function tab_array_from_string(text: string): TabArray | null;
  export function tailor_break(
    text: string,
    length: number,
    analysis: Analysis,
    offset: number,
    attrs: LogAttr[]
  ): void;
  export function trim_string(str: string): string;
  export function unichar_direction(ch: number): Direction;
  export function units_from_double(d: number): number;
  export function units_to_double(i: number): number;
  export function version(): number;
  export function version_check(
    required_major: number,
    required_minor: number,
    required_micro: number
  ): string | null;
  export function version_string(): string;
  export interface AttrDataCopyFunc {
    (): object | null;
  }
  export interface AttrFilterFunc {
    (attribute: Attribute): boolean;
  }
  export interface FontsetForeachFunc {
    (fontset: Fontset, font: Font): boolean;
  }
  export interface Context_ConstructProps
    extends GObject.Object_ConstructProps {}
  export class Context {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance;
    /* Methods of Pango.Context */
    changed(): void;
    get_base_dir(): Direction;
    get_base_gravity(): Gravity;
    get_font_description(): FontDescription | null;
    get_font_map(): FontMap | null;
    get_gravity(): Gravity;
    get_gravity_hint(): GravityHint;
    get_language(): Language;
    get_matrix(): Matrix | null;
    get_metrics(
      desc?: FontDescription | null,
      language?: Language | null
    ): FontMetrics;
    get_round_glyph_positions(): boolean;
    get_serial(): number;
    list_families(): /* families */ FontFamily[];
    load_font(desc: FontDescription): Font | null;
    load_fontset(desc: FontDescription, language: Language): Fontset | null;
    set_base_dir(direction: Direction): void;
    set_base_gravity(gravity: Gravity): void;
    set_font_description(desc?: FontDescription | null): void;
    set_font_map(font_map?: FontMap | null): void;
    set_gravity_hint(hint: GravityHint): void;
    set_language(language?: Language | null): void;
    set_matrix(matrix?: Matrix | null): void;
    set_round_glyph_positions(round_positions: boolean): void;
    /* Methods of GObject.Object */
    bind_property(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags
    ): GObject.Binding;
    bind_property_full(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags,
      transform_to: GObject.Closure,
      transform_from: GObject.Closure
    ): GObject.Binding;
    force_floating(): void;
    freeze_notify(): void;
    get_data(key: string): object | null;
    get_property(property_name: string, value: GObject.Value): void;
    get_qdata(quark: GLib.Quark): object | null;
    getv(names: string[], values: GObject.Value[]): void;
    is_floating(): boolean;
    notify(property_name: string): void;
    notify_by_pspec(pspec: GObject.ParamSpec): void;
    ref(): GObject.Object;
    ref_sink(): GObject.Object;
    run_dispose(): void;
    set_data(key: string, data?: object | null): void;
    set_property(property_name: string, value: GObject.Value): void;
    steal_data(key: string): object | null;
    steal_qdata(quark: GLib.Quark): object | null;
    thaw_notify(): void;
    unref(): void;
    watch_closure(closure: GObject.Closure): void;
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void;
    vfunc_dispatch_properties_changed?(
      n_pspecs: number,
      pspecs: GObject.ParamSpec
    ): void;
    vfunc_dispose?(): void;
    vfunc_finalize?(): void;
    vfunc_get_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    vfunc_notify?(pspec: GObject.ParamSpec): void;
    vfunc_set_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    /* Signals of GObject.Object */
    connect(
      sigName: "notify",
      callback: ($obj: Context, pspec: GObject.ParamSpec) => void
    ): number;
    connect_after(
      sigName: "notify",
      callback: ($obj: Context, pspec: GObject.ParamSpec) => void
    ): number;
    emit(sigName: "notify", pspec: GObject.ParamSpec): void;
    connect(sigName: string, callback: any): number;
    connect_after(sigName: string, callback: any): number;
    emit(sigName: string, ...args: any[]): void;
    disconnect(id: number): void;
    static name: string;
    constructor(config?: Context_ConstructProps);
    _init(config?: Context_ConstructProps): void;
    static new(): Context;
    static $gtype: GObject.Type;
  }
  export interface Coverage_ConstructProps
    extends GObject.Object_ConstructProps {}
  export class Coverage {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance;
    /* Methods of Pango.Coverage */
    copy(): Coverage;
    get(index_: number): CoverageLevel;
    max(other: Coverage): void;
    ref(): Coverage;
    set(index_: number, level: CoverageLevel): void;
    to_bytes(): /* bytes */ Gjs.byteArray.ByteArray;
    unref(): void;
    /* Methods of GObject.Object */
    bind_property(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags
    ): GObject.Binding;
    bind_property_full(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags,
      transform_to: GObject.Closure,
      transform_from: GObject.Closure
    ): GObject.Binding;
    force_floating(): void;
    freeze_notify(): void;
    get_data(key: string): object | null;
    get_property(property_name: string, value: GObject.Value): void;
    get_qdata(quark: GLib.Quark): object | null;
    getv(names: string[], values: GObject.Value[]): void;
    is_floating(): boolean;
    notify(property_name: string): void;
    notify_by_pspec(pspec: GObject.ParamSpec): void;
    ref_sink(): GObject.Object;
    run_dispose(): void;
    set_data(key: string, data?: object | null): void;
    set_property(property_name: string, value: GObject.Value): void;
    steal_data(key: string): object | null;
    steal_qdata(quark: GLib.Quark): object | null;
    thaw_notify(): void;
    watch_closure(closure: GObject.Closure): void;
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void;
    vfunc_dispatch_properties_changed?(
      n_pspecs: number,
      pspecs: GObject.ParamSpec
    ): void;
    vfunc_dispose?(): void;
    vfunc_finalize?(): void;
    vfunc_get_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    vfunc_notify?(pspec: GObject.ParamSpec): void;
    vfunc_set_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    /* Signals of GObject.Object */
    connect(
      sigName: "notify",
      callback: ($obj: Coverage, pspec: GObject.ParamSpec) => void
    ): number;
    connect_after(
      sigName: "notify",
      callback: ($obj: Coverage, pspec: GObject.ParamSpec) => void
    ): number;
    emit(sigName: "notify", pspec: GObject.ParamSpec): void;
    connect(sigName: string, callback: any): number;
    connect_after(sigName: string, callback: any): number;
    emit(sigName: string, ...args: any[]): void;
    disconnect(id: number): void;
    static name: string;
    constructor(config?: Coverage_ConstructProps);
    _init(config?: Coverage_ConstructProps): void;
    static new(): Coverage;
    static from_bytes(bytes: Gjs.byteArray.ByteArray): Coverage | null;
    static $gtype: GObject.Type;
  }
  export interface Font_ConstructProps extends GObject.Object_ConstructProps {}
  export class Font {
    /* Fields of Pango.Font */
    parent_instance: GObject.Object;
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance;
    /* Methods of Pango.Font */
    describe(): FontDescription;
    describe_with_absolute_size(): FontDescription;
    get_coverage(language: Language): Coverage;
    get_face(): FontFace;
    get_features(num_features: number): /* features */ HarfBuzz.feature_t[];
    get_font_map(): FontMap | null;
    get_glyph_extents(
      glyph: Glyph
    ): [/* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null];
    get_languages(): Language[] | null;
    get_metrics(language?: Language | null): FontMetrics;
    has_char(wc: number): boolean;
    serialize(): Gjs.byteArray.ByteArray;
    /* Methods of GObject.Object */
    bind_property(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags
    ): GObject.Binding;
    bind_property_full(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags,
      transform_to: GObject.Closure,
      transform_from: GObject.Closure
    ): GObject.Binding;
    force_floating(): void;
    freeze_notify(): void;
    get_data(key: string): object | null;
    get_property(property_name: string, value: GObject.Value): void;
    get_qdata(quark: GLib.Quark): object | null;
    getv(names: string[], values: GObject.Value[]): void;
    is_floating(): boolean;
    notify(property_name: string): void;
    notify_by_pspec(pspec: GObject.ParamSpec): void;
    ref(): GObject.Object;
    ref_sink(): GObject.Object;
    run_dispose(): void;
    set_data(key: string, data?: object | null): void;
    set_property(property_name: string, value: GObject.Value): void;
    steal_data(key: string): object | null;
    steal_qdata(quark: GLib.Quark): object | null;
    thaw_notify(): void;
    unref(): void;
    watch_closure(closure: GObject.Closure): void;
    /* Virtual methods of Pango.Font */
    vfunc_create_hb_font?(): HarfBuzz.font_t;
    vfunc_describe?(): FontDescription;
    vfunc_describe_absolute?(): FontDescription;
    vfunc_get_coverage?(language: Language): Coverage;
    vfunc_get_features?(
      num_features: number
    ): /* features */ HarfBuzz.feature_t[];
    vfunc_get_font_map?(): FontMap | null;
    vfunc_get_glyph_extents?(
      glyph: Glyph
    ): [/* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null];
    vfunc_get_metrics?(language?: Language | null): FontMetrics;
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void;
    vfunc_dispatch_properties_changed?(
      n_pspecs: number,
      pspecs: GObject.ParamSpec
    ): void;
    vfunc_dispose?(): void;
    vfunc_finalize?(): void;
    vfunc_get_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    vfunc_notify?(pspec: GObject.ParamSpec): void;
    vfunc_set_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    /* Signals of GObject.Object */
    connect(
      sigName: "notify",
      callback: ($obj: Font, pspec: GObject.ParamSpec) => void
    ): number;
    connect_after(
      sigName: "notify",
      callback: ($obj: Font, pspec: GObject.ParamSpec) => void
    ): number;
    emit(sigName: "notify", pspec: GObject.ParamSpec): void;
    connect(sigName: string, callback: any): number;
    connect_after(sigName: string, callback: any): number;
    emit(sigName: string, ...args: any[]): void;
    disconnect(id: number): void;
    static name: string;
    constructor(config?: Font_ConstructProps);
    _init(config?: Font_ConstructProps): void;
    static descriptions_free(descs: FontDescription[] | null): void;
    static deserialize(
      context: Context,
      bytes: Gjs.byteArray.ByteArray
    ): Font | null;
    static $gtype: GObject.Type;
  }
  export interface FontFace_ConstructProps
    extends GObject.Object_ConstructProps {}
  export class FontFace {
    /* Fields of Pango.FontFace */
    parent_instance: GObject.Object;
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance;
    /* Methods of Pango.FontFace */
    describe(): FontDescription;
    get_face_name(): string;
    get_family(): FontFamily;
    is_synthesized(): boolean;
    list_sizes(): /* sizes */ number[] | null;
    /* Methods of GObject.Object */
    bind_property(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags
    ): GObject.Binding;
    bind_property_full(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags,
      transform_to: GObject.Closure,
      transform_from: GObject.Closure
    ): GObject.Binding;
    force_floating(): void;
    freeze_notify(): void;
    get_data(key: string): object | null;
    get_property(property_name: string, value: GObject.Value): void;
    get_qdata(quark: GLib.Quark): object | null;
    getv(names: string[], values: GObject.Value[]): void;
    is_floating(): boolean;
    notify(property_name: string): void;
    notify_by_pspec(pspec: GObject.ParamSpec): void;
    ref(): GObject.Object;
    ref_sink(): GObject.Object;
    run_dispose(): void;
    set_data(key: string, data?: object | null): void;
    set_property(property_name: string, value: GObject.Value): void;
    steal_data(key: string): object | null;
    steal_qdata(quark: GLib.Quark): object | null;
    thaw_notify(): void;
    unref(): void;
    watch_closure(closure: GObject.Closure): void;
    /* Virtual methods of Pango.FontFace */
    vfunc_describe?(): FontDescription;
    vfunc_get_face_name?(): string;
    vfunc_get_family?(): FontFamily;
    vfunc_is_synthesized?(): boolean;
    vfunc_list_sizes?(): /* sizes */ number[] | null;
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void;
    vfunc_dispatch_properties_changed?(
      n_pspecs: number,
      pspecs: GObject.ParamSpec
    ): void;
    vfunc_dispose?(): void;
    vfunc_finalize?(): void;
    vfunc_get_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    vfunc_notify?(pspec: GObject.ParamSpec): void;
    vfunc_set_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    /* Signals of GObject.Object */
    connect(
      sigName: "notify",
      callback: ($obj: FontFace, pspec: GObject.ParamSpec) => void
    ): number;
    connect_after(
      sigName: "notify",
      callback: ($obj: FontFace, pspec: GObject.ParamSpec) => void
    ): number;
    emit(sigName: "notify", pspec: GObject.ParamSpec): void;
    connect(sigName: string, callback: any): number;
    connect_after(sigName: string, callback: any): number;
    emit(sigName: string, ...args: any[]): void;
    disconnect(id: number): void;
    static name: string;
    constructor(config?: FontFace_ConstructProps);
    _init(config?: FontFace_ConstructProps): void;
    static $gtype: GObject.Type;
  }
  export interface FontFamily_ConstructProps
    extends GObject.Object_ConstructProps {}
  export class FontFamily {
    /* Properties of Pango.FontFamily */
    readonly item_type: GObject.Type;
    readonly n_items: number;
    /* Fields of Pango.FontFamily */
    parent_instance: GObject.Object;
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance;
    /* Methods of Pango.FontFamily */
    get_face(name?: string | null): FontFace | null;
    get_name(): string;
    is_monospace(): boolean;
    is_variable(): boolean;
    list_faces(): /* faces */ FontFace[] | null;
    /* Methods of GObject.Object */
    bind_property(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags
    ): GObject.Binding;
    bind_property_full(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags,
      transform_to: GObject.Closure,
      transform_from: GObject.Closure
    ): GObject.Binding;
    force_floating(): void;
    freeze_notify(): void;
    get_data(key: string): object | null;
    get_property(property_name: string, value: GObject.Value): void;
    get_qdata(quark: GLib.Quark): object | null;
    getv(names: string[], values: GObject.Value[]): void;
    is_floating(): boolean;
    notify(property_name: string): void;
    notify_by_pspec(pspec: GObject.ParamSpec): void;
    ref(): GObject.Object;
    ref_sink(): GObject.Object;
    run_dispose(): void;
    set_data(key: string, data?: object | null): void;
    set_property(property_name: string, value: GObject.Value): void;
    steal_data(key: string): object | null;
    steal_qdata(quark: GLib.Quark): object | null;
    thaw_notify(): void;
    unref(): void;
    watch_closure(closure: GObject.Closure): void;
    /* Methods of Gio.ListModel */
    get_item_type(): GObject.Type;
    get_n_items(): number;
    get_item(position: number): GObject.Object | null;
    items_changed(position: number, removed: number, added: number): void;
    /* Virtual methods of Pango.FontFamily */
    vfunc_get_face?(name?: string | null): FontFace | null;
    vfunc_get_name?(): string;
    vfunc_is_monospace?(): boolean;
    vfunc_is_variable?(): boolean;
    vfunc_list_faces?(): /* faces */ FontFace[] | null;
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void;
    vfunc_dispatch_properties_changed?(
      n_pspecs: number,
      pspecs: GObject.ParamSpec
    ): void;
    vfunc_dispose?(): void;
    vfunc_finalize?(): void;
    vfunc_get_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    vfunc_notify?(pspec: GObject.ParamSpec): void;
    vfunc_set_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    /* Signals of GObject.Object */
    connect(
      sigName: "notify",
      callback: ($obj: FontFamily, pspec: GObject.ParamSpec) => void
    ): number;
    connect_after(
      sigName: "notify",
      callback: ($obj: FontFamily, pspec: GObject.ParamSpec) => void
    ): number;
    emit(sigName: "notify", pspec: GObject.ParamSpec): void;
    /* Signals of Gio.ListModel */
    connect(
      sigName: "items-changed",
      callback: (
        $obj: FontFamily,
        position: number,
        removed: number,
        added: number
      ) => void
    ): number;
    connect_after(
      sigName: "items-changed",
      callback: (
        $obj: FontFamily,
        position: number,
        removed: number,
        added: number
      ) => void
    ): number;
    emit(
      sigName: "items-changed",
      position: number,
      removed: number,
      added: number
    ): void;
    connect(
      sigName: "notify::item-type",
      callback: ($obj: FontFamily, pspec: GObject.ParamSpec) => void
    ): number;
    connect_after(
      sigName: "notify::item-type",
      callback: ($obj: FontFamily, pspec: GObject.ParamSpec) => void
    ): number;
    connect(
      sigName: "notify::n-items",
      callback: ($obj: FontFamily, pspec: GObject.ParamSpec) => void
    ): number;
    connect_after(
      sigName: "notify::n-items",
      callback: ($obj: FontFamily, pspec: GObject.ParamSpec) => void
    ): number;
    connect(sigName: string, callback: any): number;
    connect_after(sigName: string, callback: any): number;
    emit(sigName: string, ...args: any[]): void;
    disconnect(id: number): void;
    static name: string;
    constructor(config?: FontFamily_ConstructProps);
    _init(config?: FontFamily_ConstructProps): void;
    static $gtype: GObject.Type;
  }
  export interface FontMap_ConstructProps
    extends GObject.Object_ConstructProps {}
  export class FontMap {
    /* Properties of Pango.FontMap */
    readonly item_type: GObject.Type;
    readonly n_items: number;
    /* Fields of Pango.FontMap */
    parent_instance: GObject.Object;
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance;
    /* Methods of Pango.FontMap */
    changed(): void;
    create_context(): Context;
    get_family(name: string): FontFamily;
    get_serial(): number;
    list_families(): /* families */ FontFamily[];
    load_font(context: Context, desc: FontDescription): Font | null;
    load_fontset(
      context: Context,
      desc: FontDescription,
      language: Language
    ): Fontset | null;
    /* Methods of GObject.Object */
    bind_property(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags
    ): GObject.Binding;
    bind_property_full(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags,
      transform_to: GObject.Closure,
      transform_from: GObject.Closure
    ): GObject.Binding;
    force_floating(): void;
    freeze_notify(): void;
    get_data(key: string): object | null;
    get_property(property_name: string, value: GObject.Value): void;
    get_qdata(quark: GLib.Quark): object | null;
    getv(names: string[], values: GObject.Value[]): void;
    is_floating(): boolean;
    notify(property_name: string): void;
    notify_by_pspec(pspec: GObject.ParamSpec): void;
    ref(): GObject.Object;
    ref_sink(): GObject.Object;
    run_dispose(): void;
    set_data(key: string, data?: object | null): void;
    set_property(property_name: string, value: GObject.Value): void;
    steal_data(key: string): object | null;
    steal_qdata(quark: GLib.Quark): object | null;
    thaw_notify(): void;
    unref(): void;
    watch_closure(closure: GObject.Closure): void;
    /* Methods of Gio.ListModel */
    get_item_type(): GObject.Type;
    get_n_items(): number;
    get_item(position: number): GObject.Object | null;
    items_changed(position: number, removed: number, added: number): void;
    /* Virtual methods of Pango.FontMap */
    vfunc_changed?(): void;
    vfunc_get_family?(name: string): FontFamily;
    vfunc_get_serial?(): number;
    vfunc_list_families?(): /* families */ FontFamily[];
    vfunc_load_font?(context: Context, desc: FontDescription): Font | null;
    vfunc_load_fontset?(
      context: Context,
      desc: FontDescription,
      language: Language
    ): Fontset | null;
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void;
    vfunc_dispatch_properties_changed?(
      n_pspecs: number,
      pspecs: GObject.ParamSpec
    ): void;
    vfunc_dispose?(): void;
    vfunc_finalize?(): void;
    vfunc_get_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    vfunc_notify?(pspec: GObject.ParamSpec): void;
    vfunc_set_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    /* Signals of GObject.Object */
    connect(
      sigName: "notify",
      callback: ($obj: FontMap, pspec: GObject.ParamSpec) => void
    ): number;
    connect_after(
      sigName: "notify",
      callback: ($obj: FontMap, pspec: GObject.ParamSpec) => void
    ): number;
    emit(sigName: "notify", pspec: GObject.ParamSpec): void;
    /* Signals of Gio.ListModel */
    connect(
      sigName: "items-changed",
      callback: (
        $obj: FontMap,
        position: number,
        removed: number,
        added: number
      ) => void
    ): number;
    connect_after(
      sigName: "items-changed",
      callback: (
        $obj: FontMap,
        position: number,
        removed: number,
        added: number
      ) => void
    ): number;
    emit(
      sigName: "items-changed",
      position: number,
      removed: number,
      added: number
    ): void;
    connect(
      sigName: "notify::item-type",
      callback: ($obj: FontMap, pspec: GObject.ParamSpec) => void
    ): number;
    connect_after(
      sigName: "notify::item-type",
      callback: ($obj: FontMap, pspec: GObject.ParamSpec) => void
    ): number;
    connect(
      sigName: "notify::n-items",
      callback: ($obj: FontMap, pspec: GObject.ParamSpec) => void
    ): number;
    connect_after(
      sigName: "notify::n-items",
      callback: ($obj: FontMap, pspec: GObject.ParamSpec) => void
    ): number;
    connect(sigName: string, callback: any): number;
    connect_after(sigName: string, callback: any): number;
    emit(sigName: string, ...args: any[]): void;
    disconnect(id: number): void;
    static name: string;
    constructor(config?: FontMap_ConstructProps);
    _init(config?: FontMap_ConstructProps): void;
    static $gtype: GObject.Type;
  }
  export interface Fontset_ConstructProps
    extends GObject.Object_ConstructProps {}
  export class Fontset {
    /* Fields of Pango.Fontset */
    parent_instance: GObject.Object;
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance;
    /* Methods of Pango.Fontset */
    foreach(func: FontsetForeachFunc): void;
    get_font(wc: number): Font;
    get_metrics(): FontMetrics;
    /* Methods of GObject.Object */
    bind_property(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags
    ): GObject.Binding;
    bind_property_full(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags,
      transform_to: GObject.Closure,
      transform_from: GObject.Closure
    ): GObject.Binding;
    force_floating(): void;
    freeze_notify(): void;
    get_data(key: string): object | null;
    get_property(property_name: string, value: GObject.Value): void;
    get_qdata(quark: GLib.Quark): object | null;
    getv(names: string[], values: GObject.Value[]): void;
    is_floating(): boolean;
    notify(property_name: string): void;
    notify_by_pspec(pspec: GObject.ParamSpec): void;
    ref(): GObject.Object;
    ref_sink(): GObject.Object;
    run_dispose(): void;
    set_data(key: string, data?: object | null): void;
    set_property(property_name: string, value: GObject.Value): void;
    steal_data(key: string): object | null;
    steal_qdata(quark: GLib.Quark): object | null;
    thaw_notify(): void;
    unref(): void;
    watch_closure(closure: GObject.Closure): void;
    /* Virtual methods of Pango.Fontset */
    vfunc_foreach?(func: FontsetForeachFunc): void;
    vfunc_get_font?(wc: number): Font;
    vfunc_get_language?(): Language;
    vfunc_get_metrics?(): FontMetrics;
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void;
    vfunc_dispatch_properties_changed?(
      n_pspecs: number,
      pspecs: GObject.ParamSpec
    ): void;
    vfunc_dispose?(): void;
    vfunc_finalize?(): void;
    vfunc_get_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    vfunc_notify?(pspec: GObject.ParamSpec): void;
    vfunc_set_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    /* Signals of GObject.Object */
    connect(
      sigName: "notify",
      callback: ($obj: Fontset, pspec: GObject.ParamSpec) => void
    ): number;
    connect_after(
      sigName: "notify",
      callback: ($obj: Fontset, pspec: GObject.ParamSpec) => void
    ): number;
    emit(sigName: "notify", pspec: GObject.ParamSpec): void;
    connect(sigName: string, callback: any): number;
    connect_after(sigName: string, callback: any): number;
    emit(sigName: string, ...args: any[]): void;
    disconnect(id: number): void;
    static name: string;
    constructor(config?: Fontset_ConstructProps);
    _init(config?: Fontset_ConstructProps): void;
    static $gtype: GObject.Type;
  }
  export interface FontsetSimple_ConstructProps
    extends Fontset_ConstructProps {}
  export class FontsetSimple {
    /* Fields of Pango.Fontset */
    parent_instance: GObject.Object;
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance;
    /* Methods of Pango.FontsetSimple */
    append(font: Font): void;
    size(): number;
    /* Methods of Pango.Fontset */
    foreach(func: FontsetForeachFunc): void;
    get_font(wc: number): Font;
    get_metrics(): FontMetrics;
    /* Methods of GObject.Object */
    bind_property(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags
    ): GObject.Binding;
    bind_property_full(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags,
      transform_to: GObject.Closure,
      transform_from: GObject.Closure
    ): GObject.Binding;
    force_floating(): void;
    freeze_notify(): void;
    get_data(key: string): object | null;
    get_property(property_name: string, value: GObject.Value): void;
    get_qdata(quark: GLib.Quark): object | null;
    getv(names: string[], values: GObject.Value[]): void;
    is_floating(): boolean;
    notify(property_name: string): void;
    notify_by_pspec(pspec: GObject.ParamSpec): void;
    ref(): GObject.Object;
    ref_sink(): GObject.Object;
    run_dispose(): void;
    set_data(key: string, data?: object | null): void;
    set_property(property_name: string, value: GObject.Value): void;
    steal_data(key: string): object | null;
    steal_qdata(quark: GLib.Quark): object | null;
    thaw_notify(): void;
    unref(): void;
    watch_closure(closure: GObject.Closure): void;
    /* Virtual methods of Pango.Fontset */
    vfunc_foreach?(func: FontsetForeachFunc): void;
    vfunc_get_font?(wc: number): Font;
    vfunc_get_language?(): Language;
    vfunc_get_metrics?(): FontMetrics;
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void;
    vfunc_dispatch_properties_changed?(
      n_pspecs: number,
      pspecs: GObject.ParamSpec
    ): void;
    vfunc_dispose?(): void;
    vfunc_finalize?(): void;
    vfunc_get_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    vfunc_notify?(pspec: GObject.ParamSpec): void;
    vfunc_set_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    /* Signals of GObject.Object */
    connect(
      sigName: "notify",
      callback: ($obj: FontsetSimple, pspec: GObject.ParamSpec) => void
    ): number;
    connect_after(
      sigName: "notify",
      callback: ($obj: FontsetSimple, pspec: GObject.ParamSpec) => void
    ): number;
    emit(sigName: "notify", pspec: GObject.ParamSpec): void;
    connect(sigName: string, callback: any): number;
    connect_after(sigName: string, callback: any): number;
    emit(sigName: string, ...args: any[]): void;
    disconnect(id: number): void;
    static name: string;
    constructor(config?: FontsetSimple_ConstructProps);
    _init(config?: FontsetSimple_ConstructProps): void;
    static new(language: Language): FontsetSimple;
    static $gtype: GObject.Type;
  }
  export interface Layout_ConstructProps
    extends GObject.Object_ConstructProps {}
  export class Layout {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance;
    /* Methods of Pango.Layout */
    context_changed(): void;
    copy(): Layout;
    get_alignment(): Alignment;
    get_attributes(): AttrList | null;
    get_auto_dir(): boolean;
    get_baseline(): number;
    get_caret_pos(
      index_: number
    ): [/* strong_pos */ Rectangle | null, /* weak_pos */ Rectangle | null];
    get_character_count(): number;
    get_context(): Context;
    get_cursor_pos(
      index_: number
    ): [/* strong_pos */ Rectangle | null, /* weak_pos */ Rectangle | null];
    get_direction(index: number): Direction;
    get_ellipsize(): EllipsizeMode;
    get_extents(): [
      /* ink_rect */ Rectangle | null,
      /* logical_rect */ Rectangle | null
    ];
    get_font_description(): FontDescription | null;
    get_height(): number;
    get_indent(): number;
    get_iter(): LayoutIter;
    get_justify(): boolean;
    get_justify_last_line(): boolean;
    get_line(line: number): LayoutLine | null;
    get_line_count(): number;
    get_line_readonly(line: number): LayoutLine | null;
    get_line_spacing(): number;
    get_lines(): LayoutLine[];
    get_lines_readonly(): LayoutLine[];
    get_log_attrs(): /* attrs */ LogAttr[];
    get_log_attrs_readonly(): LogAttr[];
    get_pixel_extents(): [
      /* ink_rect */ Rectangle | null,
      /* logical_rect */ Rectangle | null
    ];
    get_pixel_size(): [/* width */ number | null, /* height */ number | null];
    get_serial(): number;
    get_single_paragraph_mode(): boolean;
    get_size(): [/* width */ number | null, /* height */ number | null];
    get_spacing(): number;
    get_tabs(): TabArray | null;
    get_text(): string;
    get_unknown_glyphs_count(): number;
    get_width(): number;
    get_wrap(): WrapMode;
    index_to_line_x(
      index_: number,
      trailing: boolean
    ): [/* line */ number | null, /* x_pos */ number | null];
    index_to_pos(index_: number): /* pos */ Rectangle;
    is_ellipsized(): boolean;
    is_wrapped(): boolean;
    move_cursor_visually(
      strong: boolean,
      old_index: number,
      old_trailing: number,
      direction: number
    ): [/* new_index */ number, /* new_trailing */ number];
    serialize(flags: LayoutSerializeFlags): Gjs.byteArray.ByteArray;
    set_alignment(alignment: Alignment): void;
    set_attributes(attrs?: AttrList | null): void;
    set_auto_dir(auto_dir: boolean): void;
    set_ellipsize(ellipsize: EllipsizeMode): void;
    set_font_description(desc?: FontDescription | null): void;
    set_height(height: number): void;
    set_indent(indent: number): void;
    set_justify(justify: boolean): void;
    set_justify_last_line(justify: boolean): void;
    set_line_spacing(factor: number): void;
    set_markup(markup: string, length: number): void;
    set_markup_with_accel(
      markup: string,
      length: number,
      accel_marker: number
    ): /* accel_char */ number | null;
    set_single_paragraph_mode(setting: boolean): void;
    set_spacing(spacing: number): void;
    set_tabs(tabs?: TabArray | null): void;
    set_text(text: string, length: number): void;
    set_width(width: number): void;
    set_wrap(wrap: WrapMode): void;
    write_to_file(flags: LayoutSerializeFlags, filename: string): boolean;
    xy_to_index(
      x: number,
      y: number
    ): [/* returnType */ boolean, /* index_ */ number, /* trailing */ number];
    /* Methods of GObject.Object */
    bind_property(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags
    ): GObject.Binding;
    bind_property_full(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags,
      transform_to: GObject.Closure,
      transform_from: GObject.Closure
    ): GObject.Binding;
    force_floating(): void;
    freeze_notify(): void;
    get_data(key: string): object | null;
    get_property(property_name: string, value: GObject.Value): void;
    get_qdata(quark: GLib.Quark): object | null;
    getv(names: string[], values: GObject.Value[]): void;
    is_floating(): boolean;
    notify(property_name: string): void;
    notify_by_pspec(pspec: GObject.ParamSpec): void;
    ref(): GObject.Object;
    ref_sink(): GObject.Object;
    run_dispose(): void;
    set_data(key: string, data?: object | null): void;
    set_property(property_name: string, value: GObject.Value): void;
    steal_data(key: string): object | null;
    steal_qdata(quark: GLib.Quark): object | null;
    thaw_notify(): void;
    unref(): void;
    watch_closure(closure: GObject.Closure): void;
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void;
    vfunc_dispatch_properties_changed?(
      n_pspecs: number,
      pspecs: GObject.ParamSpec
    ): void;
    vfunc_dispose?(): void;
    vfunc_finalize?(): void;
    vfunc_get_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    vfunc_notify?(pspec: GObject.ParamSpec): void;
    vfunc_set_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    /* Signals of GObject.Object */
    connect(
      sigName: "notify",
      callback: ($obj: Layout, pspec: GObject.ParamSpec) => void
    ): number;
    connect_after(
      sigName: "notify",
      callback: ($obj: Layout, pspec: GObject.ParamSpec) => void
    ): number;
    emit(sigName: "notify", pspec: GObject.ParamSpec): void;
    connect(sigName: string, callback: any): number;
    connect_after(sigName: string, callback: any): number;
    emit(sigName: string, ...args: any[]): void;
    disconnect(id: number): void;
    static name: string;
    constructor(config?: Layout_ConstructProps);
    _init(config?: Layout_ConstructProps): void;
    static new(context: Context): Layout;
    static deserialize(
      context: Context,
      bytes: Gjs.byteArray.ByteArray,
      flags: LayoutDeserializeFlags
    ): Layout | null;
    static $gtype: GObject.Type;
  }
  export interface Renderer_ConstructProps
    extends GObject.Object_ConstructProps {}
  export class Renderer {
    /* Fields of Pango.Renderer */
    matrix: Matrix;
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance;
    /* Methods of Pango.Renderer */
    activate(): void;
    deactivate(): void;
    draw_error_underline(
      x: number,
      y: number,
      width: number,
      height: number
    ): void;
    draw_glyph(font: Font, glyph: Glyph, x: number, y: number): void;
    draw_glyph_item(
      text: string | null,
      glyph_item: GlyphItem,
      x: number,
      y: number
    ): void;
    draw_glyphs(font: Font, glyphs: GlyphString, x: number, y: number): void;
    draw_layout(layout: Layout, x: number, y: number): void;
    draw_layout_line(line: LayoutLine, x: number, y: number): void;
    draw_rectangle(
      part: RenderPart,
      x: number,
      y: number,
      width: number,
      height: number
    ): void;
    draw_trapezoid(
      part: RenderPart,
      y1_: number,
      x11: number,
      x21: number,
      y2: number,
      x12: number,
      x22: number
    ): void;
    get_alpha(part: RenderPart): number;
    get_color(part: RenderPart): Color | null;
    get_layout(): Layout | null;
    get_layout_line(): LayoutLine | null;
    get_matrix(): Matrix | null;
    part_changed(part: RenderPart): void;
    set_alpha(part: RenderPart, alpha: number): void;
    set_color(part: RenderPart, color?: Color | null): void;
    set_matrix(matrix?: Matrix | null): void;
    /* Methods of GObject.Object */
    bind_property(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags
    ): GObject.Binding;
    bind_property_full(
      source_property: string,
      target: GObject.Object,
      target_property: string,
      flags: GObject.BindingFlags,
      transform_to: GObject.Closure,
      transform_from: GObject.Closure
    ): GObject.Binding;
    force_floating(): void;
    freeze_notify(): void;
    get_data(key: string): object | null;
    get_property(property_name: string, value: GObject.Value): void;
    get_qdata(quark: GLib.Quark): object | null;
    getv(names: string[], values: GObject.Value[]): void;
    is_floating(): boolean;
    notify(property_name: string): void;
    notify_by_pspec(pspec: GObject.ParamSpec): void;
    ref(): GObject.Object;
    ref_sink(): GObject.Object;
    run_dispose(): void;
    set_data(key: string, data?: object | null): void;
    set_property(property_name: string, value: GObject.Value): void;
    steal_data(key: string): object | null;
    steal_qdata(quark: GLib.Quark): object | null;
    thaw_notify(): void;
    unref(): void;
    watch_closure(closure: GObject.Closure): void;
    /* Virtual methods of Pango.Renderer */
    vfunc_begin?(): void;
    vfunc_draw_error_underline?(
      x: number,
      y: number,
      width: number,
      height: number
    ): void;
    vfunc_draw_glyph?(font: Font, glyph: Glyph, x: number, y: number): void;
    vfunc_draw_glyph_item?(
      text: string | null,
      glyph_item: GlyphItem,
      x: number,
      y: number
    ): void;
    vfunc_draw_glyphs?(
      font: Font,
      glyphs: GlyphString,
      x: number,
      y: number
    ): void;
    vfunc_draw_rectangle?(
      part: RenderPart,
      x: number,
      y: number,
      width: number,
      height: number
    ): void;
    vfunc_draw_shape?(attr: AttrShape, x: number, y: number): void;
    vfunc_draw_trapezoid?(
      part: RenderPart,
      y1_: number,
      x11: number,
      x21: number,
      y2: number,
      x12: number,
      x22: number
    ): void;
    vfunc_end?(): void;
    vfunc_part_changed?(part: RenderPart): void;
    vfunc_prepare_run?(run: LayoutRun): void;
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void;
    vfunc_dispatch_properties_changed?(
      n_pspecs: number,
      pspecs: GObject.ParamSpec
    ): void;
    vfunc_dispose?(): void;
    vfunc_finalize?(): void;
    vfunc_get_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    vfunc_notify?(pspec: GObject.ParamSpec): void;
    vfunc_set_property?(
      property_id: number,
      value: GObject.Value,
      pspec: GObject.ParamSpec
    ): void;
    /* Signals of GObject.Object */
    connect(
      sigName: "notify",
      callback: ($obj: Renderer, pspec: GObject.ParamSpec) => void
    ): number;
    connect_after(
      sigName: "notify",
      callback: ($obj: Renderer, pspec: GObject.ParamSpec) => void
    ): number;
    emit(sigName: "notify", pspec: GObject.ParamSpec): void;
    connect(sigName: string, callback: any): number;
    connect_after(sigName: string, callback: any): number;
    emit(sigName: string, ...args: any[]): void;
    disconnect(id: number): void;
    static name: string;
    constructor(config?: Renderer_ConstructProps);
    _init(config?: Renderer_ConstructProps): void;
    static $gtype: GObject.Type;
  }
  export class Analysis {
    /* Fields of Pango.Analysis */
    shape_engine: object;
    lang_engine: object;
    font: Font;
    level: number;
    gravity: number;
    flags: number;
    script: number;
    language: Language;
    extra_attrs: object[];
    static name: string;
  }
  export class AttrClass {
    /* Fields of Pango.AttrClass */
    type: AttrType;
    copy: any;
    destroy: any;
    equal: any;
    static name: string;
  }
  export class AttrColor {
    /* Fields of Pango.AttrColor */
    attr: Attribute;
    color: Color;
    static name: string;
  }
  export class AttrFloat {
    /* Fields of Pango.AttrFloat */
    attr: Attribute;
    value: number;
    static name: string;
  }
  export class AttrFontDesc {
    /* Fields of Pango.AttrFontDesc */
    attr: Attribute;
    desc: FontDescription;
    static name: string;
  }
  export class AttrFontFeatures {
    /* Fields of Pango.AttrFontFeatures */
    attr: Attribute;
    features: string;
    static name: string;
  }
  export class AttrInt {
    /* Fields of Pango.AttrInt */
    attr: Attribute;
    value: number;
    static name: string;
  }
  export class AttrIterator {
    /* Methods of Pango.AttrIterator */
    copy(): AttrIterator;
    destroy(): void;
    get(type: AttrType): Attribute | null;
    get_attrs(): Attribute[];
    get_font(
      desc: FontDescription
    ): [/* language */ Language | null, /* extra_attrs */ Attribute[] | null];
    next(): boolean;
    range(): [/* start */ number, /* end */ number];
    static name: string;
  }
  export class AttrLanguage {
    /* Fields of Pango.AttrLanguage */
    attr: Attribute;
    value: Language;
    static name: string;
  }
  export class AttrList {
    /* Methods of Pango.AttrList */
    change(attr: Attribute): void;
    copy(): AttrList | null;
    equal(other_list: AttrList): boolean;
    filter(func: AttrFilterFunc): AttrList | null;
    get_attributes(): Attribute[];
    get_iterator(): AttrIterator;
    insert(attr: Attribute): void;
    insert_before(attr: Attribute): void;
    ref(): AttrList;
    splice(other: AttrList, pos: number, len: number): void;
    to_string(): string;
    unref(): void;
    update(pos: number, remove: number, add: number): void;
    static name: string;
    static new(): AttrList;
    constructor();
    static new(): AttrList;
    static from_string(text: string): AttrList | null;
  }
  export class AttrShape {
    /* Fields of Pango.AttrShape */
    attr: Attribute;
    ink_rect: Rectangle;
    logical_rect: Rectangle;
    data: object;
    copy_func: AttrDataCopyFunc;
    destroy_func: GLib.DestroyNotify;
    static name: string;
    static new_with_data(
      ink_rect: Rectangle,
      logical_rect: Rectangle,
      data?: object | null,
      copy_func?: AttrDataCopyFunc | null
    ): Attribute;
  }
  export class AttrSize {
    /* Fields of Pango.AttrSize */
    attr: Attribute;
    size: number;
    absolute: number;
    static name: string;
    static new_absolute(size: number): Attribute;
  }
  export class AttrString {
    /* Fields of Pango.AttrString */
    attr: Attribute;
    value: string;
    static name: string;
  }
  export class Attribute {
    /* Fields of Pango.Attribute */
    klass: AttrClass;
    start_index: number;
    end_index: number;
    /* Methods of Pango.Attribute */
    as_color(): AttrColor | null;
    as_float(): AttrFloat | null;
    as_font_desc(): AttrFontDesc | null;
    as_font_features(): AttrFontFeatures | null;
    as_int(): AttrInt | null;
    as_language(): AttrLanguage | null;
    as_shape(): AttrShape | null;
    as_size(): AttrSize | null;
    as_string(): AttrString | null;
    copy(): Attribute;
    destroy(): void;
    equal(attr2: Attribute): boolean;
    init(klass: AttrClass): void;
    static name: string;
  }
  export class Color {
    /* Fields of Pango.Color */
    red: number;
    green: number;
    blue: number;
    /* Methods of Pango.Color */
    copy(): Color | null;
    free(): void;
    parse(spec: string): boolean;
    parse_with_alpha(
      spec: string
    ): [/* returnType */ boolean, /* alpha */ number | null];
    to_string(): string;
    static name: string;
  }
  export abstract class ContextClass {
    static name: string;
  }
  export abstract class FontClass {
    /* Fields of Pango.FontClass */
    parent_class: GObject.ObjectClass;
    describe: any;
    get_coverage: any;
    get_glyph_extents: any;
    get_metrics: any;
    get_font_map: any;
    describe_absolute: any;
    get_features: any;
    create_hb_font: any;
    static name: string;
  }
  export class FontDescription {
    /* Methods of Pango.FontDescription */
    better_match(
      old_match: FontDescription | null,
      new_match: FontDescription
    ): boolean;
    copy(): FontDescription | null;
    copy_static(): FontDescription | null;
    equal(desc2: FontDescription): boolean;
    free(): void;
    get_family(): string | null;
    get_gravity(): Gravity;
    get_set_fields(): FontMask;
    get_size(): number;
    get_size_is_absolute(): boolean;
    get_stretch(): Stretch;
    get_style(): Style;
    get_variant(): Variant;
    get_variations(): string | null;
    get_weight(): Weight;
    hash(): number;
    merge(
      desc_to_merge: FontDescription | null,
      replace_existing: boolean
    ): void;
    merge_static(
      desc_to_merge: FontDescription,
      replace_existing: boolean
    ): void;
    set_absolute_size(size: number): void;
    set_family(family: string): void;
    set_family_static(family: string): void;
    set_gravity(gravity: Gravity): void;
    set_size(size: number): void;
    set_stretch(stretch: Stretch): void;
    set_style(style: Style): void;
    set_variant(variant: Variant): void;
    set_variations(variations?: string | null): void;
    set_variations_static(variations: string): void;
    set_weight(weight: Weight): void;
    to_filename(): string | null;
    to_string(): string;
    unset_fields(to_unset: FontMask): void;
    static name: string;
    static new(): FontDescription;
    constructor();
    static new(): FontDescription;
    static from_string(str: string): FontDescription;
  }
  export abstract class FontFaceClass {
    /* Fields of Pango.FontFaceClass */
    parent_class: GObject.ObjectClass;
    get_face_name: any;
    describe: any;
    list_sizes: any;
    is_synthesized: any;
    get_family: any;
    static name: string;
  }
  export abstract class FontFamilyClass {
    /* Fields of Pango.FontFamilyClass */
    parent_class: GObject.ObjectClass;
    list_faces: any;
    get_name: any;
    is_monospace: any;
    is_variable: any;
    get_face: any;
    static name: string;
  }
  export abstract class FontMapClass {
    /* Fields of Pango.FontMapClass */
    parent_class: GObject.ObjectClass;
    load_font: any;
    list_families: any;
    load_fontset: any;
    shape_engine_type: string;
    get_serial: any;
    changed: any;
    get_family: any;
    static name: string;
  }
  export class FontMetrics {
    /* Fields of Pango.FontMetrics */
    /* Methods of Pango.FontMetrics */
    get_approximate_char_width(): number;
    get_approximate_digit_width(): number;
    get_ascent(): number;
    get_descent(): number;
    get_height(): number;
    get_strikethrough_position(): number;
    get_strikethrough_thickness(): number;
    get_underline_position(): number;
    get_underline_thickness(): number;
    ref(): FontMetrics | null;
    unref(): void;
    static name: string;
  }
  export abstract class FontsetClass {
    /* Fields of Pango.FontsetClass */
    parent_class: GObject.ObjectClass;
    get_font: any;
    get_metrics: any;
    get_language: any;
    foreach: any;
    static name: string;
  }
  export abstract class FontsetSimpleClass {
    static name: string;
  }
  export class GlyphGeometry {
    /* Fields of Pango.GlyphGeometry */
    width: GlyphUnit;
    x_offset: GlyphUnit;
    y_offset: GlyphUnit;
    static name: string;
  }
  export class GlyphInfo {
    /* Fields of Pango.GlyphInfo */
    glyph: Glyph;
    geometry: GlyphGeometry;
    attr: GlyphVisAttr;
    static name: string;
  }
  export class GlyphItem {
    /* Fields of Pango.GlyphItem */
    item: Item;
    glyphs: GlyphString;
    y_offset: number;
    start_x_offset: number;
    end_x_offset: number;
    /* Methods of Pango.GlyphItem */
    apply_attrs(text: string, list: AttrList): GlyphItem[];
    copy(): GlyphItem | null;
    free(): void;
    get_logical_widths(text: string, logical_widths: number[]): void;
    letter_space(
      text: string,
      log_attrs: LogAttr[],
      letter_spacing: number
    ): void;
    split(text: string, split_index: number): GlyphItem | null;
    static name: string;
  }
  export class GlyphItemIter {
    /* Fields of Pango.GlyphItemIter */
    glyph_item: GlyphItem;
    text: string;
    start_glyph: number;
    start_index: number;
    start_char: number;
    end_glyph: number;
    end_index: number;
    end_char: number;
    /* Methods of Pango.GlyphItemIter */
    copy(): GlyphItemIter | null;
    free(): void;
    init_end(glyph_item: GlyphItem, text: string): boolean;
    init_start(glyph_item: GlyphItem, text: string): boolean;
    next_cluster(): boolean;
    prev_cluster(): boolean;
    static name: string;
  }
  export class GlyphString {
    /* Fields of Pango.GlyphString */
    num_glyphs: number;
    glyphs: GlyphInfo[];
    log_clusters: number;
    /* Methods of Pango.GlyphString */
    copy(): GlyphString | null;
    extents(
      font: Font
    ): [/* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null];
    extents_range(
      start: number,
      end: number,
      font: Font
    ): [/* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null];
    free(): void;
    get_logical_widths(
      text: string,
      length: number,
      embedding_level: number,
      logical_widths: number[]
    ): void;
    get_width(): number;
    index_to_x(
      text: string,
      length: number,
      analysis: Analysis,
      index_: number,
      trailing: boolean
    ): /* x_pos */ number;
    index_to_x_full(
      text: string,
      length: number,
      analysis: Analysis,
      attrs: LogAttr | null,
      index_: number,
      trailing: boolean
    ): /* x_pos */ number;
    set_size(new_len: number): void;
    x_to_index(
      text: string,
      length: number,
      analysis: Analysis,
      x_pos: number
    ): [/* index_ */ number, /* trailing */ number];
    static name: string;
    static new(): GlyphString;
    constructor();
    static new(): GlyphString;
  }
  export class GlyphVisAttr {
    /* Fields of Pango.GlyphVisAttr */
    is_cluster_start: number;
    is_color: number;
    static name: string;
  }
  export class Item {
    /* Fields of Pango.Item */
    offset: number;
    length: number;
    num_chars: number;
    analysis: Analysis;
    /* Methods of Pango.Item */
    apply_attrs(iter: AttrIterator): void;
    copy(): Item | null;
    free(): void;
    split(split_index: number, split_offset: number): Item;
    static name: string;
    static new(): Item;
    constructor();
    static new(): Item;
  }
  export class Language {
    /* Methods of Pango.Language */
    get_sample_string(): string;
    get_scripts(): Script[] | null;
    includes_script(script: Script): boolean;
    matches(range_list: string): boolean;
    to_string(): string;
    static name: string;
    static from_string(language?: string | null): Language | null;
    static get_default(): Language;
    static get_preferred(): Language[] | null;
  }
  export abstract class LayoutClass {
    static name: string;
  }
  export class LayoutIter {
    /* Methods of Pango.LayoutIter */
    at_last_line(): boolean;
    copy(): LayoutIter | null;
    free(): void;
    get_baseline(): number;
    get_char_extents(): /* logical_rect */ Rectangle;
    get_cluster_extents(): [
      /* ink_rect */ Rectangle | null,
      /* logical_rect */ Rectangle | null
    ];
    get_index(): number;
    get_layout(): Layout | null;
    get_layout_extents(): [
      /* ink_rect */ Rectangle | null,
      /* logical_rect */ Rectangle | null
    ];
    get_line(): LayoutLine | null;
    get_line_extents(): [
      /* ink_rect */ Rectangle | null,
      /* logical_rect */ Rectangle | null
    ];
    get_line_readonly(): LayoutLine | null;
    get_line_yrange(): [/* y0_ */ number | null, /* y1_ */ number | null];
    get_run(): LayoutRun | null;
    get_run_baseline(): number;
    get_run_extents(): [
      /* ink_rect */ Rectangle | null,
      /* logical_rect */ Rectangle | null
    ];
    get_run_readonly(): LayoutRun | null;
    next_char(): boolean;
    next_cluster(): boolean;
    next_line(): boolean;
    next_run(): boolean;
    static name: string;
  }
  export class LayoutLine {
    /* Fields of Pango.LayoutLine */
    layout: Layout;
    start_index: number;
    length: number;
    runs: LayoutRun[];
    is_paragraph_start: number;
    resolved_dir: number;
    /* Methods of Pango.LayoutLine */
    get_extents(): [
      /* ink_rect */ Rectangle | null,
      /* logical_rect */ Rectangle | null
    ];
    get_height(): /* height */ number | null;
    get_length(): number;
    get_pixel_extents(): [
      /* ink_rect */ Rectangle | null,
      /* logical_rect */ Rectangle | null
    ];
    get_resolved_direction(): Direction;
    get_start_index(): number;
    get_x_ranges(start_index: number, end_index: number): /* ranges */ number[];
    index_to_x(index_: number, trailing: boolean): /* x_pos */ number;
    ref(): LayoutLine | null;
    unref(): void;
    x_to_index(
      x_pos: number
    ): [/* returnType */ boolean, /* index_ */ number, /* trailing */ number];
    static name: string;
  }
  export class LogAttr {
    /* Fields of Pango.LogAttr */
    is_line_break: number;
    is_mandatory_break: number;
    is_char_break: number;
    is_white: number;
    is_cursor_position: number;
    is_word_start: number;
    is_word_end: number;
    is_sentence_boundary: number;
    is_sentence_start: number;
    is_sentence_end: number;
    backspace_deletes_character: number;
    is_expandable_space: number;
    is_word_boundary: number;
    break_inserts_hyphen: number;
    break_removes_preceding: number;
    reserved: number;
    static name: string;
  }
  export class Matrix {
    /* Fields of Pango.Matrix */
    xx: number;
    xy: number;
    yx: number;
    yy: number;
    x0: number;
    y0: number;
    /* Methods of Pango.Matrix */
    concat(new_matrix: Matrix): void;
    copy(): Matrix | null;
    free(): void;
    get_font_scale_factor(): number;
    get_font_scale_factors(): [
      /* xscale */ number | null,
      /* yscale */ number | null
    ];
    get_slant_ratio(): number;
    rotate(degrees: number): void;
    scale(scale_x: number, scale_y: number): void;
    transform_distance(dx: number, dy: number): void;
    transform_pixel_rectangle(rect: Rectangle): void;
    transform_point(x: number, y: number): void;
    transform_rectangle(rect: Rectangle): void;
    translate(tx: number, ty: number): void;
    static name: string;
  }
  export class Rectangle {
    /* Fields of Pango.Rectangle */
    x: number;
    y: number;
    width: number;
    height: number;
    static name: string;
  }
  export abstract class RendererClass {
    /* Fields of Pango.RendererClass */
    draw_glyphs: any;
    draw_rectangle: any;
    draw_error_underline: any;
    draw_shape: any;
    draw_trapezoid: any;
    draw_glyph: any;
    part_changed: any;
    begin: any;
    end: any;
    prepare_run: any;
    draw_glyph_item: any;
    static name: string;
  }
  export class RendererPrivate {
    static name: string;
  }
  export class ScriptIter {
    /* Methods of Pango.ScriptIter */
    free(): void;
    get_range(): [
      /* start */ string | null,
      /* end */ string | null,
      /* script */ Script | null
    ];
    next(): boolean;
    static name: string;
    static new(text: string, length: number): ScriptIter;
    constructor(text: string, length: number);
    static new(text: string, length: number): ScriptIter;
  }
  export class TabArray {
    /* Methods of Pango.TabArray */
    copy(): TabArray;
    free(): void;
    get_decimal_point(tab_index: number): number;
    get_positions_in_pixels(): boolean;
    get_size(): number;
    get_tab(
      tab_index: number
    ): [/* alignment */ TabAlign | null, /* location */ number | null];
    get_tabs(): [
      /* alignments */ TabAlign | null,
      /* locations */ number[] | null
    ];
    resize(new_size: number): void;
    set_decimal_point(tab_index: number, decimal_point: number): void;
    set_positions_in_pixels(positions_in_pixels: boolean): void;
    set_tab(tab_index: number, alignment: TabAlign, location: number): void;
    sort(): void;
    to_string(): string;
    static name: string;
    static new(initial_size: number, positions_in_pixels: boolean): TabArray;
    constructor(initial_size: number, positions_in_pixels: boolean);
    static new(initial_size: number, positions_in_pixels: boolean): TabArray;
    static from_string(text: string): TabArray | null;
  }
  type Glyph = number;
  type GlyphUnit = number;
  type LayoutRun = GlyphItem;
}

declare module "gi://Pango?version=1.0" {
  export default Pango;
}
