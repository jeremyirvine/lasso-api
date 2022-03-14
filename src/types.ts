export type TransportError = {
  code?: number,
  data: any,
  _istransporterror: true
}

export type Response<T> = {
  count: number,
  next: String,
  previous: String,
  results: Array<T>
}

export type ClientsRequest = {
  external_code?: String,
  code?: String,
  name?: String,
  db_date_updated__gt?: String,
  db_date_updated__lt?: String,
  limit?: Number,
  offset?: Number,
}

export type VenuesRequest = ClientsRequest

export type EventsRequest = {
  code?: String,
  external_code?: String,
  status?: String,

  db_date_updated__gt?: String,
  db_date_updated__lt?: String,
  
  date_begin__gt?: String,
  date_begin__lt?: String,

  date_end__gt?: String,
  date_end__lt?: String,

  date_changed__gt?: String,
  date_changed__lt?: String,

  limit?: Number,
  offset?: Number,
}

export type AirportsRequest = {
  zip?: String,
  limit?: number,
  offset?: number
}

export type EventPosition = {
   /**
    * The LASSO unique identifier for this resource.
    */
    id?: number;
    uuid?: string;
    db_date_created?: Date;
    db_date_updated?: Date;
    event: number;
    group: number;
    position: number;
    quantity: number;
    /**
    * A short description- NOT visible to crew. Useful to differentiate multiple `event_positions` for the same `position` within an `event`/`event_group`.
    */
    label?: string;
    /**
    * The status of \"bidding\" - that is, whether `crew` are allowed to apply for this `event_position`. Choices are: \"pending\" (Default): Not visible to `crew`. Implies pre-bidding setup is still in progress.  \"open\": `crew` who have been invited to apply for this `event_position` may see it. An event position is \"opened\" when first invitations are sent or first `crew` is added to roster.  \"closed\": Not visible to crew. Implies that a deadline to apply has passed or all positions have been filled. When an `event`s date_deadline passes, all associated `event_position`s are set to closed status, or bidding may be closed manually per-position.
    */
    status?: EventPosition.StatusEnum;
    /**
    * Manages the display order of `event_position`s within a group. Display order falls back to date created.
    */
    sequence?: number;
    /**
    * How pay rate is determined when `crew` apply to work this `event_position` and when they are added to the `event` roster for this `event_position` (via related `event_roster_position`. Default may be overridden in company settings. Choices are:  \"crew_default\" (Default): Use the `crew`s rate from their `crew_position` whose `position` matches this `event_position`s \"position\". Do not ask `crew` to submit a rate. (Note that `crew_position` rates may not be visible to crew, per company settings.) \"crew_bid\": Ask `crew` to submit a rate. If crew does not submit a rate, use the rate from their `crew_position` like \"crew_default\". \"position_defined\": Set a custom rate as the default for all `event_roster_positions` added for this position, and display it to applying `crew`. Do not ask `crew` to submit a rate. 
    */
    rate_setting: EventPosition.RateSettingEnum;
    /**
    * The decimal pay rate for this `event_position`, if its \"rate_setting\" is \"position_defined\".
    */
    rate?: string;
    rate_currency?: string;
    /**
    * The unit by which pay rate is calculated over time. Conversion rates from weekly to daily to hourly are set by company settings.
    */
    rate_type?: EventPosition.RateTypeEnum;
    /**
    * The decimal billed (to `event` `client`) rate for this `event_position`. Defaults to `position` rate- for `event` `client` if set, or default rate.
    */
    billed_rate?: string;
    /**
    * The unit by which billable rate is calculated over time. Conversion rates from weekly to daily to hourly are set by company settings.
    */
    billed_rate_type?: EventPosition.BilledRateTypeEnum;
    /**
    * The earliest date on which this `event_position` requires work. If blank on initial save, set to `event` \"date_begin\". As related `schedule_entry`s are created/updated, calculated to match the earliest of these, of any shift type. 
    */
    schedule_begin?: string;
    /**
    * The latest date on which this `event_position` requires work. If blank on initial save, set to `event` \"date_end\". As related `schedule_entry`s are created/updated, calculated to match the latest of these, of any shift type. 
    */
    schedule_end?: string;
    /**
    * A helper field for creating related `schedule_entry`s in bulk when creating this `event_position` via API. If this field and \"day_end\" are set on initial save, a `schedule_entry` shift with this start time is created for each day between \"schedule_begin\" and \"schedule_end\" (inclusive).
    */
    day_begin?: string;
    /**
    * A helper field for creating related `schedule_entry`s in bulk when creating this `event_position` via API. If this field and \"day_end\" are set on initial save, a `schedule_entry` shift with this end time is created for each day between \"schedule_begin\" and \"schedule_end\" (inclusive).
    */
    day_end?: string;
    schedule_entries?: Array<ScheduleEntry>;
    /**
    * Whether `crew` approved to work on the `event` roster for this `event_position` may see their shift end times, as determined by `schedule_entry`s. Set to True to display only shift start times.
    */
    hide_end_time?: boolean;
    /**
    * A short description. Unlike \"label\", VISIBLE to `crew`- both crew are both applying, and who are approved to work for this `event_position`.
    */
    note?: string;
    external_code?: string;
    /**
    * A date the `event_position` has been marked for removal by a third party via the LASSO API.
    */
    external_remove_date?: Date;
}

