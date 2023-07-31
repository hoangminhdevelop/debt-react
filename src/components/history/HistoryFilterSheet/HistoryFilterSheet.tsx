import { HTMLProps, useState } from 'react';

import HistoryFilterForm from '@/components/forms/HistoryFilterForm';
import { HistoryFilterFormProps } from '@/components/forms/HistoryFilterForm/HistoryFilterForm';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { HistoryFilterDataForm } from '@/components/forms/HistoryFilterForm/HistoryFilterForm.schema';

type HistoryFilterSheetProps = HTMLProps<HTMLDivElement> &
  HistoryFilterFormProps;

const HistoryFilterSheet = ({
  onSubmit,
  ...props
}: HistoryFilterSheetProps) => {
  const [isOpen, setOpen] = useState(false);

  const _onSubmit = (data?: HistoryFilterDataForm) => {
    onSubmit(data);
    setOpen(false);
  };

  return (
    <div className={props.className}>
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Filter</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
          </SheetHeader>
          <HistoryFilterForm {...props} onSubmit={_onSubmit} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HistoryFilterSheet;
