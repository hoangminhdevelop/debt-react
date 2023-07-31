import { cn } from '@/utils/tailwind';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('animate-pulse rounded-md', className)} {...props} />
  );
}

export { Skeleton };