export type Event = {
    /**
    * The LASSO unique identifier for this resource.
    */
    id?: number;
    db_date_created?: Date;
    db_date_updated?: Date;
    /**
    * This is the id of the `division` the `event` belongs to.
    */
    division?: number | null;
    client?: number;
    venue?: number;
    /**
    * If this is None, nobody will be local to this event.This is not exposed in the LASSO platform. Instead, it is set by nearest_airport.
    */
    market?: number;
    account_event_status?: number;
    nearest_airport?: string;
    code?: string;
    external_code?: string;
    name?: string;
    status?: Event.StatusEnum;
    travel_booking_status?: Event.TravelBookingStatusEnum;
    /**
    * Date event was archived. Date format: YYYY-MM-DDThh:mm[:ss[.uuuuuu]][+HH:MM|-HH:MM|Z].
    */
    date_archived?: Date;
    date_begin?: string;
    date_end?: string;
    /**
    * The datetime when a child record of the `event` has changed.
    */
    date_changed?: Date;
    date_deadline?: Date;
    description?: string;
    local_only?: boolean;
    groups?: Array<number>;
    positions?: Array<EventPosition>;
    roles?: Array<EventRole>;
    account_user_role_relationships?: Array<EventAccountUserRoleRelationship>;
    notes?: Array<EventNote>;
    roster_positions?: Array<EventRosterPositionSerializerNoAnalytics>;
    /**
    * The total costs for `crew`.
    */
    actuals?: Array<CrewActuals>;
    /**
    * This is not exposed in the LASSO platform. It is set by nearest airport timezone and falls back to account timezone.
    */
    timezone?: number;
    /**
    * This is the id of the `program` the `event` belongs to. NOTE: These are known as `Tours` in the LASSO UI.
    */
    program?: number;
    hide_client?: boolean;
    hide_name?: boolean;
}

export type EventRole = {
    /**
    * The LASSO unique identifier for this resource.
    */
    id?: number;
    db_date_created?: Date;
    db_date_updated?: Date;
    event: number;
    group: number;
    role: EventRole.RoleEnum;
    crew: number;
    is_primary?: boolean;
    date_added?: Date;
    date_removed?: Date;
}

export type EventAccountUserRoleRelationship = {
    /**
    * The LASSO unique identifier for this resource.
    */
    id?: number;
    db_date_created?: Date;
    db_date_updated?: Date;
    date_removed?: Date;
    event: number;
    account_user_role: number;
}

export type EventNote = {
    /**
    * The LASSO unique identifier for this resource.
    */
    id?: number;
    db_date_created?: Date;
    db_date_updated?: Date;
    event: number;
    date_entered?: Date;
    subject?: string;
    body?: string;
    status?: EventNote.StatusEnum;
}

