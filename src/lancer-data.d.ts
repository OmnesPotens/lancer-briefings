// Generated by https://quicktype.io

export interface LDAction {
  id:                 string;
  name:               string;
  activation:         string;
  terse:              string;
  detail:             string;
  pilot?:             boolean;
  mech?:              boolean;
  hide_active?:       boolean;
  synergy_locations?: string[];
  confirm?:           string[];
  ignore_used?:       boolean;
}

// Generated by https://quicktype.io

export interface LDBackground {
  id:          string;
  name:        string;
  description: string;
}

// Generated by https://quicktype.io

export interface LDCoreBonus {
  id:              string;
  name:            string;
  source:          string;
  effect:          string;
  description:     string;
  mounted_effect?: string;
  bonuses?:        Bonus[];
  synergies?:      Synergy[];
  actions?:        Action[];
}

export interface Action {
  name:       string;
  activation: string;
  frequency:  string;
  trigger:    string;
  detail:     string;
}

export interface Bonus {
  id:            string;
  val:           string[] | boolean | number;
  weapon_types?: string[];
  range_types?:  string[];
}

export interface Synergy {
  locations: string[];
  detail:    string;
}

// Generated by https://quicktype.io

export interface LDEnvironments {
  id:          string;
  name:        string;
  description: string;
}

// Generated by https://quicktype.io

export interface LDFrame {
  id:            string;
  license_level: number;
  source:        Source;
  name:          string;
  mechtype:      Mechtype[];
  y_pos:         number;
  description:   string;
  mounts:        Mount[];
  stats:         { [key: string]: number };
  traits:        Trait[];
  core_system:   CoreSystem;
  image_url:     string;
  license_id:    string;
  other_art?:    OtherArt[];
  data_type?:    string;
  counters?:     Counter[];
}

export interface CoreSystem {
  name:              string;
  active_name:       string;
  active_effect:     string;
  use?:              Use;
  activation:        Activation;
  active_synergies?: ActiveSynergy[];
  description?:      string;
  deactivation?:     Activation;
  integrated?:       string[];
  active_actions?:   Actiaction[];
  passive_name?:     string;
  passive_effect?:   string;
  passive_actions?:  PassiveAction[];
  deployables?:      Deployable[];
  active_bonuses?:   ActiveBonus[];
}

export enum Activation {
  Free = "Free",
  Full = "Full",
  Protocol = "Protocol",
  Quick = "Quick",
  Reaction = "Reaction",
}

export interface Actiaction {
  name:       string;
  activation: Activation;
  detail:     string;
  frequency?: string;
  trigger?:   string;
  init?:      string;
}

export interface ActiveBonus {
  id:           string;
  damage_types: string[];
  range_types:  string[];
  val:          number;
}

export interface ActiveSynergy {
  locations: string[];
  detail:    string;
}

export interface Deployable {
  name:       string;
  type:       string;
  detail:     string;
  activation: Activation;
  recall:     Activation;
  redeploy:   Activation;
  size:       number;
  hp:         string;
}

export interface PassiveAction {
  name:       string;
  activation: Activation;
  detail:     string;
}

export enum Use {
  Encounter = "Encounter",
  NextRound = "Next Round",
  NextTurn = "Next Turn",
}

export interface Counter {
  id:            string;
  name:          string;
  default_value: number;
  min:           number;
  max:           number;
}

export enum Mechtype {
  Artillery = "Artillery",
  Balanced = "Balanced",
  Controller = "Controller",
  Defender = "Defender",
  Striker = "Striker",
  Support = "Support",
}

export enum Mount {
  AuxAux = "Aux/Aux",
  Flex = "Flex",
  Heavy = "Heavy",
  Main = "Main",
  MainAux = "Main/Aux",
}

export interface OtherArt {
  tag: string;
  src: string;
}

export enum Source {
  Gms = "GMS",
  Ha = "HA",
  Horus = "HORUS",
  IPSN = "IPS-N",
  Ssc = "SSC",
}

export interface Trait {
  name:        string;
  description: string;
  use?:        string;
  bonuses?:    Bonus[];
  synergies?:  Synergy[];
  actions?:    Actiaction[];
}

export interface Bonus {
  id:  string;
  val: number;
}

export interface Synergy {
  locations:     string[];
  detail:        string;
  weapon_types?: string[];
  weapon_sizes?: string[];
}

// Generated by https://quicktype.io

