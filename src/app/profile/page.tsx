// app/profile/page.tsx
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';



// 页面组件 - 默认是 Server Component
export default async function ProfilePage() {
  const userId = await getLoggedInUserIdentity();

  if (!userId) {
    // 如果用户未登录，重定向到登录页
    redirect('/login');
    // 注意：在 Server Component 中使用 redirect() 是 Next.js 提供的特殊功能
  }

  // 获取用户详情
  const userDetails = await fetchUserDetails(userId);

  if (!userDetails) {
    // 如果用户存在但获取详情失败，可以显示错误或重定向
    return (
      <div>
        <p>抱歉，未能获取用户详情。</p>
      </div>
    );
  }

  // 渲染用户详情
  return (
    <div>
      <h1>用户档案</h1>
      <p>ID: {userDetails.id}</p>
      <p>邮箱: {userDetails.email}</p>
      <p>介绍: {userDetails.bio}</p>
      {/* 显示其他用户信息 */}
    </div>
  );
}