export type EventRosterPositionSerializerNoAnalytics = {
    /**
    * The LASSO unique identifier for this resource.
    */
    id?: number;
    db_date_created?: Date;
    db_date_updated?: Date;
    event: number;
    event_position: number;
    group: number;
    crew: number;
    crew_position: number;
    user_added?: User;
    user_approved?: User;
    /**
    * The approval status of this `event_roster_position`. Choices are: \"tentative\" (Default): All `event_roster_position`s begin as \"tentative\" when a crew is \"added to the roster\". May also imply that the `event` \"roster\" (collection of related `event_roster_position`s), is still under review in general. \"approved\": The decision to hire this `crew` to work this `event_position` is finalized. The changing of an `event_roster_position` status to \"approved\" is called \"roster approval\". An \"approved\" `event_roster_position`s schedule, as described by its `event_position` related `schedule_entry`s, appears in the crews schedule and displays as \"unavailable\" to other events.  \"confirmed\": This status is not used by LASSO. Please see \"date_confirmed\". \"canceled\": This `event_roster_position`s associated `event` is canceled. \"declined\": This status is set when a `crew` is \"approved\", confirmation is requested, and the `crew` then declines to work. Not visible to `crew`. Unlike declining an invitation, `crew` cannot change their mind after declining to confirm. They do, however, remain on the `event` roster (in \"declined\" status), and they may be re-approved/confirmation re-requested by an admin `user`. \"removed\": If a `crew` is added to a roster then taken off of it, either before or after approval, its status is set to \"removed\". It is not visible to `crew`, but they may be re-added to the roster in status \"tentative\" via crewing.
    */
    status?: EventRosterPositionSerializerNoAnalytics.StatusEnum;
    /**
    * The UTC datetime at which the approval of this `event_roster_position` was confirmed-either by the related `crew` responding to a confirmation request, or by an admin `user`` skipping requesting crew confirmation.
    */
    date_confirmed?: Date;
    /**
    * The UTC datetime at which an admin `user` approved this `crew` to work this `event_position` on this `event`, thus changing the \"status\" of this `event_roster_position` to \"approved\" (see \"status\").
    */
    date_approved?: Date;
    /**
    * The UTC datetime at which an admin `user` added this `crew` (as \"tentative\") to work this `event_position` on this `event` (see \"status\").
    */
    date_added?: Date;
    /**
    * The decimal pay rate for this `event_roster_position`. Inherited from `event_position`, but may be overridden.
    */
    rate?: string;
    rate_currency?: string;
    /**
    * The unit by which pay rate is calculated over time. Conversion rates from weekly to daily to hourly are set by company settings.
    */
    rate_type?: EventRosterPositionSerializerNoAnalytics.RateTypeEnum;
    /**
    * The reason `crew` was removed from the roster after being approved. Choices include:  1: Didn’t show up   2: Called out - excused   3: Called out - unexcused   4: No longer needed  5: Found a crew member that was a better fit   The default is 0.
    */
    removal_reason?: number;
}
export interface Venue {
  /**
   * Id
   * The LASSO unique identifier for this resource.
   */
  id?: number;

  /**
   * Db date created
   * @format date-time
   */
  db_date_created?: string;

  /**
   * Db date updated
   * @format date-time
   */
  db_date_updated?: string;

  /**
   * Code
   * The system generated unique identifier for the `venue` resource.                   Used as a human-readable-friendly code in the URL for the resource.
   */
  code?: string;

  /**
   * External code
   * A `venue` resource identifier created by a user.                   Also referred to as the "Vendor ID".
   */
  external_code?: string | null;

  /**
   * Name
   * The name of the `venue` and the attribute used for resource look-ups in searches.
   */
  name: string;

  /**
   * Status
   * The status of the `venue` resource.
   */
  status?: "active" | "inactive";
  rooms?: number[];
  notes?: number[];

  /** `venue_contact`s associated with this `venue`. */
  contacts?: number[];

  /**
   * Street1
   * The first line of the street address associated with the resource.
   */
  street1?: string | null;

  /**
   * Street2
   * The second line of the street address associated with the resource.
   */
  street2?: string | null;

  /**
   * Street3
   * The third line of the street address associated with the resource.
   */
  street3?: string | null;

  /** Locality */
  locality: string;

  /** Region */
  region: string;

  /**
   * Postal code
   * The resource’s mail sorting code.
   */
  postal_code?: string | null;

  /**
   * Country
   * The `country` in which the resource resides.
   */
  country?: string;

  /**
   * Phone
   * The resource’s phone number.
   */
  phone?: string | null;

  /** Airport */
  airport: string;

  /**
   * Market
   * The unique identifier of the `market` which represents the resource location.
   */
  market?: number | null;
}

export type User = {
    /**
    * `user`'s first name.
    */
    first_name?: string;
    /**
    * `user`'s last name. First and Last name are the `user's \"full name\".
    */
    last_name?: string;
    /**
    * `user`'s email address. Must be unique.
    */
    email?: string;
}

export type CrewActuals = {
    crew: string;
    /**
    * The sum of all payments from all shifts for the `crew`.
    */
    total_cost: string;
    /**
    * The currency type of the total cost given.
    */
    cost_currency: string;
}

export type ScheduleEntry = {
    /**
    * The LASSO unique identifier for this resource.
    */
    id?: number;
    uuid?: string;
    db_date_created?: Date;
    db_date_updated?: Date;
    event: number;
    eventPosition: number;
    row?: number;
    date: string;
    start_time: string;
    end_time: string;
    timezone?: number;
    type?: ScheduleEntry.TypeEnum;
    utc_start?: Date;
    utc_end?: Date;
    /**
    * Number hours between start/end time
    */
    hours_delta?: number;
    /**
    * Number hours worked between start/end (excluding breaks)
    */
    hours_worked?: number;
    /**
    * Number hours billed -- overridhours_workedid
    */
    hours_billed?: number;
    hours_override?: boolean;
    external_code?: string;
    /**
    * A date the `event_position` has been marked for removal by a third party via the LASSO API.
    */
    external_remove_date?: Date;
}

