// import 'date-fns';
import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  Input,
  FormHelperText,
  FormLabel,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormGroup,
  Checkbox,
  Button,
  Switch,
  TextField,
  Box,
} from '@material-ui/core';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const useStyles = makeStyles(() =>
  createStyles({
    'home-Select': {
      width: '200px',
    },
  })
);

const genders = [
  {
    value: '男性',
    disabled: false,
  },
  {
    value: '女性',
    disabled: false,
  },
  {
    value: 'その他',
    disabled: false,
  },
  {
    value: '選択不可',
    disabled: true,
  },
];

const animals = ['犬', '猫', '狐', 'ラッコ', 'aaaaaaaaaaaaaaaaaaaaaa'];

const colors = ['赤', 'オレンジ', '黄', '緑', '青', '紫'];

const option1 = false;
const option2 = false;
const option3 = true;

const date = new Date();

interface FormValues {
  user: string;
  email: string;
  gender: string;
  animal: string;
  colors: string[];
  option1: boolean;
  option2: boolean;
  option3: boolean;
  date: Date;
}

const Home: FunctionComponent = () => {
  const classes = useStyles();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik<FormValues>({
    initialValues: {
      user: '',
      email: '',
      gender: '男性',
      animal: '',
      colors: [],
      option1,
      option2,
      option3,
      date,
    },
    validationSchema: Yup.object().shape({
      user: Yup.string()
        .min(2, '短スギィ！')
        .max(50, '長スギィ！')
        .required('入力必須'),
      email: Yup.string()
        .email('フォーマットが違います')
        .required('入力必須'),
      gender: Yup.string().required('入力必須'),
      colors: Yup.array().required('一つ選んでください'),
    }),
    initialErrors: {
      user: '',
      email: '',
      gender: '',
      animal: '',
      colors: [],
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      {String(JSON.stringify(values, null, 2))}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <FormGroup>
            <Box marginTop={2}>
              <FormControl error={touched.user && errors.user ? true : false}>
                <InputLabel htmlFor="user">ユーザー名</InputLabel>
                <Input
                  type="input"
                  name="user"
                  value={values.user}
                  id="user"
                  aria-describedby="input-user"
                  onChange={handleChange}
                />

                <FormHelperText id="user">
                  {touched.user && errors.user
                    ? errors.user
                    : 'ユーザー名を入力'}
                </FormHelperText>
              </FormControl>
            </Box>

            <Box marginTop={2}>
              <FormControl error={touched.email && errors.email ? true : false}>
                <InputLabel htmlFor="email">メールアドレス</InputLabel>
                <Input
                  type="input"
                  name="email"
                  value={values.email}
                  id="email"
                  aria-describedby="input-email"
                  onChange={handleChange}
                />

                <FormHelperText id="email">
                  {touched.email && errors.email
                    ? errors.email
                    : 'メールアドレスを入力'}
                </FormHelperText>
              </FormControl>
            </Box>

            <Box marginTop={2}>
              <FormControl>
                <FormLabel component="legend">性別</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                >
                  {genders.map((gender, index) => (
                    <FormControlLabel
                      key={index}
                      value={gender.value}
                      control={<Radio />}
                      disabled={gender.disabled}
                      label={gender.value}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>

            <Box marginTop={2}>
              <FormControl
                error={touched.animal && errors.animal ? true : false}
              >
                <InputLabel htmlFor="animal">好きな動物</InputLabel>
                <Select
                  className={classes['home-Select']}
                  value={values.animal}
                  onChange={handleChange}
                  inputProps={{
                    name: 'animal',
                    id: 'animal',
                  }}
                >
                  {animals.map((animal) => (
                    <MenuItem key={animal} value={animal}>
                      {animal}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box marginTop={2}>
              <FormControl
                error={touched.colors && errors.colors ? true : false}
              >
                <FormLabel htmlFor="colors">好きな色</FormLabel>
                {colors.map((color) => (
                  <FormControlLabel
                    key={color}
                    control={
                      <Checkbox
                        onChange={handleChange}
                        value={color}
                        inputProps={{
                          name: 'colors',
                          id: 'colors',
                        }}
                      />
                    }
                    label={color}
                  />
                ))}
                <FormHelperText id="colors">
                  {touched.colors && errors.colors
                    ? errors.colors
                    : '好きな色を選択'}
                </FormHelperText>
              </FormControl>
            </Box>

            <Box marginTop={2}>
              <FormControl>
                <FormLabel htmlFor="options">チェックリスト</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={values.option1}
                        onChange={handleChange}
                        value={values.option1}
                        name="option1"
                        id="option1"
                      />
                    }
                    label="option1"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={values.option2}
                        onChange={handleChange}
                        value={values.option2}
                        name="option2"
                        id="option2"
                      />
                    }
                    label="option2"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={values.option3}
                        onChange={handleChange}
                        value={values.option3}
                        name="option3"
                        id="option3"
                      />
                    }
                    label="option3"
                  />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
              </FormControl>
            </Box>

            <Box display="flex" marginTop={2}>
              <FormControl>
                <TextField
                  id="date"
                  label="公開年月日"
                  type="date"
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="time"
                  label="公開時間"
                  type="time"
                  defaultValue="07:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300,
                  }}
                />
              </FormControl>
            </Box>

            <Box display="flex" marginTop={2}>
              <KeyboardDatePicker
                clearable
                disablePast
                label="公開年月日"
                value={values.date}
                onChange={(date) => setFieldValue('date', date, false)}
                format="yyyy/MM/dd"
              />

              <KeyboardTimePicker
                clearable
                label="公開時間"
                value={values.date}
                onChange={(date) => setFieldValue('date', date, false)}
                format="HH:mm"
              />
            </Box>

            <Box marginTop={2} display="flex" justifyContent="center">
              <Button type="submit" variant="contained" color="primary">
                submit
              </Button>
            </Box>
          </FormGroup>
        </form>
      </MuiPickersUtilsProvider>
    </>
  );
};

export default Home;
