import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default"
import PostsList from "../features/PostsList";
import UserMetrics from "../features/UserMetrics";

export default function Home() {
  usePageTitle('Home')

  return <DefaultLayout>
    <UserMetrics />
    <PostsList />
  </DefaultLayout>
}