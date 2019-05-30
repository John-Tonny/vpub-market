// Copyright (c) 2017-2019, The Vpub Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/vpub/vpub-market/blob/develop/LICENSE

import { IsNotEmpty } from 'class-validator';
import { RequestBody } from '../../core/api/RequestBody';

// tslint:disable:variable-name
export class OrderItemObjectUpdateRequest extends RequestBody {

    @IsNotEmpty()
    public dataId: string;

    @IsNotEmpty()
    public dataValue: string;

}
// tslint:enable:variable-name