export interface LDGlossary {
  name:        string;
  description: string;
}

// Generated by https://quicktype.io

export interface LDInfo {
  name:        string;
  author:      string;
  version:     string;
  description: string;
  website:     string;
  active:      boolean;
}

// Generated by https://quicktype.io

export interface LDManufacturer {
  id:          string;
  name:        string;
  logo:        string;
  light:       string;
  dark:        string;
  quote:       string;
  description: string;
}

// Generated by https://quicktype.io

export interface LDMod {
  id:                string;
  name:              string;
  sp:                number;
  allowed_types:     string[];
  source:            string;
  license:           string;
  license_level:     number;
  effect:            string;
  description:       string;
  tags?:             Tag[];
  license_id:        string;
  added_damage?:     AddedDamage[];
  restricted_sizes?: string[];
  actions?:          Action[];
  added_range?:      AddedRange[];
  added_tags?:       AddedTag[];
}

export interface Action {
  name:       string;
  activation: string;
  detail:     string;
}

export interface AddedDamage {
  type: string;
  val:  string;
}

export interface AddedRange {
  type: string;
  val:  number;
}

export interface AddedTag {
  id: string;
}

export interface Tag {
  id:   string;
  val?: number;
}

// Generated by https://quicktype.io

export interface LDPilotGear {
  id:           string;
  name:         string;
  type:         Type;
  description:  string;
  tags?:        Tag[];
  range?:       Damage[];
  damage?:      Damage[];
  effect?:      string;
  bonuses?:     Bonus[];
  actions?:     LDPilotGearAction[];
  deployables?: Deployable[];
}

export interface LDPilotGearAction {
  name:       string;
  activation: string;
  detail:     string;
  pilot:      boolean;
  range?:     Damage[];
  damage?:    Damage[];
}

export interface Damage {
  type: string;
  val:  number;
}

export interface Bonus {
  id:       string;
  val:      number;
  replace?: boolean;
}

export interface Deployable {
  name:    string;
  type:    string;
  detail:  string;
  pilot:   boolean;
  actions: DeployableAction[];
}

export interface DeployableAction {
  name:       string;
  activation: string;
  detail:     string;
  pilot:      boolean;
}

export interface Tag {
  id:   string;
  val?: number;
}

export enum Type {
  Armor = "Armor",
  Gear = "Gear",
  Weapon = "Weapon",
}

// Generated by https://quicktype.io

export interface LDReserve {
  id:           string;
  name:         string;
  type:         Type;
  label:        string;
  description:  string;
  bonuses?:     Bonus[];
  deployables?: Deployable[];
  actions?:     Action[];
  synergies?:   Synergy[];
}

export interface Action {
  name:       string;
  activation: string;
  detail:     string;
  range?:     Range[];
  damage?:    Damage[];
}

export interface Damage {
  type: string;
  val:  string;
}

export interface Range {
  type: string;
  val:  number;
}

export interface Bonus {
  id:  string;
  val: number;
}

export interface Deployable {
  name:   string;
  type:   string;
  size:   number;
  detail: string;
}

export interface Synergy {
  locations: string[];
  detail:    string;
}

export enum Type {
  Bonus = "Bonus",
  Mech = "Mech",
  Resource = "Resource",
  Tactical = "Tactical",
}

// Generated by https://quicktype.io

export interface LDRule {
  base_structure:         number;
  base_stress:            number;
  base_grapple:           number;
  base_ram:               number;
  base_pilot_hp:          number;
  base_pilot_evasion:     number;
  base_pilot_edef:        number;
  base_pilot_speed:       number;
  minimum_pilot_skills:   number;
  minimum_mech_skills:    number;
  minimum_pilot_talents:  number;
  trigger_bonus_per_rank: number;
  max_trigger_rank:       number;
  max_pilot_level:        number;
  max_pilot_weapons:      number;
  max_pilot_armor:        number;
  max_pilot_gear:         number;
  max_frame_size:         number;
  max_mech_armor:         number;
  max_hase:               number;
  mount_fittings:         MountFittings;
  overcharge:             string[];
  skill_headers:          SkillHeader[];
}

export interface MountFittings {
  Auxiliary: string[];
  Main:      string[];
  Flex:      string[];
  Heavy:     string[];
}

export interface SkillHeader {
  attr:        string;
  description: string;
}

// Generated by https://quicktype.io

