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
    const notifClass = `notification ${notificationValue}`;
    return <div className={notifClass}>{notificationValue}</div>;
  }
}
