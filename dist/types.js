"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.ScheduleEntry = exports.EventRosterPositionSerializerNoAnalytics = exports.EventNote = exports.EventRole = exports.EventPosition = exports.Event = exports.Market = void 0;
class Market {
}
exports.Market = Market;
var Event;
(function (Event) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Unpublished"] = 'unpublished'] = "Unpublished";
        StatusEnum[StatusEnum["Published"] = 'published'] = "Published";
        StatusEnum[StatusEnum["Completed"] = 'completed'] = "Completed";
        StatusEnum[StatusEnum["Canceled"] = 'canceled'] = "Canceled";
        StatusEnum[StatusEnum["TestEvent"] = 'test_event'] = "TestEvent";
    })(StatusEnum = Event.StatusEnum || (Event.StatusEnum = {}));
    let TravelBookingStatusEnum;
    (function (TravelBookingStatusEnum) {
        TravelBookingStatusEnum[TravelBookingStatusEnum["Draft"] = 'draft'] = "Draft";
        TravelBookingStatusEnum[TravelBookingStatusEnum["Ready"] = 'ready'] = "Ready";
        TravelBookingStatusEnum[TravelBookingStatusEnum["InProgress"] = 'in_progress'] = "InProgress";
        TravelBookingStatusEnum[TravelBookingStatusEnum["Completed"] = 'completed'] = "Completed";
    })(TravelBookingStatusEnum = Event.TravelBookingStatusEnum || (Event.TravelBookingStatusEnum = {}));
})(Event = exports.Event || (exports.Event = {}));
var EventPosition;
(function (EventPosition) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Pending"] = 'pending'] = "Pending";
        StatusEnum[StatusEnum["Open"] = 'open'] = "Open";
        StatusEnum[StatusEnum["Closed"] = 'closed'] = "Closed";
    })(StatusEnum = EventPosition.StatusEnum || (EventPosition.StatusEnum = {}));
    let RateSettingEnum;
    (function (RateSettingEnum) {
        RateSettingEnum[RateSettingEnum["CrewDefault"] = 'crew_default'] = "CrewDefault";
        RateSettingEnum[RateSettingEnum["CrewBid"] = 'crew_bid'] = "CrewBid";
        RateSettingEnum[RateSettingEnum["PositionDefined"] = 'position_defined'] = "PositionDefined";
    })(RateSettingEnum = EventPosition.RateSettingEnum || (EventPosition.RateSettingEnum = {}));
    let RateTypeEnum;
    (function (RateTypeEnum) {
        RateTypeEnum[RateTypeEnum["Hourly"] = 'hourly'] = "Hourly";
        RateTypeEnum[RateTypeEnum["Daily"] = 'daily'] = "Daily";
        RateTypeEnum[RateTypeEnum["Weekly"] = 'weekly'] = "Weekly";
        RateTypeEnum[RateTypeEnum["Event"] = 'event'] = "Event";
    })(RateTypeEnum = EventPosition.RateTypeEnum || (EventPosition.RateTypeEnum = {}));
    let BilledRateTypeEnum;
    (function (BilledRateTypeEnum) {
        BilledRateTypeEnum[BilledRateTypeEnum["Hourly"] = 'hourly'] = "Hourly";
        BilledRateTypeEnum[BilledRateTypeEnum["Daily"] = 'daily'] = "Daily";
        BilledRateTypeEnum[BilledRateTypeEnum["Weekly"] = 'weekly'] = "Weekly";
        BilledRateTypeEnum[BilledRateTypeEnum["Event"] = 'event'] = "Event";
    })(BilledRateTypeEnum = EventPosition.BilledRateTypeEnum || (EventPosition.BilledRateTypeEnum = {}));
})(EventPosition = exports.EventPosition || (exports.EventPosition = {}));
var EventRole;
(function (EventRole) {
    let RoleEnum;
    (function (RoleEnum) {
        RoleEnum[RoleEnum["ProjectManager"] = 'project-manager'] = "ProjectManager";
        RoleEnum[RoleEnum["Supervisor"] = 'supervisor'] = "Supervisor";
        RoleEnum[RoleEnum["AccountManager"] = 'account-manager'] = "AccountManager";
        RoleEnum[RoleEnum["Timekeeper"] = 'timekeeper'] = "Timekeeper";
    })(RoleEnum = EventRole.RoleEnum || (EventRole.RoleEnum = {}));
})(EventRole = exports.EventRole || (exports.EventRole = {}));
var EventNote;
(function (EventNote) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Active"] = 'active'] = "Active";
        StatusEnum[StatusEnum["Hidden"] = 'hidden'] = "Hidden";
        StatusEnum[StatusEnum["Deleted"] = 'deleted'] = "Deleted";
    })(StatusEnum = EventNote.StatusEnum || (EventNote.StatusEnum = {}));
})(EventNote = exports.EventNote || (exports.EventNote = {}));
var EventRosterPositionSerializerNoAnalytics;
(function (EventRosterPositionSerializerNoAnalytics) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Tentative"] = 'tentative'] = "Tentative";
        StatusEnum[StatusEnum["Approved"] = 'approved'] = "Approved";
        StatusEnum[StatusEnum["Removed"] = 'removed'] = "Removed";
        StatusEnum[StatusEnum["Canceled"] = 'canceled'] = "Canceled";
        StatusEnum[StatusEnum["Declined"] = 'declined'] = "Declined";
    })(StatusEnum = EventRosterPositionSerializerNoAnalytics.StatusEnum || (EventRosterPositionSerializerNoAnalytics.StatusEnum = {}));
    let RateTypeEnum;
    (function (RateTypeEnum) {
        RateTypeEnum[RateTypeEnum["Hourly"] = 'hourly'] = "Hourly";
        RateTypeEnum[RateTypeEnum["Daily"] = 'daily'] = "Daily";
        RateTypeEnum[RateTypeEnum["Weekly"] = 'weekly'] = "Weekly";
        RateTypeEnum[RateTypeEnum["Event"] = 'event'] = "Event";
    })(RateTypeEnum = EventRosterPositionSerializerNoAnalytics.RateTypeEnum || (EventRosterPositionSerializerNoAnalytics.RateTypeEnum = {}));
})(EventRosterPositionSerializerNoAnalytics = exports.EventRosterPositionSerializerNoAnalytics || (exports.EventRosterPositionSerializerNoAnalytics = {}));
var ScheduleEntry;
(function (ScheduleEntry) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Shift"] = 'shift'] = "Shift";
        TypeEnum[TypeEnum["DarkDay"] = 'dark_day'] = "DarkDay";
        TypeEnum[TypeEnum["Travel"] = 'travel'] = "Travel";
    })(TypeEnum = ScheduleEntry.TypeEnum || (ScheduleEntry.TypeEnum = {}));
})(ScheduleEntry = exports.ScheduleEntry || (exports.ScheduleEntry = {}));
var Client;
(function (Client) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Active"] = 'active'] = "Active";
        StatusEnum[StatusEnum["Inactive"] = 'inactive'] = "Inactive";
        StatusEnum[StatusEnum["Deleted"] = 'deleted'] = "Deleted";
    })(StatusEnum = Client.StatusEnum || (Client.StatusEnum = {}));
})(Client = exports.Client || (exports.Client = {}));
//# sourceMappingURL=types.js.map