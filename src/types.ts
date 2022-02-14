export type TransportError = {
  code?: number,
  data: any,
  _istransporterror: true
}

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
  offset?: Number
}

export type EventPosition = {
   /**
    * The LASSO unique identifier for this resource.
    */
    id?: number;
    uuid?: string;
    dbDateCreated?: Date;
    dbDateUpdated?: Date;
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
    rateSetting: EventPosition.RateSettingEnum;
    /**
    * The decimal pay rate for this `event_position`, if its \"rate_setting\" is \"position_defined\".
    */
    rate?: string;
    rateCurrency?: string;
    /**
    * The unit by which pay rate is calculated over time. Conversion rates from weekly to daily to hourly are set by company settings.
    */
    rateType?: EventPosition.RateTypeEnum;
    /**
    * The decimal billed (to `event` `client`) rate for this `event_position`. Defaults to `position` rate- for `event` `client` if set, or default rate.
    */
    billedRate?: string;
    /**
    * The unit by which billable rate is calculated over time. Conversion rates from weekly to daily to hourly are set by company settings.
    */
    billedRateType?: EventPosition.BilledRateTypeEnum;
    /**
    * The earliest date on which this `event_position` requires work. If blank on initial save, set to `event` \"date_begin\". As related `schedule_entry`s are created/updated, calculated to match the earliest of these, of any shift type. 
    */
    scheduleBegin?: string;
    /**
    * The latest date on which this `event_position` requires work. If blank on initial save, set to `event` \"date_end\". As related `schedule_entry`s are created/updated, calculated to match the latest of these, of any shift type. 
    */
    scheduleEnd?: string;
    /**
    * A helper field for creating related `schedule_entry`s in bulk when creating this `event_position` via API. If this field and \"day_end\" are set on initial save, a `schedule_entry` shift with this start time is created for each day between \"schedule_begin\" and \"schedule_end\" (inclusive).
    */
    dayBegin?: string;
    /**
    * A helper field for creating related `schedule_entry`s in bulk when creating this `event_position` via API. If this field and \"day_end\" are set on initial save, a `schedule_entry` shift with this end time is created for each day between \"schedule_begin\" and \"schedule_end\" (inclusive).
    */
    dayEnd?: string;
    scheduleEntries?: Array<ScheduleEntry>;
    /**
    * Whether `crew` approved to work on the `event` roster for this `event_position` may see their shift end times, as determined by `schedule_entry`s. Set to True to display only shift start times.
    */
    hideEndTime?: boolean;
    /**
    * A short description. Unlike \"label\", VISIBLE to `crew`- both crew are both applying, and who are approved to work for this `event_position`.
    */
    note?: string;
    externalCode?: string;
    /**
    * A date the `event_position` has been marked for removal by a third party via the LASSO API.
    */
    externalRemoveDate?: Date;
}

export type Event = {
    /**
    * The LASSO unique identifier for this resource.
    */
    id?: number;
    dbDateCreated?: Date;
    dbDateUpdated?: Date;
    /**
    * This is the id of the `division` the `event` belongs to.
    */
    division: number;
    client: number;
    venue: number;
    /**
    * If this is None, nobody will be local to this event.This is not exposed in the LASSO platform. Instead, it is set by nearest_airport.
    */
    market?: number;
    accountEventStatus: number;
    nearestAirport: string;
    code?: string;
    externalCode?: string;
    name: string;
    status?: Event.StatusEnum;
    travelBookingStatus?: Event.TravelBookingStatusEnum;
    /**
    * Date event was archived. Date format: YYYY-MM-DDThh:mm[:ss[.uuuuuu]][+HH:MM|-HH:MM|Z].
    */
    dateArchived?: Date;
    dateBegin: string;
    dateEnd: string;
    /**
    * The datetime when a child record of the `event` has changed.
    */
    dateChanged?: Date;
    dateDeadline?: Date;
    description?: string;
    localOnly?: boolean;
    groups?: Array<number>;
    positions?: Array<EventPosition>;
    roles?: Array<EventRole>;
    accountUserRoleRelationships?: Array<EventAccountUserRoleRelationship>;
    notes?: Array<EventNote>;
    rosterPositions?: Array<EventRosterPositionSerializerNoAnalytics>;
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
    hideClient?: boolean;
    hideName?: boolean;
}

export type EventRole = {
    /**
    * The LASSO unique identifier for this resource.
    */
    id?: number;
    dbDateCreated?: Date;
    dbDateUpdated?: Date;
    event: number;
    group: number;
    role: EventRole.RoleEnum;
    crew: number;
    isPrimary?: boolean;
    dateAdded?: Date;
    dateRemoved?: Date;
}

