// eslint-disable-next-line import/no-relative-packages
import { Plugin } from '../../shared/plugin.interface';
import { ZipCodeInputComponent } from './ZipCodeInputComponent';

export const plugin: Plugin = {
    name: 'zip_code_input',
    Message: ZipCodeInputComponent,
};