import type { FC } from 'hono/jsx'

export const Layout: FC = (props) => {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        ></meta>
        <title>
          {props.title}
        </title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gradient-to-t from-gray-700 to-gray-800 container mx-auto">
        {props.children}
      </body>
    </html>
  );
};