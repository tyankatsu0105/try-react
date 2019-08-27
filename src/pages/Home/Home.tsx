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
} from '@material-ui/core';

interface FormValues {
  user: string;
  email: string;
  gender: string;
  animal: string;
  colors: string[];
}

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

const Home: FunctionComponent = () => {
  const classes = useStyles();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik<
    FormValues
  >({
    initialValues: {
      user: '',
      email: '',
      gender: '男性',
      animal: '',
      colors: [],
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
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormGroup>
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
              {touched.user && errors.user ? errors.user : 'ユーザー名を入力'}
            </FormHelperText>
          </FormControl>

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

            <FormHelperText id="gender">性別を選択</FormHelperText>
          </FormControl>

          <FormControl error={touched.animal && errors.animal ? true : false}>
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

          <FormControl error={touched.colors && errors.colors ? true : false}>
            <FormLabel component="legend" htmlFor="colors">
              好きな色
            </FormLabel>
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

          <Button type="submit">submit</Button>
        </FormGroup>
      </form>
    </>
  );
};

export default Home;
