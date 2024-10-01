'use strict'

const SERVICE_TYPE = {
    TELE: 1,
    HWORK: 2,
    PORTAL: 3,
    CRM: 4
}

const COMMAND = {
    START: '!start',
    SUCCESS: 'Liên kết thành công tới tài khoản!',
    SYNTAX_ERROR: 'Cú pháp không đúng, để bắt đầu tạo đơn xin nhập lệnh: !start',
    ALLREADY_LINKED: 'Tài khoản này đã được liên kết!'
}

module.exports = {
    serviceType: SERVICE_TYPE,
    command: COMMAND
}
