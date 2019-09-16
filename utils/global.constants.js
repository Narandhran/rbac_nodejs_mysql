const image_resource_path = 'http://172.31.144.124:23314/yaam_resources/dp/',
    server_report_path = '/home/appraam/yaam_attendance_reports',
    local_report_path = '/home/aarti/Desktop',
    hr_role_fk = 4,
    BOOKING_CONS = {
        SHOW_STATUS: 'show',
        NO_SHOW_STATUS: 'noshow',
        BOOKED_STATUS: 'booked',
        CANCEL_STATUS: 'cancelled',
        FCM_TITLE_BOOK: 'Conferrence room booked',
        FCM_TITLE_CANCEL: 'Conferrence Cancelled'
    },
    FCM_CONS = {
        SERVER_KEY: 'AAAADCvxamg:APA91bFPnNi36JIVdbZkcPEOtC_nGZR4-RsCikdOsWTJ5WyqK31Sipfz7KEmItWiccRpGf_M2D6RXvO3h-8sNyGXdqFrjEHnEp4TafMox5Xzfo3SYyICg1jZKeFbqAR-3N6PbZzRiKKO'
    },
    MESSAGE_CONS = {
        LOGIN_SUCCESS: 'Logged in successfully',
        LOGIN_FAILED: 'Login failed, check your username or password',
        LOGOUT_SUCCESS: 'Successfully logged out',
        LOGOUT_FAILED: 'Logout failed, try again',
        SUCCESS: 'Success',
        FAILED: 'Failed',
        BOOKING_SUCCESS: 'Booked successfully',
        BOOKING_FAILED: 'Booked Failed',
        BOOKING_INITIATED: 'Device Unavailable',
        ALREADY_BOOKED: 'Room is Already booked',
        SAME_TIME: 'Booking Times can\'t be same.Please select different times.',
        UNAUTHORIZED: 'You\'re not authorized to access the resource',
        TOKEN_INVALID: 'Session expired, kindly login again',
        NO_CONTENT: 'No content found',
        ERROR: 'error',
        LEAVE_SUCCESS: 'Applied successfully',
        LEAVE_NONE: 'No active leave request'
    },
    LEAVE_CONS = {
        SUB_REQ: 'Requesting leave for approval'
    };
module.exports = {
    image_resource_path,local_report_path,server_report_path,hr_role_fk,
    BOOKING_CONS,
    FCM_CONS,
    MESSAGE_CONS,
    LEAVE_CONS
}


