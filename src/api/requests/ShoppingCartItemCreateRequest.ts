// Copyright (c) 2017-2019, The Vpub Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/vpub/vpub-market/blob/develop/LICENSE

import { IsNotEmpty } from 'class-validator';
import { RequestBody } from '../../core/api/RequestBody';

// tslint:disable:variable-name
export class ShoppingCartItemCreateRequest extends RequestBody {
    @IsNotEmpty()
    public shopping_cart_id: number;

    @IsNotEmpty()
    public listing_item_id: number;
}
// tslint:enable:variable-name
