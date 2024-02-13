import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';
import 'dayjs/locale/zh-cn';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { DateField } from '@mui/x-date-pickers/DateField';
import { TimeField } from '@mui/x-date-pickers/TimeField';

const locales = ['en', 'en-gb', 'zh-cn', 'de'];
type LocaleKey = (typeof locales)[number];

export const MuiDateTimePicker = () => {
  const [locale, setLocale] = React.useState<LocaleKey>('en');


  return (
    <Stack spacing={3} sx={{ width: 300 }}>
    <ToggleButtonGroup
      value={locale}
      exclusive
      fullWidth
      onChange={(event, newLocale) => {
        if (newLocale != null) {
          setLocale(newLocale);
        }
      }}
    >
      {locales.map((localeItem) => (
        <ToggleButton key={localeItem} value={localeItem}>
          {localeItem}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
    <DateField label="Date" defaultValue={dayjs('2022-04-17')} />
    <TimeField label="Time" defaultValue={dayjs('2022-04-17T18:30')} />
  </Stack>
  )
}