export interface LDSitrep {
  id:           string;
  name:         string;
  pcVictory:    string;
  enemyVictory: string;
  description:  string;
  noVictory?:   string;
  controlZone?: string;
  deployment?:  string;
  extraction?:  string;
  objective?:   string;
}

// Generated by https://quicktype.io

export interface LDSkill {
  id:          string;
  name:        string;
  description: string;
  detail:      string;
  family:      Family;
}

export enum Family {
  Cha = "cha",
  Dex = "dex",
  Int = "int",
  Str = "str",
}

// Generated by https://quicktype.io

export interface LDStatus {
  name:       string;
  icon:       string;
  type:       Type;
  terse:      string;
  exclusive?: string;
  effects:    string;
}

export enum Type {
  Condition = "Condition",
  Status = "Status",
}

// Generated by https://quicktype.io

export interface LDSystem {
  id:            string;
  name:          string;
  sp:            number;
  source:        Source;
  license:       string;
  license_level: number;
  effect?:       string;
  description?:  string;
  tags?:         LDSystemTag[];
  license_id:    string;
  type?:         LDSystemType;
  actions?:      LDSystemAction[];
  deployables?:  Deployable[];
  bonuses?:      Bonus[];
  synergies?:    Synergy[];
  counters?:     Counter[];
  talent_item?:  boolean;
  talent_id?:    string;
  talent_rank?:  number;
  ammo?:         Ammo[];
}

export interface LDSystemAction {
  name?:        string;
  activation?:  Activation;
  range?:       Range[];
  detail:       string;
  damage?:      Damage[];
  tech_attack?: boolean;
  frequency?:   string;
  trigger?:     string;
  init?:        string;
  heat_cost?:   number;
}

export enum Activation {
  Free = "Free",
  Full = "Full",
  FullTech = "Full Tech",
  Invade = "Invade",
  Protocol = "Protocol",
  Quick = "Quick",
  QuickTech = "Quick Tech",
  Reaction = "Reaction",
}

export interface Damage {
  type: string;
  val:  number | string;
}

export interface Range {
  type: RangeType;
  val:  number;
}

export enum RangeType {
  Blast = "Blast",
  Burst = "Burst",
  Line = "Line",
  Range = "Range",
}

export interface Ammo {
  name:          string;
  detail:        string;
  allowed_sizes: AllowedSize[];
  allowed_types: AllowedType[];
  cost?:         number;
}

export enum AllowedSize {
  Main = "Main",
}

export enum AllowedType {
  Cannon = "cannon",
  Cqb = "cqb",
  Launcher = "launcher",
  Nexus = "nexus",
  Rifle = "rifle",
}

export interface Bonus {
  id:            string;
  val:           number;
  damage_types?: string[];
  weapon_types?: string[];
  range_types?:  string[];
}

export interface Counter {
  id:            string;
  name:          string;
  default_value: number;
  min:           number;
  max:           number;
}

export interface Deployable {
  name:          string;
  type:          DeployableType;
  range?:        Range[];
  detail:        string;
  instances?:    number;
  size?:         number;
  hp?:           number;
  evasion?:      number;
  recall?:       Activation;
  redeploy?:     Activation;
  activation?:   Activation;
  edef?:         number;
  actions?:      DeployableAction[];
  cost?:         number;
  counters?:     Counter[];
  tags?:         DeployableTag[];
  deactivation?: Activation;
}

export interface DeployableAction {
  name:       string;
  activation: Activation;
  frequency?: string;
  trigger?:   string;
  detail:     string;
}

export interface DeployableTag {
  id: string;
}

export enum DeployableType {
  Deployable = "Deployable",
  Drone = "Drone",
  Mine = "Mine",
}

export enum Source {
  Empty = "",
  Gms = "GMS",
  Ha = "HA",
  Horus = "HORUS",
  IPSN = "IPS-N",
  Ssc = "SSC",
}

export interface Synergy {
  locations:     string[];
  detail:        string;
  weapon_types?: string[];
}

export interface LDSystemTag {
  id:   string;
  val?: number | string;
}

export enum LDSystemType {
  AI = "AI",
  Deployable = "Deployable",
  Drone = "Drone",
  FlightSystem = "Flight System",
  Shield = "Shield",
  Tech = "Tech",
}

// Generated by https://quicktype.io

export interface LDTable {
  pilot_names: any[];
  callsigns:   any[];
  mech_names:  any[];
  team_names:  any[];
  quirks:      string[];
}

// Generated by https://quicktype.io

