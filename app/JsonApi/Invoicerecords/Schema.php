<?php

namespace App\JsonApi\Invoicerecords;
use App\Models\invoicerecords;
use App\JsonApi\Base\SchemaProvider;
class Schema extends SchemaProvider
{

    /**
     * @var string
     */
    protected $resourceType = 'invoicerecords';

    /**
     * @param invoicerecords $resource
     *      the domain record being serialized.
     * @return string
     */
    public function getId($resource)
    {
        return (string) $resource->getRouteKey();
    }
    /**
     * @param invoicerecords $resource
     *      the domain record being serialized.
     * @return string
     */
    public function getAttributes($resource)
    {
        return [
            'id',
            'first_name'=> $resource->first_name,
            'last_name'=> $resource->last_name,
            'id_number'=> $resource->id_number,
            'tax_address'=> $resource->tax_address,
            'user_id'=> $resource->user_id,
            'taxpayer'=> $resource->taxpayer,
            'invoice_type'=> $resource->invoice_type,
            'tax_no'=> $resource->tax_no,
            'country'=> $resource->country,
            'email'=> $resource->email,
            'city'=> $resource->city,
            'phone'=> $resource->phone,
            'district'=> $resource->district,
            'e_invoice'=> $resource->e_invoice,
            'company_name'=> $resource->company_name,
            'createdAt' => $resource->created_at,
            'updated_at' => $resource->updated_at,

        ];
    }
}
