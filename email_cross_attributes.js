$(document).ready(function() {
    //push_title
        $('#subject').val(
        $('#subject').val().replace('{ { campaign.${name} } }',"{{campaign.${name}}}")
        );
        
        $('#subject').val(
        $('#subject').val().replace('{ { ${set_user_to_unsubscribed_url} } }',"{{${set_user_to_unsubscribed_url}}}")
        );

        $('#subject').val(
        $('#subject').val().replace('{ { ${date_of_birth} } }',"{{${date_of_birth}}}")
        );

        $('#subject').val(
        $('#subject').val().replace('{ { ${email_address} } }',"{{${email_address}}}")
        );

        $('#subject').val(
        $('#subject').val().replace('{ { ${first_name} } }',"{{${first_name}}}")
        );

        $('#subject').val(
        $('#subject').val().replace('{ { ${gender} } }',"{{${gender}}}")
        );

        $('#subject').val(
        $('#subject').val().replace('{ { ${last_name} } }',"{{${last_name}}}")
        );

        $('#subject').val(
        $('#subject').val().replace('{ { ${last_used_app_date} } }',"{{${last_used_app_date}}}")
        );
        
        $('#subject').val(
        $('#subject').val().replace('{ { ${most_recent_app_version} } }',"{{${most_recent_app_version}}}")
        );
        
        $('#subject').val(
        $('#subject').val().replace('{ { ${phone_number} } }',"{{${phone_number}}}")
        );
        
        $('#subject').val(
        $('#subject').val().replace('{ { ${time_zone} } }',"{{${time_zone}}}")
        );
        
        $('#subject').val(
        $('#subject').val().replace('{ { ${company} } }',"{{${company}}}")
        );
});