export interface LDTag {
  id:             string;
  name:           string;
  description:    string;
  filter_ignore?: boolean;
  hidden?:        boolean;
}

// Generated by https://quicktype.io

export interface LDTalent {
  id:          string;
  name:        string;
  icon:        string;
  terse:       string;
  description: string;
  ranks:       Rank[];
}

export interface Rank {
  name:               string;
  description:        string;
  synergies?:         Synergy[];
  actions?:           Action[];
  counters?:          Counter[];
  bonuses?:           Bonus[];
  integrated?:        string[];
  exclusive?:         boolean;
  special_equipment?: string[];
}

export interface Action {
  name:         string;
  activation:   string;
  trigger?:     string;
  detail:       string;
  frequency?:   string;
  init?:        string;
  tech_attack?: boolean;
}

export interface Bonus {
  id:  string;
  val: number;
}

export interface Counter {
  id:            string;
  name:          string;
  default_value: number;
  min:           number;
  max:           number;
  level?:        number;
}

export interface Synergy {
  locations:     string[];
  detail:        string;
  weapon_types?: string[];
  weapon_sizes?: WeaponSize[];
  system_types?: string[];
}

export enum WeaponSize {
  Any = "any",
  Auxiliary = "Auxiliary",
  Heavy = "Heavy",
  Main = "Main",
  Superheavy = "Superheavy",
}

// Generated by https://quicktype.io

export interface LDWeapon {
  id:             string;
  name:           string;
  mount:          Mount;
  type:           LDWeaponType;
  damage?:        RangeElement[];
  range?:         RangeElement[];
  tags?:          LDWeaponTag[];
  source?:        Source;
  license?:       string;
  license_level?: number;
  description?:   string;
  license_id:     string;
  on_crit?:       string;
  effect?:        string;
  profiles?:      Profile[];
  on_hit?:        string;
  on_attack?:     string;
  sp?:            number;
  no_attack?:     boolean;
  actions?:       LDWeaponAction[];
  deployables?:   Deployable[];
  no_mods?:       boolean;
  no_core_bonus?: boolean;
  no_synergies?:  boolean;
  talent_item?:   boolean;
  talent_id?:     string;
  talent_rank?:   number;
  skirmish?:      boolean;
  barrage?:       boolean;
}

export interface LDWeaponAction {
  name:       string;
  activation: string;
  frequency?: string;
  trigger?:   string;
  detail:     string;
}

export interface RangeElement {
  type:      DamageType;
  val:       number | string;
  override?: boolean;
}

export enum DamageType {
  Blast = "Blast",
  Burn = "Burn",
  Burst = "Burst",
  Cone = "Cone",
  Energy = "Energy",
  Explosive = "Explosive",
  Heat = "Heat",
  Kinetic = "Kinetic",
  Line = "Line",
  Range = "Range",
  Threat = "Threat",
  Variable = "Variable",
}

export interface Deployable {
  name:       string;
  type:       string;
  activation: string;
  recall:     string;
  redeploy:   string;
  size:       number;
  hp:         number;
  armor:      number;
  edef:       number;
  evasion:    number;
  detail:     string;
}

export enum Mount {
  Auxiliary = "Auxiliary",
  Heavy = "Heavy",
  Main = "Main",
  ShipClass = "Ship-class",
  Superheavy = "Superheavy",
}

export interface Profile {
  name:       string;
  damage:     PurpleDamage[];
  range:      RangeElement[];
  effect?:    string;
  actions?:   ProfileAction[];
  tags?:      ProfileTag[];
  skirmish?:  boolean;
  on_attack?: string;
}

export interface ProfileAction {
  name:       string;
  activation: string;
  detail:     string;
}

export interface PurpleDamage {
  type?:     DamageType;
  val:       string;
  override?: boolean;
}

export interface ProfileTag {
  id:   string;
  val?: number;
}

export enum Source {
  Empty = "",
  Gms = "GMS",
  Ha = "HA",
  Horus = "HORUS",
  IPSN = "IPS-N",
  Ssc = "SSC",
}

export interface LDWeaponTag {
  id:   string;
  val?: number | string;
}

export enum LDWeaponType {
  Cannon = "Cannon",
  Cqb = "CQB",
  Empty = "???",
  Launcher = "Launcher",
  Melee = "Melee",
  Nexus = "Nexus",
  Rifle = "Rifle",
  Special = "Special",
  SpoolWeapon = "Spool Weapon",
}