export type EventAccountUserRoleRelationship = {
    /**
    * The LASSO unique identifier for this resource.
    */
    id?: number;
    dbDateCreated?: Date;
    dbDateUpdated?: Date;
    dateRemoved?: Date;
    event: number;
    accountUserRole: number;
}

export type EventNote = {
    /**
    * The LASSO unique identifier for this resource.
    */
    id?: number;
    dbDateCreated?: Date;
    dbDateUpdated?: Date;
    event: number;
    dateEntered?: Date;
    subject?: string;
    body?: string;
    status?: EventNote.StatusEnum;
}

export type EventRosterPositionSerializerNoAnalytics = {
    /**
    * The LASSO unique identifier for this resource.
    */
    id?: number;
    dbDateCreated?: Date;
    dbDateUpdated?: Date;
    event: number;
    eventPosition: number;
    group: number;
    crew: number;
    crewPosition: number;
    userAdded?: User;
    userApproved?: User;
    /**
    * The approval status of this `event_roster_position`. Choices are: \"tentative\" (Default): All `event_roster_position`s begin as \"tentative\" when a crew is \"added to the roster\". May also imply that the `event` \"roster\" (collection of related `event_roster_position`s), is still under review in general. \"approved\": The decision to hire this `crew` to work this `event_position` is finalized. The changing of an `event_roster_position` status to \"approved\" is called \"roster approval\". An \"approved\" `event_roster_position`s schedule, as described by its `event_position` related `schedule_entry`s, appears in the crews schedule and displays as \"unavailable\" to other events.  \"confirmed\": This status is not used by LASSO. Please see \"date_confirmed\". \"canceled\": This `event_roster_position`s associated `event` is canceled. \"declined\": This status is set when a `crew` is \"approved\", confirmation is requested, and the `crew` then declines to work. Not visible to `crew`. Unlike declining an invitation, `crew` cannot change their mind after declining to confirm. They do, however, remain on the `event` roster (in \"declined\" status), and they may be re-approved/confirmation re-requested by an admin `user`. \"removed\": If a `crew` is added to a roster then taken off of it, either before or after approval, its status is set to \"removed\". It is not visible to `crew`, but they may be re-added to the roster in status \"tentative\" via crewing.
    */
    status?: EventRosterPositionSerializerNoAnalytics.StatusEnum;
    /**
    * The UTC datetime at which the approval of this `event_roster_position` was confirmed-either by the related `crew` responding to a confirmation request, or by an admin `user`` skipping requesting crew confirmation.
    */
    dateConfirmed?: Date;
    /**
    * The UTC datetime at which an admin `user` approved this `crew` to work this `event_position` on this `event`, thus changing the \"status\" of this `event_roster_position` to \"approved\" (see \"status\").
    */
    dateApproved?: Date;
    /**
    * The UTC datetime at which an admin `user` added this `crew` (as \"tentative\") to work this `event_position` on this `event` (see \"status\").
    */
    dateAdded?: Date;
    /**
    * The decimal pay rate for this `event_roster_position`. Inherited from `event_position`, but may be overridden.
    */
    rate?: string;
    rateCurrency?: string;
    /**
    * The unit by which pay rate is calculated over time. Conversion rates from weekly to daily to hourly are set by company settings.
    */
    rateType?: EventRosterPositionSerializerNoAnalytics.RateTypeEnum;
    /**
    * The reason `crew` was removed from the roster after being approved. Choices include:  1: Didn’t show up   2: Called out - excused   3: Called out - unexcused   4: No longer needed  5: Found a crew member that was a better fit   The default is 0.
    */
    removalReason?: number;
}

export type User = {
    /**
    * `user`'s first name.
    */
    firstName?: string;
    /**
    * `user`'s last name. First and Last name are the `user's \"full name\".
    */
    lastName?: string;
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
    totalCost: string;
    /**
    * The currency type of the total cost given.
    */
    costCurrency: string;
}

export type ScheduleEntry = {
    /**
    * The LASSO unique identifier for this resource.
    */
    id?: number;
    uuid?: string;
    dbDateCreated?: Date;
    dbDateUpdated?: Date;
    event: number;
    eventPosition: number;
    row?: number;
    date: string;
    startTime: string;
    endTime: string;
    timezone?: number;
    type?: ScheduleEntry.TypeEnum;
    utcStart?: Date;
    utcEnd?: Date;
    /**
    * Number hours between start/end time
    */
    hoursDelta?: number;
    /**
    * Number hours worked between start/end (excluding breaks)
    */
    hoursWorked?: number;
    /**
    * Number hours billed -- overridhours_workedid
    */
    hoursBilled?: number;
    hoursOverride?: boolean;
    externalCode?: string;
    /**
    * A date the `event_position` has been marked for removal by a third party via the LASSO API.
    */
    externalRemoveDate?: Date;
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
