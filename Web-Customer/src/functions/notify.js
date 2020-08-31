import storeAccessible from './storeAccessible'
import { AddNotification } from '../common/actions/common';

export const NotifyVariantType = {
    Default: 'default',
    Success: 'success',
    Warining: 'warning',
    Info: 'info',
    Error: 'error',
}

export const NotifyType = {
    LoginSuccess: {
        key: 'LoginSuccess',
        variant: NotifyVariantType.Success,        
    },
    LoginFailedByNotActive: {
        key: 'LoginFailedByNotActive',
        variant: NotifyVariantType.Error,        
    },
    LoginFailedByInvalidCredentials: {
        key: 'LoginFailedByInvalidCredentials',
        variant: NotifyVariantType.Error,        
    },
    LoginFailedDefault: {
        key: 'LoginFailedDefault',
        variant: NotifyVariantType.Error,        
    },
    Logout: {
        key: 'Logout',
        variant: NotifyVariantType.Success,        
    },
    CustomerSignupSuccess: {
        key: 'CustomerSignupSuccess',
        variant: NotifyVariantType.Success,
    },
    CustomerSignupFailedBySameEmail: {
        key: 'CustomerSignupFailedBySameEmail',
        variant: NotifyVariantType.Error,
    },
    CustomerSignupFailedByPasswordNotMatch: {
        key: 'CustomerSignupFailedByPasswordNotMatch',
        variant: NotifyVariantType.Error,
    },
    CustomerSignupFailed: {
        key: 'CustomerSignupFailed',
        variant: NotifyVariantType.Error,
    },
    SentForgotPassword: {
        key: 'SentForgotPassword',
        variant: NotifyVariantType.Success,
    },
    SentForgotPasswordFailed: {
        key: 'SentForgotPasswordFailed',
        variant: NotifyVariantType.Error,
    },
    ChangePasswordSuccess: {
        key: 'ChangePasswordSuccess',
        variant: NotifyVariantType.Success,
    },
    ChangePasswordFailed: {
        key: 'ChangePasswordFailed',
        variant: NotifyVariantType.Error,
    },
    ChangePasswordFailedByInvalidPassword: {
        key: 'ChangePasswordFailedByInvalidPassword',
        variant: NotifyVariantType.Error,
    },
    AddFavouriteSolutionSuccess: {
        key: 'AddFavouriteSolutionSuccess',
        variant: NotifyVariantType.Success,
    },
    AddFavouriteSolutionFailedByAdded: {
        key: 'AddFavouriteSolutionFailedByAdded',
        variant: NotifyVariantType.Error,
    },
    RemoveFavouriteSolutionSuccess: {
        key: 'RemoveFavouriteSolutionSuccess',
        variant: NotifyVariantType.Warining,
    },
    RemoveFavouriteSolutionFailedByNotFound: {
        key: 'RemoveFavouriteSolutionFailedByNotFound',
        variant: NotifyVariantType.Error,
    },
    ActionWithInvalidSolution: {
        key: 'ActionWithInvalidSolution',
        variant: NotifyVariantType.Warining,
    },
    RequestSolutionSuccess: {
        key: 'RequestSolutionSuccess',
        variant: NotifyVariantType.Success,
    },
    RequestSolutionFailedByRequested: {
        key: 'RequestSolutionFailedByRequested',
        variant: NotifyVariantType.Error,
    },
    AddScreenshotSuccess: {
        key: 'AddScreenshotSuccess',
        variant: NotifyVariantType.Success,
    },
    AddScreenshotFailed: {
        key: 'AddScreenshotFailed',
        variant: NotifyVariantType.Error,
    },
    RemoveScreenshotSuccess: {
        key: 'RemoveScreenshotSuccess',
        variant: NotifyVariantType.Success,
    },
    RemoveScreenshotFailedByNotFound: {
        key: 'RemoveScreenshotFailedByNotFound',
        variant: NotifyVariantType.Error,
    },
    RemoveScreenshotFailed: {
        key: 'RemoveScreenshotFailed',
        variant: NotifyVariantType.Error,
    },
    AddSolutionSuccess: {
        key: 'AddSolutionSuccess',
        variant: NotifyVariantType.Success,
    },
    AddSolutionFailed: {
        key: 'AddSolutionFailed',
        variant: NotifyVariantType.Error,
    },
    DeleteSolutionSuccess: {
        key: 'DeleteSolutionSuccess',
        variant: NotifyVariantType.Success,
    },
    DeleteSolutionFailed: {
        key: 'DeleteSolutionFailed',
        variant: NotifyVariantType.Error,
    },
    PublishSolutionSuccess: {
        key: 'PublishSolutionSuccess',
        variant: NotifyVariantType.Success,
    },
    PublishSolutionFailed: {
        key: 'PublishSolutionFailed',
        variant: NotifyVariantType.Error,
    },
    PublishSolutionLimitFailed: {
        key: 'PublishSolutionLimitFailed',
        variant: NotifyVariantType.Error,
    },
    PublishSolutionMembershipFailed: {
        key: 'PublishSolutionMembershipFailed',
        variant: NotifyVariantType.Error,
    },
    PublishSolutionExpiredFailed: {
        key: 'PublishSolutionExpiredFailed',
        variant: NotifyVariantType.Error,
    },
    UnpublishSolutionSuccess: {
        key: 'UnpublishSolutionSuccess',
        variant: NotifyVariantType.Success,
    },
    UnpublishSolutionFailed: {
        key: 'UnpublishSolutionFailed',
        variant: NotifyVariantType.Error,
    },
    SolutionNotFound: {
        key: 'SolutionNotFound',
        variant: NotifyVariantType.Error,
    },
    EditSolutionSuccess: {
        key: 'EditSolutionSuccess',
        variant: NotifyVariantType.Success,
    },
    EditSolutionFailed: {
        key: 'EditSolutionFailed',
        variant: NotifyVariantType.Error,
    },
    RegisterProviderSuccess: {
        key: 'RegisterProviderSuccess',
        variant: NotifyVariantType.Success,
    },
    RegisterProviderFailed: {
        key: 'RegisterProviderFailed',
        variant: NotifyVariantType.Error,
    },
    ChangeInformationSuccess: {
        key: 'ChangeInformationSuccess',
        variant: NotifyVariantType.Success,
    },
    ChangeInformationFailed: {
        key: 'ChangeInformationFailed',
        variant: NotifyVariantType.Error,
    },
    UpdateServiceSuccess: {
        key: 'UpdateServiceSuccess',
        variant: NotifyVariantType.Success,
    },
    UpdateServiceFailed: {
        key: 'UpdateServiceSuccess',
        variant: NotifyVariantType.Error,
    },
    DeleteSolutionTrailSuccess: {
        key: 'DeleteSolutionTrailSuccess',
        variant: NotifyVariantType.Success,
    },
    DeleteSolutionTrailFailed: {
        key: 'DeleteSolutionTrailFailed',
        variant: NotifyVariantType.Error,
    },
    OrderPackageFailed: {
        key: 'OrderPackageFailed',
        variant: NotifyVariantType.Error,
    },
    AddSolutionTrailSuccess: {
        key: 'AddSolutionTrailSuccess',
        variant: NotifyVariantType.Success,
    },
    AddSolutionTrailFailed: {
        key: 'AddSolutionTrailFailed',
        variant: NotifyVariantType.Error,
    },
    UpdateSocialSuccess: {
        key: 'UpdateSocialSuccess',
        variant: NotifyVariantType.Success,
    },
    UpdateSocialFailed: {
        key: 'UpdateSocialFailed',
        variant: NotifyVariantType.Error,
    },
    AddSocialSuccess: {
        key: 'AddSocialSuccess',
        variant: NotifyVariantType.Success,
    },
    AddSocialFailed: {
        key: 'AddSocialFailed',
        variant: NotifyVariantType.Error,
    },
    DeleteSocialSuccess: {
        key: 'DeleteSocialSuccess',
        variant: NotifyVariantType.Success,
    },
    DeleteSocialFailed: {
        key: 'DeleteSocialFailed',
        variant: NotifyVariantType.Error,
    },
    SencContactSuccess: {
        key: 'SencContactSuccess',
        variant: NotifyVariantType.Success,
    },
    SencContactFailed: {
        key: 'SencContactFailed',
        variant: NotifyVariantType.Error,
    },
    UpdateRequestStatusSuccess: {
        key: 'UpdateRequestStatusSuccess',
        variant: NotifyVariantType.Success,
    },
    UpdateRequestStatusFailed: {
        key: 'UpdateRequestStatusFailed',
        variant: NotifyVariantType.Error,
    },
    EmailNotFound: {
        key: 'EmailNotFound',
        variant: NotifyVariantType.Error,
    },
    SendVerifyAccountSuccess: {
        key: 'SendVerifyAccountSuccess',
        variant: NotifyVariantType.Success,
    },
    SendVerifyAccountFailed: {
        key: 'SendVerifyAccountFailed',
        variant: NotifyVariantType.Error,
    },
    ResetPasswordSuccess: {
        key: 'ResetPasswordSuccess',
        variant: NotifyVariantType.Success,
    },
    ResetPasswordFailed: {
        key: 'ResetPasswordFailed',
        variant: NotifyVariantType.Error,
    },
    SubscribeSuccess: {
        key: 'SubscribeSuccess',
        variant: NotifyVariantType.Success,
    },
    SubscribeFailed: {
        key: 'SubscribeFailed',
        variant: NotifyVariantType.Error,
    }
}

export const enqueueNotiStack = (notification, options = {}) => {    
    if (!notification || !notification.key || !NotifyType[notification.key]) throw new Error(`Notification type is invalid`);
    const { data, ...rest } = options;
    storeAccessible.dispatch(AddNotification({
		message: notification.key,
        key: notification.key + '_' + new Date().getTime() + Math.random(),
        data,
		options: {
			variant: notification.variant,			
            ...rest
		},
	}))
}

