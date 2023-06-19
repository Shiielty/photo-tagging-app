import "./Notification.css";

type NotificationPropsType = {
  isNotificationVisible: boolean;
  notificationValue: string;
};

export default function Notification({
  isNotificationVisible,
  notificationValue,
}: NotificationPropsType) {
  if (isNotificationVisible) {
    return <div className="notification">{notificationValue}</div>;
  }
}
