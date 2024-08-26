import { Chip } from '@nextui-org/chip';

type ColorType =
  | 'default'
  | 'secondary'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';

const COLORS: Record<string, ColorType> = {
  'Active Development': 'secondary',
};

export default function Status({ status }: { status: string }) {
  const color = COLORS[status] || 'default';

  return (
    <Chip color={color} variant='flat'>
      {status}
    </Chip>
  );
}
