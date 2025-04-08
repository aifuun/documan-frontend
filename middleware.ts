import { NextRequest, NextResponse } from "next/server"; // 从 'next/server' 模块导入 NextRequest 和 NextResponse 类型，它们是处理 Next.js 中间件请求和响应的核心 [1, 2]

import { fetchAuthSession } from "aws-amplify/auth/server"; // 从 'aws-amplify/auth/server' 导入 fetchAuthSession 函数，该函数用于在服务器端获取用户的身份验证会话信息 [1, 2]

import { runWithAmplifyServerContext } from "@/utils/amplify-utils"; // 从 '@/utils/amplify-utils' 导入 runWithAmplifyServerContext 函数，它提供了一个在 Next.js 服务器环境中运行 Amplify 相关操作的上下文 [1-4]

export async function middleware(request: NextRequest) {
  // 定义一个名为 middleware 的异步函数，它接收一个 NextRequest 对象作为参数。这个函数将在每个匹配的路由被处理之前执行 [1, 2]
  const response = NextResponse.next();
  // 创建一个 NextResponse 对象，调用 next() 方法表示如果中间件没有进行重定向或其他操作，则继续处理原始请求 [1, 2]

  const authenticated = await runWithAmplifyServerContext({
    // 使用 runWithAmplifyServerContext 函数来执行一个需要 Amplify 上下文的操作，并等待结果 [1, 2]
    nextServerContext: { request, response },
    // 将当前的 Next.js 请求 (request) 和响应 (response) 对象传递给 Amplify 的服务器上下文 [1, 2]
    operation: async (contextSpec) => {
      // 定义要在 Amplify 上下文中执行的异步操作。contextSpec 包含了执行 Amplify 操作所需的上下文信息
      try {
        const session = await fetchAuthSession(contextSpec, {});
        // 调用 fetchAuthSession 函数来获取用户的身份验证会话。第二个空对象参数表示使用默认的获取会话选项 [1, 2, 5]
        return session.tokens !== undefined;
        // 检查会话对象中是否存在 tokens 属性。如果存在，表示用户已通过身份验证，返回 true [1, 2]
      } catch (error) {
        console.log(error);
        return false;
        // 如果在获取会话过程中发生任何错误，记录错误并返回 false，表示用户未通过身份验证 [1, 2]
      }
    },
  });

  if (authenticated) {
    // 如果 authenticated 为 true (表示用户已通过身份验证)
    return response;
    // 返回原始的响应，允许请求继续访问其目标路由 [1, 2]
  }

  return NextResponse.redirect(new URL("/login", request.url));
  // 如果 authenticated 为 false (表示用户未通过身份验证)，则将用户重定向到 /login 页面。使用 request.url 构建完整的重定向 URL [1, 2]
}

export const config = {
  // 定义中间件的配置对象
  matcher: [
    /*
     * 匹配所有请求路径，但排除以以下内容开头的路径：
     * - api (API 路由)
     * - _next/static (静态文件)
     * - _next/image (图片优化文件)
     * - favicon.ico (网站图标文件)
     * - login (登录页面本身，以避免重定向循环)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|login).*)",
  ],
};