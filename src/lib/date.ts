export const formatDate = (date: string) => {
  const dateObject = new Date(date);
  const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const targetDate = new Date(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate());

  const oneDayInMs = 1000 * 60 * 60 * 24;

  if (targetDate.getTime() === today.getTime() - oneDayInMs) {
    return "yesterday";
  }

  if (targetDate.getTime() === today.getTime()) {
    return "today";
  }

  if (targetDate.getTime() === today.getTime() + oneDayInMs) {
    return "tomorrow";
  }

  return dateObject.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
