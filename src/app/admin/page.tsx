import { getSiteContent } from "@/lib/content";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata = {
  title: "Admin Dashboard | Growth Maker",
};

export default async function AdminPage() {
  const content = await getSiteContent();
  return <AdminDashboard initialContent={content} />;
}
