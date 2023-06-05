import { Icon } from "@iconify/react";

export default function Logo() {
  return (
    <>
      <div className='flex flex-column justify-center items-center gap-3'>
        <a>
          <Icon icon='logos:vitejs' width='60' height='60' />
        </a>
        <a>
          <Icon icon='logos:react' width='60' height='60' />
        </a>
        <a>
          <Icon icon='logos:tailwindcss-icon' width='60' height='60' />
        </a>
      </div>
    </>
  );
}
