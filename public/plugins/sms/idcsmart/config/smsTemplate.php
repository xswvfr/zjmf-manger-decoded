<?php
return [
        [
            'type' => '账单支付',
            'var' => '@var(username),您已成功支付账单号#@var(invoiceid),账单金额@var(total).',
            'name'=>'invoice_pay'
        ],
        [
            'type' => '账单支付逾期',
            'var' => '@var(username),您的账单【@var(invoiceid)】已逾期,金额@var(total),请及时支付',
            'name'=>'invoice_overdue_pay'
        ],
        [
            'type' => '提交工单',
            'var' => '@var(username),您的工单：【@var(subject)】正在处理中，请耐心等待',
            'name'=>'submit_ticket'
        ],
        [
            'type'=> '工单回复',
            'var' => '@var(username)，您的工单【@var(subject)】有新回复',
            'name'=>'ticket_reply'
        ],
        [
            'type' => '产品暂停',
            'var' => '@var(username)，您的产品@var(product_name)由于@var(description)已被暂停，如需恢复使用,请尽快处理',
            'name'=>'host_suspend'
        ],
        [
            'type' => '未支付账单',
            'var' => '@var(username)，您的账单【#@var(invoiceid)】，金额@var(total)，尚未支付',
            'name'=>'unpay_invoice'
        ],
        [
            'type' => '发送验证码',
            'var' => '验证码@var(code),5分钟内有效,请勿泄漏于他人',
            'name'=>'send_code'
        ],
        [
            'type'=>'登录短信提醒',
            'var'=> '@var(username)，您于@var(time)在IP@var(address)登录.如不是您的登录,请立即更改密码.',
            'name'=>'login_sms_remind'
        ],
        [
            'type' => '订单退款',
            'var' => '订单@var(order_id),金额@var(order_total_fee)已退款',
            'name'=>'order_refund'
        ],
        [
            'type' => '订单支付提醒(客户)',
            'var' => '您的订单【@var(order_id)】已付款,金额：@var(order_total_fee)',
            'name'=>'invoice_payment_confirmation'
        ],
        [
            'type'=> '账单未付款提醒',
            'var' => '@var(username)，您的产品@var(product_name)(主机名@var(hostname))将于@var(product_end_time)到期.请及时续费',
            'name'=>'second_renew_product_reminder'
        ],
        [
            'type' => '自动生成续费账单提醒',
            'var' => '您购买的产品@var(product_name)(主机名@var(hostname))将于@var(product_end_time)到期，到期后将无法使用',
            'name'=>'renew_product_reminder'
        ],
        [
            'type' => '第3次逾期提醒',
            'var' => '您在@var(product_first_time)订购的@var(product_name)产品(主机名：@var(hostname))请及时支付',
            'name'=>'third_invoice_payment_reminder'
        ],
        [
            'type' => '第2次逾期提醒',
            'var' => '您在@var(product_first_time)订购的@var(product_name)产品(主机名：@var(hostname))请及时支付',
            'name'=>'second_invoice_payment_reminder'
        ],
        [
            'type'=>'第1次逾期提醒',
            'var'=> '您在@var(product_first_time)订购的@var(product_name)产品(主机名：@var(hostname))请及时支付',
            'name'=>'first_invoice_payment_reminder'
        ],
        [
            'type'=>'下单提醒(客户)',
            'var'=> '您已于@var(order_create_time)成功下单@var(product_name)，总价@var(product_price),请及时付款',
            'name'=>'new_order_notice'
        ],
        [
            'type'=>'产品开通提醒(用户)',
            'var'=> '您购买的【@var(product_name)】已开通!',
            'name'=>'default_product_welcome'
        ],
        [
            'type'=>'未续期产品删除提醒(用户)',
            'var'=> '产品@var(product_name)(@var(hostname))@var(product_mainip)未续费,已自动删除',
            'name'=>'service_termination_notification'
        ],
        [
            'type'=>'续费成功提醒(用户)',
            'var'=> '您购买的产品(@var(product_name))现已续费成功,到期时间@var(product_end_time)',
            'name'=>'service_unsuspension_notification'
        ],
        [
            'type'=>'未实名暂停产品',
            'var'=> '您的产品：@var(product_name)，@var(product_mainip),由于未实名，已被暂停',
            'name'=>'uncertify_reminder'
        ],
        [
            'type'=>'工单已开通提醒(客户)',
            'var'=> '工单:【@var(ticketnumber_tickettitle)】火速处理中',
            'name'=>'support_ticket_opened'
        ],
        [
            'type'=>'成功绑定提醒(客户)',
            'var'=> '您的账号@var(username)与此@var(epw_type):(@var(epw_account))已成功进行绑定.',
            'name'=>'email_bond_notice'
        ],
        [
            'type'=>'注册成功',
            'var'=> '@var(username)，感谢注册@var(system_companyname)',
            'name'=>'registration_success'
        ],
        [
            'type'=>'信用额账单提醒',
            'var'=> '您有一笔信用额账单产生:账单号#@var(invoiceid),金额@var(total),请及时付款',
            'name'=>'credit_limit_invoice_notice'
        ],
        [
            'type'=>'信用额账单逾期提醒',
            'var'=> '您有一笔信用额账单#@var(invoiceid)，金额@var(total)逾期未支付，相关产品已被暂停',
            'name'=>'credit_limit_invoice_payment_reminder'
        ],
        [
            'type'=>'信用额账单未支付暂停产品',
            'var'=> '您购买的产品：@var(product_name)，（@var(hostname)）由于未支付信用账单，现已被暂停',
            'name'=>'credit_limit_invoice_payment_reminder_host_suspend'
        ],
        [
            'type'=>'解除暂停提醒(用户)',
            'var'=> '您拥有的产品@var(product_name)现已解除暂停恢复使用,感谢您的支持!',
            'name'=>'resume_use'
        ],
        [
            'type'=>'实名认证通过提醒（用户）',
            'var'=> '@var(username),您提交的实名认证审核已通过！',
            'name'=>'realname_pass_remind'
        ],
        [
            'type'=>'账号绑定提示（用户）',
            'var'=> '@var(username)，您已绑定[@var(system_companyname)]，如非您本人操作，请立即更改登录密码',
            'name'=>'binding_remind'
        ],
    ];