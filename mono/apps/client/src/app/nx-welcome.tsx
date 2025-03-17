import './nx-welcome.css';

interface NxWelcomeProps {
  title: string;
}

const CommandSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <details>
    <summary>
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      {title}
    </summary>
    {children}
  </details>
);

const ListItemLink = ({ href, icon, title, subtitle, external = true }: {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  external?: boolean;
}) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    className="list-item-link"
  >
    {icon}
    <span>
      {title}
      <span>{subtitle}</span>
    </span>
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </a>
);

const ButtonPill = ({ href, icon, title, subtitle, external = true, id }: {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  external?: boolean;
  id?: string;
}) => (
  <a
    id={id}
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    className="button-pill rounded shadow"
  >
    {icon}
    <span>
      {title}
      <span>{subtitle}</span>
    </span>
  </a>
);

export function NxWelcome({ title }: NxWelcomeProps) {
  return (
    <div className="wrapper">
      <div className="container">
        <div id="welcome">
          <h1>
            <span>Hello there,</span>
            Welcome {title} 👋
          </h1>
        </div>

        <div id="hero" className="rounded">
          <div className="text-container">
            <h2>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span>You&apos;re up and running</span>
            </h2>
            <a href="#commands">What&apos;s next?</a>
          </div>
          <div className="logo-container">
            <svg
              fill="currentColor"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.987 14.138l-3.132 4.923-5.193-8.427-.012 8.822H0V4.544h3.691l5.247 8.833.005-3.998 3.044 4.759zm.601-5.761c.024-.048 0-3.784.008-3.833h-3.65c.002.059-.005 3.776-.003 3.833h3.645zm5.634 4.134a2.061 2.061 0 0 0-1.969 1.336 1.963 1.963 0 0 1 2.343-.739c.396.161.917.422 1.33.283a2.1 2.1 0 0 0-1.704-.88zm3.39 1.061c-.375-.13-.8-.277-1.109-.681-.06-.08-.116-.17-.176-.265a2.143 2.143 0 0 0-.533-.642c-.294-.216-.68-.322-1.18-.322a2.482 2.482 0 0 0-2.294 1.536 2.325 2.325 0 0 1 4.002.388.75.75 0 0 0 .836.334c.493-.105.46.36 1.203.518v-.133c-.003-.446-.246-.55-.75-.733zm2.024 1.266a.723.723 0 0 0 .347-.638c-.01-2.957-2.41-5.487-5.37-5.487a5.364 5.364 0 0 0-4.487 2.418c-.01-.026-1.522-2.39-1.538-2.418H8.943l3.463 5.423-3.379 5.32h3.54l1.54-2.366 1.568 2.366h3.541l-3.21-5.052a.7.7 0 0 1-.084-.32 2.69 2.69 0 0 1 2.69-2.691h.001c1.488 0 1.736.89 2.057 1.308.634.826 1.9.464 1.9 1.541a.707.707 0 0 0 1.066.596zm.35.133c-.173.372-.56.338-.755.639-.176.271.114.412.114.412s.337.156.538-.311c.104-.231.14-.488.103-.74z" />
            </svg>
          </div>
        </div>

        <div id="middle-content">
          <div id="middle-content-container">
            <div id="learning-materials" className="rounded shadow">
              <h2>Learning materials</h2>
              <ListItemLink
                href="https://nx.dev/getting-started/intro?utm_source=nx-project"
                icon={
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                }
                title="Documentation"
                subtitle="Everything is in there"
              />
              <ListItemLink
                href="https://nx.dev/blog/?utm_source=nx-project"
                icon={
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                }
                title="Blog"
                subtitle="Changelog, features & events"
              />
              <ListItemLink
                href="https://www.youtube.com/@NxDevtools/videos?utm_source=nx-project&sub_confirmation=1"
                icon={
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                }
                title="YouTube channel"
                subtitle="Nx Show, talks & tutorials"
              />
              <ListItemLink
                href="https://nx.dev/react-tutorial/1-code-generation?utm_source=nx-project"
                icon={
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                }
                title="Interactive tutorials"
                subtitle="Create an app, step-by-step"
              />
            </div>
            <ButtonPill
              id="nx-repo"
              href="https://github.com/nrwl/nx?utm_source=nx-project"
              icon={
                <svg
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              }
              title="Nx is open source"
              subtitle="Love Nx? Give us a star!"
            />
          </div>
          <div id="other-links">
            <ButtonPill
              id="nx-console"
              href="https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console&utm_source=nx-project"
              icon={
                <svg
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Visual Studio Code</title>
                  <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                </svg>
              }
              title="Install Nx Console for VSCode"
              subtitle="The official VSCode extension for Nx."
            />
            <ButtonPill
              id="nx-console-jetbrains"
              href="https://plugins.jetbrains.com/plugin/21060-nx-console"
              icon={
                <svg
                  height="48"
                  width="48"
                  viewBox="20 20 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m22.5 22.5h60v60h-60z" />
                  <g fill="#fff">
                    <path d="m29.03 71.25h22.5v3.75h-22.5z" />
                    <path d="m28.09 38 1.67-1.58a1.88 1.88 0 0 0 1.47.87c.64 0 1.06-.44 1.06-1.31v-5.98h2.58v6a3.48 3.48 0 0 1 -.87 2.6 3.56 3.56 0 0 1 -2.57.95 3.84 3.84 0 0 1 -3.34-1.55z" />
                    <path d="m36 30h7.53v2.19h-5v1.44h4.49v2h-4.42v1.49h5v2.21h-7.6z" />
                    <path d="m47.23 32.29h-2.8v-2.29h8.21v2.27h-2.81v7.1h-2.6z" />
                    <path d="m29.13 43.08h4.42a3.53 3.53 0 0 1 2.55.83 2.09 2.09 0 0 1 .6 1.53 2.16 2.16 0 0 1 -1.44 2.09 2.27 2.27 0 0 1 1.86 2.29c0 1.61-1.31 2.59-3.55 2.59h-4.44zm5 2.89c0-.52-.42-.8-1.18-.8h-1.29v1.64h1.24c.79 0 1.25-.26 1.25-.81zm-.9 2.66h-1.57v1.73h1.62c.8 0 1.24-.31 1.24-.86 0-.5-.4-.87-1.27-.87z" />
                    <path d="m38 43.08h4.1a4.19 4.19 0 0 1 3 1 2.93 2.93 0 0 1 .9 2.19 3 3 0 0 1 -1.93 2.89l2.24 3.27h-3l-1.88-2.84h-.87v2.84h-2.56zm4 4.5c.87 0 1.39-.43 1.39-1.11 0-.75-.54-1.12-1.4-1.12h-1.44v2.26z" />
                    <path d="m49.59 43h2.5l4 9.44h-2.79l-.67-1.69h-3.63l-.67 1.69h-2.71zm2.27 5.73-1-2.65-1.06 2.65z" />
                    <path d="m56.46 43.05h2.6v9.37h-2.6z" />
                    <path d="m60.06 43.05h2.42l3.37 5v-5h2.57v9.37h-2.26l-3.53-5.14v5.14h-2.57z" />
                    <path d="m68.86 51 1.45-1.73a4.84 4.84 0 0 0 3 1.13c.71 0 1.08-.24 1.08-.65 0-.4-.31-.6-1.59-.91-2-.46-3.53-1-3.53-2.93 0-1.74 1.37-3 3.62-3a5.89 5.89 0 0 1 3.86 1.25l-1.26 1.84a4.63 4.63 0 0 0 -2.62-.92c-.63 0-.94.25-.94.6 0 .42.32.61 1.63.91 2.14.46 3.44 1.16 3.44 2.91 0 1.91-1.51 3-3.79 3a6.58 6.58 0 0 1 -4.35-1.5z" />
                  </g>
                </svg>
              }
              title="Install Nx Console for JetBrains"
              subtitle="Available for WebStorm, Intellij IDEA Ultimate and more!"
            />
            <div id="nx-cloud" className="rounded shadow">
              <div>
                <svg
                  id="nx-cloud-logo"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  fill="transparent"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    d="M23 3.75V6.5c-3.036 0-5.5 2.464-5.5 5.5s-2.464 5.5-5.5 5.5-5.5 2.464-5.5 5.5H3.75C2.232 23 1 21.768 1 20.25V3.75C1 2.232 2.232 1 3.75 1h16.5C21.768 1 23 2.232 23 3.75Z"
                  />
                  <path
                    strokeWidth="2"
                    d="M23 6v14.1667C23 21.7307 21.7307 23 20.1667 23H6c0-3.128 2.53867-5.6667 5.6667-5.6667 3.128 0 5.6666-2.5386 5.6666-5.6666C17.3333 8.53867 19.872 6 23 6Z"
                  />
                </svg>
                <h2>
                  Nx Cloud
                  <span>Enable faster CI & better DX</span>
                </h2>
              </div>
              <p>Your Nx Cloud remote cache setup is almost complete.</p>
              <a
                href="https://cloud.nx.app/connect/EqCZDIsM8c"
                target="_blank"
                rel="noreferrer"
              >
                Click here to finish
              </a>
            </div>
          </div>
        </div>

        <div id="commands" className="rounded shadow">
          <h2>Next steps</h2>
          <p>Here are some things you can do with Nx:</p>
          <CommandSection title="Build, test and lint your app">
            <pre>
              <span># Build</span>
              nx build {title}
              <span># Test</span>
              nx test {title}
              <span># Lint</span>
              nx lint {title}
              <span># Run them together!</span>
              nx run-many -p {title} -t build test lint
            </pre>
          </CommandSection>

          <CommandSection title="View project details">
            <pre>nx show project {title}</pre>
          </CommandSection>

          <CommandSection title="View interactive project graph">
            <pre>nx graph</pre>
          </CommandSection>

          <CommandSection title="Add UI library">
            <pre>
              <span># Generate UI lib</span>
              nx g @nx/react:lib ui
              <span># Add a component</span>
              nx g @nx/react:component ui/src/lib/button
            </pre>
          </CommandSection>
        </div>

        <p id="love">
          Carefully crafted with
          <svg
            fill="currentColor"
            stroke="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </p>
      </div>
    </div>
  );
}

export default NxWelcome;
