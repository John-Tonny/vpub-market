// Copyright (c) 2017-2019, The Vpub Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/vpub/vpub-market/blob/develop/LICENSE

import { IsNotEmpty, IsEnum } from 'class-validator';
import { RequestBody } from '../../core/api/RequestBody';
import { ShippingAvailability } from '../../api/enums/ShippingAvailability';

// tslint:disable:variable-name
export class ShippingDestinationCreateRequest extends RequestBody {

    @IsNotEmpty()
    public item_information_id: number;

    @IsNotEmpty()
    public country: string;

    @IsEnum(ShippingAvailability)
    @IsNotEmpty()
    public shippingAvailability: ShippingAvailability;

}
// tslint:enable:variable-name