export type Client = {
    /**
    * The LASSO unique identifier for this resource.
    */
    id?: number;
    db_date_created?: Date;
    db_date_updated?: Date;
    /**
    * An autogenerated, easy-to-read, and unique simple string to identify the `client`.
    */
    code?: string;
    /**
    * `Client` code supplied by the company.
    */
    external_code?: string;
    /**
    * The `name` of the client.
    */
    name: string;
    /**
    * The `status` of this `client`. Choices: active, inactive, deleted.
    */
    status?: Client.StatusEnum;
    /**
    * A link to the clients website.
    */
    url?: string;
    /**
    * The `phone` number of the `client`.
    */
    phone?: string;
    contacts?: Array<number>;
    /**
    * A list of the clients address information
    */
    addresses?: Array<number>;	
}

export type Airport = {
    /**
    * The LASSO unique identifier for the `airport` resource.
    */
    id: string;
    /**
    * International Air Transport Association location identification code.
    */
    iata_code: string;
    /**
    * Federal Aviation Administration identification code.
    */
    faa_code?: string;
    /**
    * International Civil Aviation Organization location identification code.
    */
    icao_code: string;
    /**
    * The full name of the `airport`.
    */
    name: string;
    /**
    * Common alternate names or spellings of `airport`.
    */
    alternates?: string;
    market: Market;
    /**
    * The city in which the `airport` resides.
    */
    city: string;
    /**
    * For airports in the USA/Canada: the state/province in which the `airport` resides.
    */
    region?: string;
    /**
    * The latitudinal position of the `airport`.
    */
    latitude?: string;
    /**
    * The longitudinal position of the `airport`.
    */
    longitude?: string;
    /**
    * The `airport`s height above sea level in feet.
    */
    altitude?: number;
    /**
    * Used to help prioritize search results. Higher numbers will show higher in the list.
    */
    sequence?: number;
}

export class Market {
    /**
    * The LASSO unique identifier for this resource.
    */
    id?: number;
    db_date_created?: Date;
    db_date_updated?: Date;
    /**
    * the display name of the `market`. This may include the country or state name, to help clarify between similarly-named `market`s (ie \"Barcelona, Spain\", and \"Barcelona, Venezuela\").
    */
    name: string;
    /**
    * The name of a `market`s primary city. (e.g. \"Columbus\" for `market` \"Columbus / West Point / Starkville\").
    */
    primary_city: string;
}

export namespace Event {
   export enum StatusEnum {
      Unpublished = <any> 'unpublished',
      Published = <any> 'published',
      Completed = <any> 'completed',
      Canceled = <any> 'canceled',
      TestEvent = <any> 'test_event'
  }
  export enum TravelBookingStatusEnum {
      Draft = <any> 'draft',
      Ready = <any> 'ready',
      InProgress = <any> 'in_progress',
      Completed = <any> 'completed'
  }
}

export namespace EventPosition {
    export enum StatusEnum {
        Pending = <any> 'pending',
        Open = <any> 'open',
        Closed = <any> 'closed'
    }
    export enum RateSettingEnum {
        CrewDefault = <any> 'crew_default',
        CrewBid = <any> 'crew_bid',
        PositionDefined = <any> 'position_defined'
    }
    export enum RateTypeEnum {
        Hourly = <any> 'hourly',
        Daily = <any> 'daily',
        Weekly = <any> 'weekly',
        Event = <any> 'event'
    }
    export enum BilledRateTypeEnum {
        Hourly = <any> 'hourly',
        Daily = <any> 'daily',
        Weekly = <any> 'weekly',
        Event = <any> 'event'
    }
}

export namespace EventRole {
    export enum RoleEnum {
        ProjectManager = <any> 'project-manager',
        Supervisor = <any> 'supervisor',
        AccountManager = <any> 'account-manager',
        Timekeeper = <any> 'timekeeper'
    }
}

export namespace EventNote {
    export enum StatusEnum {
        Active = <any> 'active',
        Hidden = <any> 'hidden',
        Deleted = <any> 'deleted'
    }
}

export namespace EventRosterPositionSerializerNoAnalytics {
    export enum StatusEnum {
        Tentative = <any> 'tentative',
        Approved = <any> 'approved',
        Removed = <any> 'removed',
        Canceled = <any> 'canceled',
        Declined = <any> 'declined'
    }
    export enum RateTypeEnum {
        Hourly = <any> 'hourly',
        Daily = <any> 'daily',
        Weekly = <any> 'weekly',
        Event = <any> 'event'
    }
}

export namespace ScheduleEntry {
    export enum TypeEnum {
        Shift = <any> 'shift',
        DarkDay = <any> 'dark_day',
        Travel = <any> 'travel'
    }
}

export namespace Client {
    export enum StatusEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive',
        Deleted = <any> 'deleted'
    }
}
