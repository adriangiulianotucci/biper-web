"use client";

import { usePush } from "@/push-notifications/usePush";

const Loading = ({ loading }) =>
  loading ? (
    <div className="text-red-300">Please wait, we are loading something...</div>
  ) : null;

const Error = ({ error }) =>
  error ? (
    <section className="text-red-500">
      <h2>{error.name}</h2>
      <p>Error message : {error.message}</p>
      <p>Error code : {error.code}</p>
    </section>
  ) : null;

export default function OrdersPage({ params }) {
  const {
    userConsent,
    pushNotificationSupported,
    userSubscription,
    onClickAskUserPermission,
    onClickSusbribeToPushNotification,
    onClickSendSubscriptionToPushServer,
    pushServerSubscriptionId,
    onClickSendNotification,
    error,
    loading,
  } = usePush();

  const isConsentGranted = userConsent === "granted";

  return (
    <div>
      <Loading loading={loading} />

      <p className="text-white">
        Push notification are {!pushNotificationSupported && "NOT"} supported by
        your device.
      </p>

      <p className="text-white">
        User consent to recevie push notificaitons is{" "}
        <strong>{userConsent}</strong>.
      </p>

      <Error error={error} />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={!pushNotificationSupported || isConsentGranted}
        onClick={onClickAskUserPermission}
      >
        {isConsentGranted ? "Consent granted" : " Ask user permission"}
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={
          !pushNotificationSupported || !isConsentGranted || userSubscription
        }
        onClick={onClickSusbribeToPushNotification}
      >
        {userSubscription
          ? "Push subscription created"
          : "Create Notification subscription"}
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={!userSubscription || pushServerSubscriptionId}
        onClick={onClickSendSubscriptionToPushServer}
      >
        {pushServerSubscriptionId
          ? "Subscrption sent to the server"
          : "Send subscription to push server"}
      </button>

      {pushServerSubscriptionId && (
        <div>
          <p className="text-white">
            The server accepted the push subscrption!
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onClickSendNotification}
          >
            Send a notification
          </button>
        </div>
      )}

      <section>
        <h4 className="text-white">Your notification subscription details</h4>
        <pre>
          <code className="text-yellow-500">
            {JSON.stringify(userSubscription, null, " ")}
          </code>
        </pre>
      </section>
    </div>
  );
}
