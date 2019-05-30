// Copyright (c) 2017-2019, The Vpub Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/vpub/vpub-market/blob/develop/LICENSE

import { MessageBody } from '../../core/api/MessageBody';
import { ListingItemMessageInterface } from './ListingItemMessageInterface';

export class ListingItemMessage extends MessageBody implements ListingItemMessageInterface {

    public hash: string;
    public information: any;
    public payment: any;
    public messaging: any;
    public objects?: any;
}
